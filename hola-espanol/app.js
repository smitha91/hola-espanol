{
// ---------- basics ----------
const app = document.getElementById('app');
const CL = window.claude;
const LESSONS = UNITS.flatMap((u, ui) => u.lessons.map(l => ({ ...l, unit: ui, lv: u.lv || 'A1' })));
const WORDS = LESSONS.flatMap(l => l.words.map((w, i) => ({ es: w[0], en: w[1], pos: w[2], ex: w[3], exEn: w[4], pic: w[5], esp: w[6], id: l.id + '.' + i, l: l.id, lv: l.lv })));
const hasLv = k => LESSONS.some(l => l.lv === k);
const lessonOf = id => LESSONS.find(l => l.id === id);
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(v => v[1]);
const pick = (a, n) => shuffle(a).slice(0, n);
const esc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
const day = (d = 0) => new Date(Date.now() - d * 864e5).toLocaleDateString('en-CA');
const stars = n => [1, 2, 3].map(i => `<span class="${i > n ? 'off' : ''}">★</span>`).join('');
const words = t => t.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

// ---------- saved progress (this browser + your private copy in the artifact's db) ----------
const BLANK = { lv: 'A1', t: 0, done: {}, parts: {}, streak: 0, last: '', day: '', min: 0, goal: 15, miss: [], star: [], known: [], exam: { best: null, p: {} } };
let S = { ...BLANK };
try { S = { ...BLANK, ...JSON.parse(localStorage.getItem('hola') || '{}') }; } catch {}
let DOC = null, writing = Promise.resolve();
function save() {
  S.t = Date.now();
  try { localStorage.setItem('hola', JSON.stringify(S)); } catch {}
  if (DOC) { const body = JSON.parse(JSON.stringify(S)); writing = writing.then(() => DOC.set(body)).catch(() => {}); }
}
if (CL) Promise.all([CL.use('db'), CL.use('user')]).then(async ([db, user]) => {
  const id = db && user && await user.id();
  if (!id) return;
  DOC = db.doc('data/users/' + id + '/progress');
  const snap = await DOC.get();
  if (snap.exists && (snap.data().t || 0) > S.t) { S = { ...BLANK, ...snap.data() }; try { localStorage.setItem('hola', JSON.stringify(S)); } catch {} if (H.refresh) H.refresh(); }
}).catch(() => {});

function addTime(ms) {
  if (S.day !== day()) { S.day = day(); S.min = 0; }
  S.min += Math.min(30, ms / 6e4);
  if (S.last !== day()) { S.streak = S.last === day(1) ? S.streak + 1 : 1; S.last = day(); }
  save();
}
const streak = () => (S.last === day() || S.last === day(1)) ? S.streak : 0;
const todayMin = () => S.day === day() ? Math.round(S.min) : 0;

// ---------- audio: browser voice with word highlighting, Claude voice as fallback ----------
let VOICE = null, TTS = null, stopFn = null;
const SYN = window.speechSynthesis;
function pickVoice() { const v = SYN ? SYN.getVoices() : []; VOICE = ['es-MX', 'es-US', 'es-419'].map(l => v.find(x => x.lang.replace('_', '-') === l)).find(Boolean) || v.find(x => x.lang.startsWith('es')) || null; }
if (SYN) { pickVoice(); SYN.onvoiceschanged = pickVoice; }
if (CL) CL.use('tts').then(t => TTS = t).catch(() => {});

function stopSay() { if (stopFn) stopFn(); }
function say(text, o = {}) {
  stopSay();
  return new Promise(res => {
    const toks = text.split(' '), starts = [];
    toks.reduce((p, w) => (starts.push(p), p + w.length + 1), 0);
    const mark = i => o.onWord && o.onWord(i);
    let byVoice = false, timers = [], over = false;
    const estimate = () => {
      let t = 0; const cps = o.slow ? 8 : 13;
      toks.forEach((w, i) => { timers.push(setTimeout(() => byVoice || mark(i), t * 1000)); t += (w.length + 1) / cps + (/[,.?!]$/.test(w) ? .25 : 0); });
      return t;
    };
    const done = () => { if (over) return; over = true; timers.forEach(clearTimeout); stopFn = null; mark(-1); res(); };
    stopFn = () => { if (SYN) SYN.cancel(); if (TTS) TTS.stop(); done(); };
    if (SYN && VOICE) {
      const u = new SpeechSynthesisUtterance(text);
      u.voice = VOICE; u.lang = VOICE.lang; u.rate = o.slow ? .6 : .9; u.pitch = o.pitch || 1;
      u.onboundary = e => { if (e.name && e.name !== 'word') return; byVoice = true; mark(starts.findLastIndex(s => s <= e.charIndex)); };
      u.onstart = estimate; u.onend = u.onerror = done;
      SYN.speak(u);
    } else if (TTS) { estimate(); TTS.speak(text, { language: 'es', rate: o.slow ? .7 : 1 }).catch(() => {}).then(done); }
    else setTimeout(done, estimate() * 1000 + 300);
  });
}
const pitch = who => (CAST[who] || {}).voice === 'm' || who === 'm' ? .85 : 1.2;
let lineGen = 0;
async function sayLines(lines) { const g = ++lineGen; for (const [who, t] of lines) { await say(t, { pitch: pitch(who) }); if (g !== lineGen) return; await new Promise(r => setTimeout(r, 350)); } }
function karaoke(text, el, slow, who) { const ws = el.querySelectorAll('.w'); return say(text, { slow, pitch: who ? pitch(who) : 1, onWord: i => ws.forEach((s, j) => s.classList.toggle('on', i >= 0 && j <= i)) }); }

// ---------- speaking: Claude dictation when this view offers it ----------
let DICT = null, heard = '', onHeard = null;
if (CL) CL.use('dictation').then(d => {
  if (!d) return;
  DICT = d; document.body.classList.add('can-mic');
  d.onFinal(({ text }) => { heard += ' ' + text; showHeard(heard); });
  d.onPartial(({ text }) => showHeard(heard + ' ' + text));
  d.onState(({ state }) => {
    const on = state === 'listening';
    document.querySelectorAll('.mic').forEach(b => b.classList.toggle('rec', on));
    if (!on && onHeard) { const f = onHeard; onHeard = null; f(heard.trim()); }
  });
}).catch(() => {});
function showHeard(t) { const el = document.getElementById('heard'); if (el) el.textContent = t.trim(); }
function listen(cb) {
  if (!DICT) return;
  if (onHeard) { DICT.stop().catch(() => {}); return; }
  stopSay(); heard = ''; onHeard = cb;
  DICT.start().catch(() => { onHeard = null; });
}
function compare(target, said) {
  const got = new Set(norm(said));
  const res = target.split(' ').map(w => { const k = norm(w)[0]; return [w, !k || got.has(k)]; });
  return { html: res.map(([w, ok]) => `<span class="${ok ? 'g' : 'r'}">${w}</span>`).join(' '), score: res.filter(r => r[1]).length / res.length };
}

// ---------- screens: one render function, one click handler ----------
let H = {}, timers = [];
function view(html, handlers = {}) {
  stopSay(); lineGen++; timers.forEach(clearInterval); timers = [];
  if (onHeard && DICT) DICT.stop().catch(() => {});
  app.innerHTML = html; H = handlers; window.scrollTo(0, 0);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-a]');
  if (b && H[b.dataset.a]) H[b.dataset.a](b.dataset.v, b);
});
const back = (a = 'back') => `<button class="back" data-a="${a}" aria-label="Back">‹</button>`;
const NAV = [['learn', 'Aprender', 'M4 6h16v12H4zM12 6v12'], ['dele', 'DELE', 'M6 3h9l4 4v14H6zM9 12h7M9 16h7'], ['words', 'Palabras', 'M5 5h14v14H5zM9 9h6M9 13h4'], ['review', 'Repaso', 'M12 4a8 8 0 1 0 8 8M20 4v6h-6']];
const nav = cur => `<nav class="nav"><div>${NAV.map(([k, t, d]) => `<button data-a="tab" data-v="${k}" class="${k === cur ? 'on' : ''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>${t}</button>`).join('')}</div></nav>`;
const tabs = { learn: home, dele, words: wordsTab, review };
const tabH = { tab: v => tabs[v](), levels: () => levels() };
const flame = () => `<span class="flame"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-7 0 2 1 3 2 3 0-3-1-5 1-8z" fill="${streak() ? '#FF7A1A' : '#C9BBAA'}"/></svg>${streak()}</span>`;

// ---------- Learn tab: the course map ----------
function home() {
  const LV = S.lv, US = UNITS.filter(u => (u.lv || 'A1') === LV), next = LESSONS.find(l => l.lv === LV && !S.done[l.id]);
  const node = (l, i) => `<button class="node ${S.done[l.id] ? 'done' : ''} ${l === next ? 'next' : ''}" style="transform:translateX(${[0, 56, 0, -56][i % 4]}px)" data-a="lesson" data-v="${l.id}">
    <span class="disc">${icon(l.icon)}</span><span class="stars">${stars(S.done[l.id] || 0)}</span><b>${l.id} ${l.t}</b><small>${l.en}</small></button>`;
  view(`<div class="top">${`<button class="badge" data-a="levels">${LV}</button>`}<h1>Aprender</h1>${flame()}</div>
  <div class="card row"><div class="grow"><b>Hoy · ${todayMin()}/${S.goal} min</b><div class="bar" style="margin-top:6px"><i style="width:${Math.min(100, todayMin() / S.goal * 100)}%"></i></div></div><button class="btn alt" style="width:auto" data-a="tab" data-v="review">Repaso ${S.miss.length || ''}</button></div>
  ${US.map((u, ui) => `<div class="unit"><b>Unidad ${ui + 1}</b><span>${u.t}</span><small class="mut">· ${u.en}</small></div><div class="path">${u.lessons.map((l, i) => node(lessonOf(l.id), i)).join('')}</div>`).join('')}
  ${nav('learn')}`, { ...tabH, lesson: lesson, refresh: home });
  document.querySelector('.node.next')?.scrollIntoView({ block: 'center' });
}

// ---------- Lesson screen and its parts ----------
const PARTS = [
  ['vocab', 'Vocabulario', 'a', '#FFA41B', l => l.words.map(w => w[0]).join(', ')],
  ['gram', 'Gramática', 'g', '#8A6CF0', l => l.gram.t, l => l.gram],
  ['conv', 'Conversación', '…', '#3DBB63', l => 'Story: ' + l.en],
  ['speak', 'Hablar', '◉', '#E84A8A', () => 'Say the story lines out loud'],
  ['quiz', 'Quiz', '✓', '#3A8FD8', () => 'Reinforce what you learned']
];
function lesson(id) {
  const l = lessonOf(id), done = S.parts[id] || [];
  view(`<div class="top">${back()}<h2>${l.id} ${l.t}</h2><span class="stars">${stars(S.done[id] || 0)}</span></div>
  <div class="hero">${scene(l.bg, l.cast)}</div>
  <div class="pad row" style="margin:10px 16px 4px"><span class="chip">${l.en}</span><span class="chip">${l.words.length} palabras</span><span class="chip">~20 min</span></div>
  ${PARTS.filter(p => !p[5] || p[5](l)).map(([k, t, ic, c, sub]) => `<button class="part" data-a="part" data-v="${k}"><span class="pi" style="background:${c}">${ic}</span><span class="grow"><h3>${t}</h3><span class="mut small">${sub(l)}</span></span>${done.includes(k) ? '<span class="tick">✓</span>' : '<span class="mut">›</span>'}</button>`).join('')}`,
  { back: home, part: k => intro(l, k), refresh: () => lesson(id) });
}
function intro(l, k) {
  const [, t, ic, c] = PARTS.find(p => p[0] === k);
  const body = k === 'vocab' ? `<h3 class="hl">Palabras para aprender</h3><p>${l.words.map(w => `<b>${w[0]}</b> · ${w[1]}`).join('<br>')}</p>`
    : k === 'gram' ? `<h3 class="hl">Gramática para aprender</h3><p><b>${l.gram.t}</b><br>${l.gram.rule}</p>`
    : k === 'quiz' ? `<p>You've finished the main lessons! Take the quiz to see how well you've mastered them.</p>`
    : `<h3 class="hl">Resumen</h3><p>${k === 'conv' ? 'Watch the story. Each word lights up as it is spoken.' : 'Listen to each line, then say it yourself.'}</p>`;
  view(`<div class="top">${back()}<h2>${l.id} ${l.t}</h2></div><div class="hero">${scene(l.bg, l.cast, { speaker: l.cast[0] })}</div>
  <div class="card row"><span class="pi" style="background:${c}">${ic}</span><span><h3>${t}</h3><span class="chip">${k === 'quiz' ? '2–4' : '4–8'} min</span></span></div>
  <div class="pad">${body}</div><div class="fix"><div><button class="btn" data-a="go">Empezar</button></div></div>`,
  { back: () => lesson(l.id), go: () => startPart(l, k) });
}
function startPart(l, k) {
  const W = WORDS.filter(w => w.l === l.id);
  const finish = (ok, n) => {
    S.parts[l.id] = [...new Set([...(S.parts[l.id] || []), k])];
    if (k === 'quiz') { const st = ok / n >= .9 ? 3 : ok / n >= .7 ? 2 : 1; S.done[l.id] = Math.max(S.done[l.id] || 0, st); }
    save(); result(l, k, ok, n);
  };
  if (k === 'conv') return story(l, finish);
  const items = k === 'vocab' ? [...W.flatMap((w, i) => [{ k: 'teach', w }, { k: 'example', w }, { k: i % 2 ? 'listen' : 'choose', w }]), { k: 'pairs', ws: pick(W, 4) }]
    : k === 'gram' ? [{ k: 'rule', g: l.gram }, ...l.gram.ex.map(s => ({ k: 'order', s }))]
    : k === 'speak' ? l.conv.map(c => ({ k: 'speak', s: [c[1], c[2]], who: c[0], l: l.id }))
    : quizItems(l, W);
  run(items, { l, done: finish, exit: () => lesson(l.id) });
}
function quizItems(l, W) {
  const short = l.conv.filter(c => c[1].split(' ').length <= 7);
  return [{ k: 'pairs', ws: pick(W, 4) }, ...shuffle([
    ...W.slice(0, 2).map(w => ({ k: 'choose', w })), ...W.slice(2, 4).map(w => fillOf(w) || { k: 'listen', w }),
    ...W.slice(4).map(w => ({ k: 'listen', w })), { k: 'order', s: (short[0] || l.conv[0]).slice(1) }])];
}
function fillOf(w) {
  const v = w.es.split(' / ').find(x => w.ex.toLowerCase().includes(x.toLowerCase().replace(/[¿?¡!]/g, '')));
  if (!v) return null;
  const core = v.replace(/[¿?¡!]/g, ''), at = w.ex.toLowerCase().indexOf(core.toLowerCase());
  const ans = w.ex.slice(at, at + core.length), cap = ans[0] !== ans[0].toLowerCase();
  const others = pick(WORDS.filter(x => x.es !== w.es && !x.es.includes(' ')), 3).map(x => cap ? x.es[0].toUpperCase() + x.es.slice(1) : x.es);
  return { k: 'fill', w, before: w.ex.slice(0, at), ans, after: w.ex.slice(at + core.length), opts: shuffle([ans, ...others]) };
}
function result(l, k, ok, n) {
  view(`<div class="top">${back()}<h2>¡Listo!</h2></div><div class="hero">${scene(l.bg, l.cast, { wave: true })}</div>
  <div class="card" style="text-align:center"><h2>${PARTS.find(p => p[0] === k)[1]} ✓</h2>${n ? `<p class="mut">${ok} of ${n} correct</p>` : ''}${k === 'quiz' ? `<div class="stars" style="font-size:34px">${stars(S.done[l.id])}</div>` : ''}</div>
  <div class="fix"><div><button class="btn alt" data-a="again" style="margin-bottom:10px">↻ Repetir</button><button class="btn" data-a="back">Continuar</button></div></div>`, { back: () => lesson(l.id), again: () => startPart(l, k) });
}

// ---------- Story: the storybook conversation ----------
function story(l, finish) {
  let i = 0, slow = false, showEn = true, paused = false, t0 = Date.now(), dg = 0;
  const draw = () => {
    const [who, es, en] = l.conv[i];
    view(`<div class="prog">${back('exit')}<div class="bar"><i style="width:${(i + 1) / l.conv.length * 100}%"></i></div><button class="cb" data-a="en" aria-label="Translation">${showEn ? 'EN' : '–'}</button><button class="cb" data-a="slow" aria-label="Slow">${slow ? '½' : '1×'}</button></div>
    <div class="hero">${scene(l.bg, l.cast, { speaker: who })}</div>
    <p class="sent" id="s">${words(es)}</p>${showEn ? `<p class="en">${en}</p>` : ''}
    <div class="ctrl"><button class="cb" data-a="prev" aria-label="Previous">‹</button><button class="cb main" data-a="play" aria-label="Play">${paused ? '▶' : '❚❚'}</button><button class="cb go" data-a="next" aria-label="Next">›</button></div>`,
    { exit: () => lesson(l.id), en: () => { showEn = !showEn; draw(); }, slow: () => { slow = !slow; draw(); },
      prev: () => { i = Math.max(0, i - 1); draw(); }, next: () => advance(true), play: () => { paused = !paused; draw(); } });
    const g = ++dg;
    if (!paused) karaoke(es, document.getElementById('s'), slow, who).then(() => { if (g === dg && !paused) timers.push(setTimeout(() => advance(), 900)); });
  };
  const advance = () => { if (i < l.conv.length - 1) { i++; draw(); } else { addTime(Date.now() - t0); finish(0, 0); } };
  draw();
}

// ---------- The exercise runner ----------
function run(items, { l, done, exit, review }) {
  let i = 0, ok = 0, n = 0;
  const t0 = Date.now(), L = l || {};
  const step = () => i < items.length ? show(items[i]) : (addTime(Date.now() - t0), done(ok, n));
  const frame = (body, foot = '') => `<div class="prog">${back('exit')}<div class="bar"><i style="width:${i / items.length * 100}%"></i></div></div>${body}${foot}`;
  const next = () => { i++; step(); };
  function grade(good, it, answer, audio) {
    n++; if (good) { ok++; confetti(); }
    const key = JSON.stringify(it);
    if (!good && !S.miss.includes(key)) S.miss.push(key);
    if (good && review) S.miss = S.miss.filter(x => x !== key);
    if (good && it.w && !S.known.includes(it.w.id)) S.known.push(it.w.id);
    save();
    const sh = document.createElement('div');
    sh.className = 'sheet' + (good ? '' : ' bad');
    sh.innerHTML = `<div><div class="row"><h3 class="grow">${good ? '¡Correcto!' : 'Respuesta correcta:'}</h3>${audio ? '<button class="cb" data-a="say">♪</button>' : ''}</div><p>${answer}</p><button class="btn ${good ? 'green' : 'red'}" data-a="cont">Continuar</button></div>`;
    app.appendChild(sh);
    H.say = () => say(audio); H.cont = next;
    if (audio) say(audio);
  }
  function show(it) {
    const base = { exit: () => (exit || home)(), say: v => say(v), slow: v => say(v, { slow: true }) };
    const w = it.w, ll = lessonOf(it.l || (w && w.l)) || L;
    const sceneOf = (o = {}) => `<div class="hero">${scene(ll.bg || 'plaza', o.cast || (ll.cast ? [ll.cast[0]] : ['sofia']), o)}</div>`;
    const audioBtns = t => `<button class="cb main" data-a="say" data-v="${esc(t)}" aria-label="Play">♪</button><button class="cb" data-a="slow" data-v="${esc(t)}" aria-label="Slow">½</button>`;
    const micBtn = t => `<button class="cb mic" data-a="mic" data-v="${esc(t)}" aria-label="Speak">🎤</button>`;
    const mic = target => listen(said => { const r = compare(target, said); const el = document.getElementById('heard'); if (el) el.innerHTML = r.html + ` <span class="mut small">${Math.round(r.score * 100)}%</span>`; });
    if (it.k === 'teach' || it.k === 'example') {
      const ex = it.k === 'example';
      view(frame(`${sceneOf({ pic: w.pic, wave: w.pic === 'wave', speaker: ex ? ll.cast && ll.cast[0] : null })}
        ${ex ? `<p class="sent" id="s">${words(w.ex)}</p><p class="en">${w.exEn}</p>` : `<div class="big" id="s">${words(w.es)}</div><p class="meaning"><span class="chip">${w.pos}</span> ${w.en}</p>${w.esp ? `<p class="mut small">España: ${w.esp}</p>` : ''}`}
        <p class="heard" id="heard"></p>`, `<div class="ctrl">${audioBtns(ex ? w.ex : w.es)}${micBtn(ex ? w.ex : w.es)}<button class="cb go" data-a="next" aria-label="Next">›</button></div>`),
        { ...base, next, mic: t => mic(t), say: t => karaoke(t, document.getElementById('s')), slow: t => karaoke(t, document.getElementById('s'), true) });
      karaoke(ex ? w.ex : w.es, document.getElementById('s'));
      if (ex) { const core = norm(w.es.split(' / ')[0]); document.querySelectorAll('#s .w').forEach(s => { if (core.includes(norm(s.textContent)[0])) s.classList.add('hl'); }); }
    } else if (it.k === 'rule') {
      view(frame(`<div class="card"><h2>${it.g.t}</h2><p>${it.g.rule}</p></div>
        ${it.g.ex.map(([es, en], j) => `<div class="card row"><button class="cb" data-a="ex" data-v="${j}">♪</button><span><b class="sent" style="font-size:19px;margin:0" id="e${j}">${words(es)}</b><br><span class="mut">${en}</span></span></div>`).join('')}`,
        `<div class="fix"><div><button class="btn" data-a="next">Continuar</button></div></div>`),
        { ...base, next, ex: j => karaoke(it.g.ex[j][0], document.getElementById('e' + j)) });
    } else if (it.k === 'choose' || it.k === 'listen') {
      const opts = shuffle([w.en, ...pick([...new Set(WORDS.filter(x => x.en !== w.en).map(x => x.en))], 2)]);
      view(frame(`<p class="q">${it.k === 'choose' ? 'Choose the correct translation' : 'Listen and choose the meaning'}</p>
        <div class="ctrl" style="justify-content:center;gap:20px">${audioBtns(w.es)}</div>${it.k === 'choose' ? `<div class="big">${w.es}</div>` : ''}
        <div class="opts" style="margin-top:16px">${opts.map(o => `<button class="opt" data-a="pick" data-v="${esc(o)}">${o}</button>`).join('')}</div>`), {
        ...base, pick: (v, b) => { if (document.querySelector('.sheet')) return; const g = v === w.en; b.classList.add(g ? 'ok' : 'bad'); grade(g, it, `${w.es} = ${w.en}`, w.es); } });
      say(w.es);
    } else if (it.k === 'pairs') {
      const right = shuffle(it.ws); let sel = null, miss = false, left = it.ws.length;
      view(frame(`<p class="q">Tap the matching pairs</p><div class="pairs">${it.ws.map((x, j) => `<button class="opt" data-a="L" data-v="${j}" id="L${j}">♪<br><small class="mut" style="visibility:hidden">${x.es}</small></button><button class="opt" data-a="R" data-v="${it.ws.indexOf(right[j])}" id="R${it.ws.indexOf(right[j])}">${right[j].en}</button>`).join('')}</div>`), {
        ...base,
        L: j => { say(it.ws[j].es); document.querySelectorAll('[data-a=L]').forEach(b => b.classList.remove('sel')); document.getElementById('L' + j).classList.add('sel'); sel = j; },
        R: j => {
          if (sel === null) return;
          const a = document.getElementById('L' + sel), b = document.getElementById('R' + j);
          if (+j === +sel) { a.querySelector('small').style.visibility = 'visible'; [a, b].forEach(x => x.classList.add('ok', 'gone')); if (!--left) grade(!miss, it, it.ws.map(x => `${x.es} = ${x.en}`).join('<br>')); }
          else { miss = true; b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 500); }
          sel = null; a.classList.remove('sel');
        } });
    } else if (it.k === 'order' || it.k === 'fill') {
      const fill = it.k === 'fill', target = fill ? w.ex : it.s[0];
      const toks = fill ? it.opts : shuffle(it.s[0].split(' ')); let chosen = [];
      const paint = () => {
        document.getElementById('slot').innerHTML = fill ? `<p class="sent" style="margin:0">${esc(it.before)}<span class="blank">${chosen.length ? esc(toks[chosen[0]]) : '&nbsp;'}</span>${esc(it.after)}</p>`
          : chosen.map(c => `<button class="tile" data-a="un" data-v="${c}">${esc(toks[c])}</button>`).join('');
        document.querySelectorAll('[data-a=tk]').forEach(b => b.classList.toggle('used', chosen.includes(+b.dataset.v)));
        document.getElementById('chk').disabled = fill ? !chosen.length : chosen.length < toks.length;
      };
      view(frame(`<p class="q">${fill ? 'Complete the sentence according to the recording' : 'Listen and place these words in the right order'}</p>
        <div class="ctrl" style="justify-content:center;gap:20px">${audioBtns(target)}</div><div class="slot" id="slot"></div>
        <div class="tiles">${toks.map((t, j) => `<button class="tile" data-a="tk" data-v="${j}">${esc(t)}</button>`).join('')}</div>
        ${it.s ? `<p class="en">${it.s[1]}</p>` : `<p class="en">${w.exEn}</p>`}`, `<div class="fix"><div><button class="btn" id="chk" data-a="chk" disabled>Comprobar</button></div></div>`), {
        ...base,
        tk: j => { if (chosen.includes(+j)) return; chosen = fill ? [+j] : [...chosen, +j]; paint(); },
        un: j => { chosen = chosen.filter(c => c !== +j); paint(); },
        chk: () => { if (document.querySelector('.sheet')) return; const g = fill ? toks[chosen[0]] === it.ans : chosen.map(c => toks[c]).join(' ') === it.s[0]; grade(g, it, target, target); } });
      paint(); say(target);
    } else if (it.k === 'speak') {
      const [es, en] = it.s;
      view(frame(`${sceneOf({ cast: ll.cast, speaker: it.who })}<p class="q">Listen, then say it yourself</p><p class="sent" id="s">${words(es)}</p><p class="en">${en}</p><p class="heard" id="heard"></p>`,
        `<div class="ctrl">${audioBtns(es)}${micBtn(es)}<button class="cb go nomic" data-a="next" aria-label="I said it">✓</button><button class="cb go mic" data-a="next" aria-label="Next">›</button></div>`),
        { ...base, next, mic: t => mic(t), say: t => karaoke(t, document.getElementById('s'), false, it.who), slow: t => karaoke(t, document.getElementById('s'), true, it.who) });
      karaoke(es, document.getElementById('s'), false, it.who);
    } else next();
  }
  step();
}
function confetti() {
  for (let j = 0; j < 14; j++) {
    const c = document.createElement('i'); c.className = 'confetti';
    c.style.cssText = `left:50%;top:55%;background:${FLAGS[j % 5]};--x:${(Math.random() - .5) * 320}px;--y:${-Math.random() * 260}px`;
    document.body.appendChild(c); setTimeout(() => c.remove(), 950);
  }
}

// ---------- Level picker + placement check ----------
function levels(sel = LEVELS.findIndex(([k]) => k === S.lv)) {
  const ok = hasLv(LEVELS[sel][0]);
  view(`<div class="top">${back()}<h2>Select a level to practice</h2></div>
  <p class="pad mut">Unsure? Take the quick check and it will tell you where to start.</p>
  <div class="lvl"><h2>DELE ${LEVELS[sel][0]}</h2><p style="margin:6px 0 0">${LEVELS[sel][1]}</p></div>
  <div class="stair">${LEVELS.map(([k], j) => `<button data-a="pick" data-v="${j}" class="${j === sel ? 'on' : ''}"><i style="height:${30 + j * 26}px"></i>${k}</button>`).join('')}</div>
  <div class="fix"><div><button class="btn alt" data-a="test" style="margin-bottom:10px">Test my Spanish level</button><button class="btn" data-a="start" ${ok ? '' : 'disabled'}>${ok ? 'Start learning now' : 'Coming soon'}</button></div></div>`,
  { back: home, pick: j => levels(+j), start: () => { S.lv = LEVELS[sel][0]; save(); home(); }, test: () => {
    const items = pick(WORDS, 8).map((w, j) => ({ k: j % 2 ? 'listen' : 'choose', w })).concat(pick(LESSONS.filter(l => l.gram), 2).map(l => ({ k: 'order', s: l.gram.ex[0] })));
    run(items, { done: (ok, n) => view(`<div class="top">${back()}<h2>Your result</h2></div><div class="card" style="text-align:center"><h1>${ok}/${n}</h1>
      <p>${ok / n >= .8 ? 'You already know a lot. Skim A1 as review, then switch to A2 in this level picker. Use the DELE A1 practice to check yourself.' : 'Start with A1, Unit 1. The course builds from there.'}</p></div>
      <div class="fix"><div><button class="btn" data-a="back">Start A1</button></div></div>`, { back: home }), exit: home });
  } });
}

// ---------- Words tab: vocab missions ----------
function wordsTab(lvl = LEVELS.findIndex(([k]) => k === S.lv)) {
  const K = LEVELS[lvl][0], WS = WORDS.filter(w => w.lv === K), M = []; for (let j = 0; j < WS.length; j += 10) M.push(WS.slice(j, j + 10));
  view(`<div class="top"><h1>Palabras</h1>${flame()}</div>
  <div class="pad row" style="overflow-x:auto">${LEVELS.map(([k], j) => `<button class="chip" style="${j === lvl ? 'background:var(--or);color:#fff' : ''}" data-a="lvl" data-v="${j}">${k}</button>`).join('')}</div>
  ${!WS.length ? `<div class="card"><h3>DELE ${K}</h3><p class="mut">Coming soon.</p></div>` : `
  <div class="card row"><span class="pi" style="background:var(--bl)">A</span><span class="grow"><h3>${K} vocabulary (${WS.length})</h3><span class="mut small">${WS.filter(w => S.known.includes(w.id)).length} learned · ${S.star.length} starred</span></span></div>
  <p class="pad mut small">Covers every word in the Instituto Cervantes Plan Curricular ${K} inventory, in Mexican Spanish. Where Spain uses a different word, it's shown too.</p>
  <div class="grid2" style="grid-template-columns:repeat(4,1fr)">${M.map((m, j) => `<button class="tilebig" data-a="m" data-v="${j}">${j + 1}${m.every(w => S.known.includes(w.id)) ? '<span class="tick">✓</span>' : ''}</button>`).join('')}</div>`}
  ${nav('words')}`, { ...tabH, lvl: j => wordsTab(+j), m: j => mission(M[j], +j), refresh: () => wordsTab(lvl) });
}
function mission(ws, j) {
  view(`<div class="top">${back()}<h2>Mission ${j + 1}</h2></div><p class="pad mut">Learn ${ws.length} words</p>
  ${ws.map(w => `<div class="wl"><span class="grow"><span class="mut small">${w.pos}</span><br><b>${w.es}</b><br><span class="mut">${w.en}${w.esp ? ` · España: ${w.esp}` : ''}</span></span><button class="cb" data-a="say" data-v="${esc(w.es)}">♪</button><button class="star ${S.star.includes(w.id) ? 'on' : ''}" data-a="star" data-v="${w.id}" aria-label="Star">★</button></div>`).join('')}
  <div class="fix"><div class="row"><button class="btn alt" data-a="learn">Learn</button><button class="btn" data-a="prac">Practice</button></div></div>`, {
    back: wordsTab, say: v => say(v),
    star: (id, b) => { S.star = S.star.includes(id) ? S.star.filter(x => x !== id) : [...S.star, id]; b.classList.toggle('on'); save(); },
    learn: () => run(ws.map(w => ({ k: 'teach', w })), { done: () => mission(ws, j), exit: () => mission(ws, j) }),
    prac: () => run([...shuffle(ws).map((w, k) => ({ k: k % 2 ? 'listen' : 'choose', w })), { k: 'pairs', ws: pick(ws, 4) }], { done: () => mission(ws, j), exit: () => mission(ws, j) })
  });
}

// ---------- Review tab: mistakes and starred words ----------
function review() {
  const items = S.miss.map(m => JSON.parse(m));
  const label = it => it.w ? it.w.es : it.s ? it.s[0] : it.ws ? it.ws.map(w => w.es).join(', ') : '';
  view(`<div class="top"><h1>Repaso</h1>${flame()}</div>
  <div class="card"><h3>Incorrect answers (${items.length})</h3><p class="mut small">Answer one right here and it leaves the list.</p>
  ${items.slice(0, 12).map(it => `<div class="small" style="padding:6px 0;border-bottom:1px solid var(--line)">${esc(label(it))}</div>`).join('') || '<p>Nothing to review yet. ¡Muy bien!</p>'}</div>
  <div class="pad" style="display:grid;gap:10px"><button class="btn" data-a="miss" ${items.length ? '' : 'disabled'}>Practice mistakes</button>
  <button class="btn alt" data-a="star" ${S.star.length ? '' : 'disabled'}>Practice starred words (${S.star.length})</button></div>
  ${nav('review')}`, { ...tabH, refresh: review,
    miss: () => run(items.slice(0, 15), { review: true, done: review, exit: review }),
    star: () => run(shuffle(WORDS.filter(w => S.star.includes(w.id))).map((w, k) => ({ k: k % 2 ? 'listen' : 'choose', w })), { done: review, exit: review }) });
}

// ---------- DELE tab: section practice, mock exam ----------
const XM = () => (typeof EXAMS !== 'undefined' && EXAMS[S.lv]) || EXAM;
const EP = () => S.lv === 'A1' ? S.exam : (S['exam' + S.lv] = S['exam' + S.lv] || { best: null, p: {} });
const SECS = [['reading', 'Lectura', 'L', '#FFA41B'], ['listening', 'Auditiva', '♪', '#3A8FD8'], ['writing', 'Escritura', '✎', '#8A6CF0'], ['speaking', 'Oral', '◉', '#E84A8A']];
function dele() {
  const b = EP().best;
  view(`<div class="top"><button class="badge" data-a="levels">${S.lv}</button><h1>DELE ${S.lv}</h1><button class="chip" data-a="guide">Exam guide ›</button></div>
  ${b ? `<div class="card row"><span class="grow"><h3>Best mock exam</h3><span class="mut small">Reading ${b.r} · Listening ${b.l} · Writing ${b.w} · Speaking ${b.s}</span></span><span class="chip">${b.pass ? 'APTO' : 'NO APTO'}</span></div>` : ''}
  <div class="grid2" style="margin-top:12px">${SECS.map(([k, t, ic, c]) => `<button class="tilebig" data-a="sec" data-v="${k}"><span class="pi" style="background:${c}">${ic}</span>${t}</button>`).join('')}
  <button class="tilebig" data-a="mock"><span class="pi" style="background:#22A8A6">★</span>Real mock exam</button><button class="tilebig" data-a="tab" data-v="review"><span class="pi" style="background:#EF5466">✓</span>Incorrect answers</button></div>
  <p class="pad mut small" style="margin-top:14px">Practice set written for this app in the official DELE ${S.lv} format. It is not an official exam.</p>
  ${nav('dele')}`, { ...tabH, refresh: dele, sec: section, mock: mockStart, guide: () => view(`<div class="top">${back()}<h2>Exam guide · DELE ${S.lv}</h2></div>
    ${XM().guide.map(([t, d]) => `<div class="card"><h3>${t}</h3><p class="mut" style="margin:4px 0 0">${d}</p></div>`).join('')}
    <div class="card"><h3>Passing</h3><p class="mut" style="margin:4px 0 0">Each part is worth 25 points (100 total). Group 1 is reading + writing, group 2 is listening + speaking. ${S.lv === 'A2' ? 'The Instituto Cervantes A2 exam guide says you need at least 30 of 50 in each group.' : 'Exam-prep guides citing the Instituto Cervantes say you need at least 30 of 50 in each group.'}</p></div>`, { back: dele }) });
}
const total = t => t.q ? t.q.length : 1;
function section(key) {
  const sec = XM()[key], p = EP().p;
  const st = sec.tasks.map((t, j) => p[key + j] || { n: 0, c: 0 });
  const ans = st.reduce((a, s) => a + s.n, 0), cor = st.reduce((a, s) => a + s.c, 0), all = sec.tasks.reduce((a, t) => a + total(t), 0);
  view(`<div class="top">${back()}<h2>${sec.name}</h2></div>
  <div class="stats"><div><b>${ans}</b><span>Answered</span></div><div><b>${cor}</b><span>Correct</span></div><div><b>${sec.min}′</b><span>Exam time</span></div><div><b>${Math.round(ans / all * 100)}%</b><span>Progress</span></div></div>
  ${sec.tasks.map((t, j) => `<button class="card" style="display:block;width:calc(100% - 32px);text-align:left" data-a="t" data-v="${j}"><span class="chip">Tarea ${j + 1}</span><div class="row" style="margin-top:6px"><h3 class="grow">${t.name}</h3><span class="mut">${st[j].c}/${total(t)} ›</span></div><div class="bar" style="margin-top:8px"><i style="width:${st[j].n / total(t) * 100}%"></i></div></button>`).join('')}
  ${key === 'reading' || key === 'listening' ? `<div class="fix"><div><button class="btn" data-a="smart">✦ Smart quiz</button></div></div>` : ''}`,
  { back: dele, t: j => task(key, +j), smart: () => { const j = st.findIndex((s, k) => s.c < total(sec.tasks[k])); task(key, j < 0 ? Math.floor(Math.random() * sec.tasks.length) : j); } });
}

// reshuffles a task's answer options (and match lists) so correct answers never follow a pattern
function mixTask(t) {
  if (!t.q) return;
  if (t.type === 'mc') t.q.forEach(q => { const right = q[1][q[2]], o = shuffle(q[1]); q[1] = o; q[2] = o.indexOf(right); });
  else if (t.type === 'match') {
    const k = t.pics ? 'pics' : 'texts', idx = shuffle(t[k].map((_, i) => i));
    t[k] = idx.map(i => t[k][i]); t.q.forEach(q => { q[1] = idx.indexOf(q[1]); });
  }
}
const mixSection = key => XM()[key].tasks.forEach(mixTask);
// renders one task; A holds answers by key
function taskHTML(key, j, A) {
  const t = XM()[key].tasks[j], id = key + j, pic = s => s[0] === '@' ? icon(s.slice(1)) : esc(s);
  const opt = (q, k) => `<div class="opts">${q[1].map((o, m) => `<button class="opt ${A[id + '.' + k] === m ? 'sel' : ''}" data-a="ans" data-v="${id}.${k}|${m}" id="o${id}.${k}.${m}">${pic(o)}</button>`).join('')}</div>`;
  const letters = (k, n, lower) => `<div class="letters">${Array.from({ length: n }, (_, m) => `<button class="${A[id + '.' + k] === m ? 'sel' : ''}" data-a="ans" data-v="${id}.${k}|${m}" id="o${id}.${k}.${m}">${String.fromCharCode((lower ? 97 : 65) + m)}</button>`).join('')}</div>`;
  const play = (v, txt = '▶ Play') => `<button class="chip" data-a="play" data-v="${v}">${txt}</button>`;
  let h = `<div class="pad" style="margin-top:14px"><span class="chip">Tarea ${j + 1}</span> <b>${t.name}</b></div>`;
  if (t.type === 'mc') {
    if (t.text) h += `<div class="passage">${esc(t.text)}</div>`;
    if (t.audio) h += `<div class="pad">${play(id + '.all', '▶ Play the conversation')}</div>`;
    h += t.q.map((q, k) => `${q[4] ? `<div class="passage">${esc(q[4])}</div>` : ''}<div class="qb"><div class="row"><b class="grow">${k + 1}. ${esc(q[0])}</b>${q[3] ? play(id + '.' + k) : ''}</div>${opt(q, k)}</div>`).join('');
  } else if (t.type === 'match') {
    if (t.pics) h += `<div class="pics">${t.pics.map((p, m) => `<div>${String.fromCharCode(65 + m)}${icon(p)}</div>`).join('')}</div>`;
    if (t.texts) h += t.texts.map((x, m) => { const lower = key === 'listening'; const ic = x[0] === '@' ? x.slice(1).split(' ')[0] : null; return `<div class="li"><b>${String.fromCharCode((lower ? 97 : 65) + m)}</b>${ic ? icon(ic) : ''}<span>${esc(ic ? x.slice(ic.length + 2) : x)}</span></div>`; }).join('');
    const n = (t.pics || t.texts).length;
    h += t.q.map((q, k) => `<div class="qb"><div class="row"><b class="grow">${k + 1}. ${key === 'listening' ? (q[2] ? esc(q[2]) : 'Announcement') : esc(q[0])}</b>${key === 'listening' ? play(id + '.' + k) : ''}</div>${letters(k, n, key === 'listening' && !t.pics)}</div>`).join('');
  } else if (t.type === 'form' || t.type === 'text') {
    h += `<p class="pad">${t.prompt}</p><div class="pad">${t.type === 'form' ? t.fields.map((f, m) => `<label>${f}</label><input data-k="${id}.${m}" value="${esc(A[id + '.' + m] || '')}">`).join('') : `<textarea rows="7" data-k="${id}.0">${esc(A[id + '.0'] || '')}</textarea>`}
      <p class="mut small" id="wc${id}"></p></div>`;
  } else {
    h += `${t.scene ? `<div class="hero">${scene(t.scene[0], t.scene[1])}</div>` : ''}<p class="pad"><span class="chip">${t.time}</span> ${t.prompt}</p>${t.questions ? t.questions.map((q, k) => `<div class="li">${play(id + '.' + k, '▶')}<span>${q}</span></div>`).join('') : ''}
      <div class="pad"><button class="btn alt mic" data-a="rec" data-v="${id}">🎤 Record my answer</button><p class="nomic mut small">Speak out loud, then compare with the example.</p><p class="heard" id="h${id}">${esc(A[id + '.said'] || '')}</p></div>`;
  }
  if (t.model) h += `<details class="card"><summary><b>Example answer</b></summary><p>${esc(t.model)}</p></details>`;
  return h;
}
function taskHandlers(key, j, A) {
  return {
    ans: v => { const [k, m] = v.split('|'); A[k] = +m; document.querySelectorAll(`[id^="o${k}."]`).forEach(b => b.classList.toggle('sel', b.id === `o${k}.${m}`)); },
    play: v => { const [id, k] = v.split('.'), t = XM()[key].tasks[+id.replace(key, '')];
      if (k === 'all') return sayLines(t.audio); if (t.questions) return say(t.questions[+k]); const q = t.q[+k]; q[3] ? sayLines(q[3]) : say(q[0]); },
    rec: id => listen(said => { A[id + '.said'] = said; const el = document.getElementById('h' + id); if (el) el.textContent = said; })
  };
}
const inputs = A => document.querySelectorAll('[data-k]').forEach(el => el.oninput = () => {
  A[el.dataset.k] = el.value;
  const id = el.dataset.k.split('.')[0], all = [...document.querySelectorAll(`[data-k^="${id}."]`)].map(x => x.value).join(' ');
  const wc = document.getElementById('wc' + id); if (wc) wc.textContent = norm(all).length + ' words';
});
function check(key, j, A) {
  const t = XM()[key].tasks[j], id = key + j; let n = 0, c = 0;
  if (!t.q) return { n: 0, c: 0 };
  t.q.forEach((q, k) => {
    const right = t.type === 'mc' ? q[2] : q[1], got = A[id + '.' + k];
    if (got !== undefined) n++; if (got === right) c++;
    document.querySelectorAll(`[id^="o${id}.${k}."]`).forEach(b => { const m = +b.id.split('.').pop(); b.classList.toggle('ok', m === right); b.classList.toggle('bad', m === got && m !== right); });
  });
  return { n, c };
}
function task(key, j) {
  const A = {}, t = XM()[key].tasks[j]; mixTask(t);
  view(`<div class="top">${back()}<h2>${XM()[key].name}</h2></div>${taskHTML(key, j, A)}
  ${t.q ? `<div class="fix"><div><button class="btn" data-a="chk">Comprobar</button></div></div>` : ''}`,
  { ...taskHandlers(key, j, A), back: () => section(key), chk: () => {
    const r = check(key, j, A); EP().p[key + j] = r; save();
    document.querySelector('.fix').innerHTML = `<div><button class="btn ${r.c === t.q.length ? 'green' : ''}" data-a="back">${r.c}/${t.q.length} correct · Back</button></div>`;
  } });
  inputs(A);
}

function mockStart() {
  view(`<div class="top">${back()}<h2>DELE ${S.lv} mock exam</h2></div>
  ${['reading', 'listening', 'writing', 'speaking'].map(k => `<div class="card row"><h3 class="grow">${XM()[k].name}</h3><span class="chip">${XM()[k].min} min${XM()[k].prep ? ' + ' + XM()[k].prep + ' prep' : ''}</span></div>`).join('')}
  <p class="pad mut small">Each part is timed like the real exam. You rate your own writing and speaking from 0 to 3 with the example answers.</p>
  <div class="fix"><div><button class="btn" data-a="go">Start testing</button></div></div>`, { back: dele, go: () => mockRun() });
}
function mockRun() {
  const order = ['reading', 'listening', 'writing', 'speaking'], A = {}, rate = {}, sc = {};
  order.forEach(mixSection);
  const confirmExit = () => { const d = document.createElement('div'); d.className = 'dlg'; d.innerHTML = `<div><h3>Are you sure you want to exit the exam?</h3><div class="row" style="margin-top:16px"><button class="btn alt" data-a="no">Cancel</button><button class="btn" data-a="yes">Confirm</button></div></div>`; app.appendChild(d); H.no = () => d.remove(); H.yes = dele; };
  const section = (s, prep) => {
    const key = order[s]; if (!key) return finish();
    const sec = XM()[key]; let left = (prep ? sec.prep : sec.min) * 60;
    const end = () => { if (prep) return section(s); if (sec.tasks[0].q) sc[key] = sec.tasks.reduce((a, t, j) => a + check(key, j, A).c, 0); section(s + 1, order[s + 1] === 'speaking'); };
    const rates = !sec.tasks[0].q && !prep ? sec.tasks.map((t, j) => `<div class="card"><b>Rate task ${j + 1} (0–3)</b><div class="letters">${[0, 1, 2, 3].map(m => `<button data-a="rate" data-v="${key}${j}|${m}" id="o${key}${j}r.${m}">${m}</button>`).join('')}</div></div>`).join('') : '';
    view(`<div class="top">${back('quit')}<h2 class="grow">${prep ? 'Prepare: ' : ''}${sec.name}</h2><span class="timer" id="tm"></span></div>
    ${prep ? `<p class="pad">You have ${sec.prep} minutes to read the speaking tasks and plan what to say.</p>${sec.tasks.map(t => `<div class="card"><h3>${t.name}</h3><p class="mut">${t.prompt}</p></div>`).join('')}`
      : sec.tasks.map((t, j) => taskHTML(key, j, A)).join('').replace(/<details[\s\S]*?<\/details>/g, '')}${rates && `<h3 class="pad" style="margin-top:20px">Example answers</h3>${sec.tasks.map(t => `<div class="card small">${esc(t.model)}</div>`).join('')}${rates}`}
    <div class="fix"><div><button class="btn" data-a="end">${prep ? 'Start speaking now' : 'Finish section'}</button></div></div>`,
    { ...taskHandlers(key, 0, A), quit: confirmExit, end, rate: v => { const [k, m] = v.split('|'); rate[k] = +m; document.querySelectorAll(`[id^="o${k}r."]`).forEach(b => b.classList.toggle('sel', b.id === `o${k}r.${m}`)); } });
    inputs(A);
    const tick = () => { const el = document.getElementById('tm'); if (el) el.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; if (left-- <= 0) end(); };
    tick(); timers.push(setInterval(tick, 1000));
  };
  const finish = () => {
    const r = sc.reading || 0, l = sc.listening || 0;
    const w = Math.round(((rate.writing0 || 0) + (rate.writing1 || 0)) / 6 * 25), s = Math.round(((rate.speaking0 || 0) + (rate.speaking1 || 0) + (rate.speaking2 || 0)) / 9 * 25);
    const pass = r + w >= 30 && l + s >= 30, res = { r, l, w, s, pass };
    if (!EP().best || r + l + w + s > EP().best.r + EP().best.l + EP().best.w + EP().best.s) EP().best = res;
    addTime(1e9);
    view(`<div class="top">${back()}<h2>Your result</h2></div>
    <div class="card" style="text-align:center"><h1 style="color:${pass ? 'var(--gr)' : 'var(--rd)'}">${pass ? 'APTO' : 'NO APTO'}</h1><p class="mut">Group 1: ${r + w}/50 · Group 2: ${l + s}/50</p></div>
    ${[['Comprensión de lectura', r], ['Expresión escrita (your rating)', w], ['Comprensión auditiva', l], ['Expresión oral (your rating)', s]].map(([t, v]) => `<div class="card row"><span class="grow">${t}</span><b>${v}/25</b></div>`).join('')}`, { back: dele });
  };
  section(0);
}
home();
}
