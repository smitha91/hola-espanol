// Illustrations: backgrounds, characters and props, all drawn as SVG strings.

const CAST = {
  sofia:  { skin: '#B57A52', hair: '#2B1B14', style: 'long',  top: '#F4A51C', bottom: '#2BB3B1', skirt: 1, extra: 'earrings', voice: 'f' },
  lupita: { skin: '#C68A5E', hair: '#3A2418', style: 'bun',   top: '#E84A8A', bottom: '#3B4A6B', voice: 'f' },
  carmen: { skin: '#A86E48', hair: '#BDB6AE', style: 'bun',   top: '#8A5CC9', bottom: '#5B3A6B', skirt: 1, extra: 'glasses', voice: 'f' },
  diego:  { skin: '#8D5A3B', hair: '#1E140F', style: 'short', top: '#3A6FB0', bottom: '#2F3E5C', voice: 'm' },
  mateo:  { skin: '#9A6440', hair: '#24170F', style: 'curly', top: '#3E9A45', bottom: '#6B4F3A', voice: 'm' },
  pepe:   { skin: '#8A5636', hair: '#1E140F', style: 'short', top: '#F2EEE8', bottom: '#4A3B30', extra: 'apron', voice: 'm' }
};

function person(id, x, y, cls = '') {
  const c = CAST[id], s = c.skin;
  const hairBack = c.style === 'long' ? `<rect x="-21" y="-130" width="42" height="44" rx="15" fill="${c.hair}"/>`
    : c.style === 'bun' ? `<circle cx="0" cy="-140" r="9" fill="${c.hair}"/>` : '';
  const hairFront = c.style === 'curly'
    ? [[-12, -131], [-3, -137], [6, -137], [14, -131], [-17, -123], [17, -123]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="7" fill="${c.hair}"/>`).join('')
    : c.style === 'short' ? `<path d="M-18 -117Q-19 -139 0 -139Q19 -139 18 -117Q12 -130 0 -130Q-12 -130 -18 -117Z" fill="${c.hair}"/>`
    : `<path d="M-18 -119Q-17 -139 0 -139Q18 -139 18 -119Q10 -131 0 -130Q-10 -131 -18 -119Z" fill="${c.hair}"/>`;
  const lower = c.skirt
    ? `<rect x="-8" y="-30" width="6" height="28" fill="${s}"/><rect x="2" y="-30" width="6" height="28" fill="${s}"/><path d="M-16 -60L16 -60L22 -26L-22 -26Z" fill="${c.bottom}"/>`
    : `<rect x="-14" y="-60" width="13" height="58" fill="${c.bottom}"/><rect x="1" y="-60" width="13" height="58" fill="${c.bottom}"/>`;
  const extra = c.extra === 'earrings' ? `<circle cx="-18" cy="-112" r="2.5" fill="#F4A51C"/><circle cx="18" cy="-112" r="2.5" fill="#F4A51C"/>`
    : c.extra === 'glasses' ? `<g fill="none" stroke="#3B2A20" stroke-width="1.2"><circle cx="-6" cy="-117" r="4.5"/><circle cx="6" cy="-117" r="4.5"/><path d="M-1.5 -117H1.5"/></g>`
    : c.extra === 'apron' ? `<path d="M-12 -92H12L14 -40H-14Z" fill="#C0392B"/><path d="M-12 -92Q0 -100 12 -92" stroke="#F2EEE8" stroke-width="2" fill="none"/>` : '';
  const mustache = id === 'pepe' ? `<path d="M-7 -110Q0 -114 7 -110Q4 -107 0 -109Q-4 -107 -7 -110Z" fill="${c.hair}"/>` : '';
  return `<g transform="translate(${x} ${y})"><g class="p ${cls}">
${hairBack}${lower}
<ellipse cx="-7" cy="-1" rx="8" ry="3.5" fill="#3B2A20"/><ellipse cx="7" cy="-1" rx="8" ry="3.5" fill="#3B2A20"/>
<path d="M-15 -94L-22 -62" stroke="${s}" stroke-width="7" stroke-linecap="round"/>
<g class="arm"><path d="M15 -94L22 -62" stroke="${s}" stroke-width="7" stroke-linecap="round"/></g>
<g class="armup"><path d="M15 -94L30 -124" stroke="${s}" stroke-width="7" stroke-linecap="round"/><circle cx="31" cy="-127" r="5" fill="${s}"/></g>
<path d="M-17 -98Q0 -105 17 -98L19 -56L-19 -56Z" fill="${c.top}"/>${c.extra === 'apron' ? extra : ''}
<rect x="-4" y="-106" width="8" height="9" fill="${s}"/>
<circle cx="0" cy="-118" r="18" fill="${s}"/>${hairFront}
<g class="eyes"><circle cx="-6" cy="-117" r="1.9" fill="#1E140F"/><circle cx="6" cy="-117" r="1.9" fill="#1E140F"/></g>
<circle cx="-10" cy="-110" r="2.6" fill="#E58A7A" opacity=".6"/><circle cx="10" cy="-110" r="2.6" fill="#E58A7A" opacity=".6"/>
${mustache}<ellipse class="mouth" cx="0" cy="-106" rx="3.4" ry="1.6" fill="#7A2E2E"/>${c.extra === 'apron' ? '' : extra}
</g></g>`;
}

const FLAGS = ['#E84A8A', '#2BB3B1', '#F4A51C', '#8A5CC9', '#5DBB63'];
const picado = (w, y = 10) => {
  let out = `<path d="M0 ${y}Q${w / 2} ${y + 8} ${w} ${y}" stroke="#7A3B1E" fill="none"/>`;
  for (let x = 6, i = 0; x < w - 20; x += 34, i++)
    out += `<g class="flag" style="animation-delay:${-i * .3}s"><path d="M${x} ${y + 2}h26v20l-4.3 5-4.3-5-4.3 5-4.3-5-4.3 5-4.3-5Z" fill="${FLAGS[i % 5]}"/><circle cx="${x + 13}" cy="${y + 12}" r="3.5" fill="#FFF6EA"/></g>`;
  return out;
};

const BG = {
  aula: () => `<rect width="360" height="220" fill="#F7E7C6"/>
<rect x="60" y="34" width="190" height="96" rx="4" fill="#2F5D50" stroke="#8E522D" stroke-width="6"/><text x="155" y="78" text-anchor="middle" font-size="22" font-weight="800" fill="#FFF6EA">¡Hola, clase!</text><path d="M80 104h70" stroke="#FFF6EA" stroke-width="2"/>
<circle cx="300" cy="56" r="20" fill="#FFF6EA" stroke="#3A6FB0" stroke-width="3"/><path d="M300 56V44M300 56h8" stroke="#333" stroke-width="2.5"/>
<rect x="280" y="96" width="60" height="80" fill="#C47E4A"/>${[106, 132, 158].map(y => `<rect x="284" y="${y}" width="52" height="4" fill="#8E522D"/>`).join('')}${[0, 1, 2, 3].map(i => `<rect x="${288 + i * 11}" y="${92 + 0}" width="8" height="14" fill="${FLAGS[i]}"/>`).join('')}
<rect y="176" width="360" height="44" fill="#C9A27A"/><path d="M0 196H360" stroke="#B08860"/>`,
  plaza: () => `<rect width="360" height="220" fill="#BFE6F2"/>
${[['#E84A8A', 0, 70], ['#F4A51C', 60, 50], ['#2BB3B1', 110, 80], ['#F2A65A', 175, 60], ['#8A5CC9', 230, 75], ['#5DBB63', 300, 55]].map(([c, x, h]) =>
    `<rect x="${x}" y="${150 - h}" width="62" height="${h + 50}" fill="${c}"/><rect x="${x + 12}" y="${162 - h}" width="12" height="16" rx="6" fill="#FFF6EA" opacity=".8"/><rect x="${x + 36}" y="${162 - h}" width="12" height="16" rx="6" fill="#FFF6EA" opacity=".8"/>`).join('')}
${picado(360, 14)}<rect y="186" width="360" height="34" fill="#E9C9A3"/><path d="M0 200H360M60 186L50 220M140 186L136 220M220 186L224 220M300 186L310 220" stroke="#D4AE85"/>`,
  casa: () => `<rect width="360" height="220" fill="#F3D9B1"/>
<rect x="30" y="40" width="90" height="70" rx="6" fill="#BFE6F2" stroke="#8E522D" stroke-width="5"/><path d="M75 40V110M30 75H120" stroke="#8E522D" stroke-width="3"/>
<rect x="250" y="44" width="56" height="44" fill="#FCE9D6" stroke="#B5653A" stroke-width="5"/><circle cx="270" cy="62" r="7" fill="#E84A8A"/><circle cx="286" cy="70" r="7" fill="#2BB3B1"/>
<path d="M320 172h22l-4 18h-14Z" fill="#B5653A"/><circle cx="324" cy="160" r="12" fill="#5DBB63"/><circle cx="338" cy="154" r="11" fill="#3E9A45"/>
${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 30}" y="150" width="30" height="14" fill="${i % 2 ? '#2F6FB0' : '#FFF6EA'}"/><circle cx="${i * 30 + 15}" cy="157" r="4" fill="${i % 2 ? '#FFF6EA' : '#2F6FB0'}"/>`).join('')}
<rect y="186" width="360" height="34" fill="#C47E4A"/><path d="M0 200H360M90 186V220M180 186V220M270 186V220" stroke="#A8653A"/>`,
  taqueria: () => `<rect width="360" height="220" fill="#F6C453"/>${picado(360, 8)}
<rect x="120" y="44" width="120" height="30" rx="5" fill="#C0392B"/><text x="180" y="65" text-anchor="middle" font-size="17" font-weight="800" fill="#FFF6EA">TACOS</text>
<rect x="250" y="88" width="80" height="12" rx="3" fill="#555"/><path d="M262 84q4-8 0-14M282 84q4-8 0-14M302 84q4-8 0-14" stroke="#fff" stroke-width="2" fill="none" class="steam"/>
<rect y="150" width="360" height="40" fill="#5DBB63"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 30}" y="150" width="15" height="40" fill="#E84A8A"/>`).join('')}
<rect y="144" width="360" height="8" fill="#8E522D"/><rect y="190" width="360" height="30" fill="#E9C9A3"/>`,
  mercado: () => `<rect width="360" height="220" fill="#EAA06B"/>${picado(360, 4)}
${Array.from({ length: 11 }, (_, i) => `<rect x="${i * 34}" y="40" width="34" height="18" fill="${i % 2 ? '#FFF6EA' : '#E84A8A'}"/><circle cx="${i * 34 + 17}" cy="58" r="17" fill="${i % 2 ? '#FFF6EA' : '#E84A8A'}"/>`).join('')}
<rect x="10" y="74" width="5" height="70" fill="#7A3B1E"/><rect x="345" y="74" width="5" height="70" fill="#7A3B1E"/>
<g>${[[40, '#F28C28'], [56, '#F28C28'], [48, '#F5A04A']].map(([x, c], i) => `<circle cx="${x}" cy="${i === 2 ? 128 : 138}" r="9" fill="${c}"/>`).join('')}
<path d="M290 144a24 24 0 0 1 48 0Z" fill="#3E9A45"/><path d="M296 144a18 18 0 0 1 36 0Z" fill="#E8505B"/></g>
<rect x="0" y="144" width="360" height="10" fill="#C47E4A"/><rect x="0" y="154" width="360" height="36" fill="#A8653A"/><rect y="190" width="360" height="30" fill="#E9C9A3"/>`,
  calle: () => `<rect width="360" height="220" fill="#BFE6F2"/>
<rect x="0" y="50" width="120" height="120" fill="#F2A65A"/><rect x="18" y="66" width="22" height="26" fill="#FFF6EA"/><rect x="62" y="66" width="22" height="26" fill="#FFF6EA"/>
<rect x="10" y="118" width="100" height="16" fill="#2BB3B1"/><text x="60" y="130" text-anchor="middle" font-size="10" font-weight="800" fill="#FFF6EA">FARMACIA</text>
<rect x="128" y="30" width="110" height="140" fill="#E84A8A"/><rect x="146" y="46" width="22" height="26" fill="#FFF6EA"/><rect x="196" y="46" width="22" height="26" fill="#FFF6EA"/><rect x="146" y="90" width="22" height="26" fill="#FFF6EA"/><rect x="196" y="90" width="22" height="26" fill="#FFF6EA"/>
<rect x="246" y="70" width="114" height="100" fill="#F4D35E"/><rect x="262" y="88" width="80" height="16" fill="#3A6FB0"/><text x="302" y="100" text-anchor="middle" font-size="10" font-weight="800" fill="#FFF6EA">TIENDA</text>
<rect y="170" width="360" height="22" fill="#CFC7BD"/><rect y="192" width="360" height="28" fill="#6B6B6B"/><path d="M10 206h30M80 206h30M150 206h30M220 206h30M290 206h30" stroke="#FFF6EA" stroke-width="3"/>`,
  parque: () => `<rect width="360" height="220" fill="#BFE6F2"/><circle cx="310" cy="36" r="18" fill="#F6B93B"/>
<path d="M150 70L180 48L210 70Z" fill="#C0392B"/><rect x="152" y="70" width="56" height="6" fill="#8E522D"/><path d="M156 76V150M180 76V150M204 76V150" stroke="#FFF6EA" stroke-width="4"/><rect x="146" y="150" width="68" height="8" fill="#FFF6EA"/>
${[[40, 110, '#3E9A45'], [90, 120, '#5DBB63'], [270, 115, '#3E9A45'], [330, 125, '#5DBB63']].map(([x, y, c]) => `<rect x="${x - 4}" y="${y}" width="8" height="50" fill="#7A3B1E"/><circle cx="${x}" cy="${y - 10}" r="28" fill="${c}"/>`).join('')}
<rect y="160" width="360" height="60" fill="#8BC34A"/><path d="M120 220Q170 180 240 160" stroke="#E9C9A3" stroke-width="22" fill="none"/>`
};

const PROP = {
  sol: () => `<g class="spin"><circle r="13" fill="#F6B93B"/>${Array.from({ length: 8 }, (_, i) => `<path d="M0 -18V-25" stroke="#F6B93B" stroke-width="3.5" stroke-linecap="round" transform="rotate(${i * 45})"/>`).join('')}</g>`,
  luna: () => `<path d="M6 -18A18 18 0 1 0 6 18A14 14 0 1 1 6 -18Z" fill="#F4D35E"/><circle cx="16" cy="-14" r="2" fill="#F4D35E"/><circle cx="20" cy="6" r="1.5" fill="#F4D35E"/>`,
  nube: () => `<g fill="#B8C4CC"><circle cx="-9" cy="2" r="11"/><circle cx="6" cy="-4" r="14"/><circle cx="17" cy="4" r="9"/><rect x="-18" y="2" width="38" height="11" rx="5"/></g>`,
  lluvia: () => PROP.nube() + `<path d="M-10 18l-3 8M2 18l-3 8M14 18l-3 8" stroke="#3A8FD8" stroke-width="2.5" stroke-linecap="round" class="drip"/>`,
  nieve: () => PROP.nube() + `<g stroke="#3A8FD8" stroke-width="1.6"><path d="M-8 19v8M-12 23h8"/><path d="M8 19v8M4 23h8"/></g>`,
  pin: () => `<path d="M0 22C-14 4 -16 -2 -16 -8A16 16 0 0 1 16 -8C16 -2 14 4 0 22Z" fill="#E84A8A"/><circle cy="-8" r="6" fill="#FFF6EA"/>`,
  casa: () => `<rect x="-17" y="-4" width="34" height="24" fill="#F2A65A"/><path d="M-22 -2L0 -22L22 -2Z" fill="#C0392B"/><rect x="-5" y="6" width="10" height="14" fill="#7A3B1E"/>`,
  foto: () => `<rect x="-22" y="-18" width="44" height="36" rx="3" fill="#8E522D"/><rect x="-18" y="-14" width="36" height="28" fill="#FCE9D6"/><circle cx="-7" cy="-4" r="5" fill="#B57A52"/><circle cx="7" cy="-4" r="5" fill="#8D5A3B"/><path d="M-14 14Q-7 2 0 14M0 14Q7 2 14 14" fill="#2BB3B1"/>`,
  pastel: () => `<rect x="-18" y="0" width="36" height="16" rx="3" fill="#E84A8A"/><rect x="-14" y="-12" width="28" height="13" rx="3" fill="#FCE9D6"/><rect x="-1.5" y="-22" width="3" height="10" fill="#2BB3B1"/><path d="M0 -28q3 3 0 6q-3-3 0-6" fill="#F6B93B"/>`,
  olla: () => `<path d="M-18 -4Q-20 18 0 18Q20 18 18 -4Z" fill="#B5653A"/><rect x="-20" y="-8" width="40" height="6" rx="3" fill="#8E522D"/><path d="M-6 -12q4-6 0-12M6 -12q4-6 0-12" stroke="#B8C4CC" stroke-width="2" fill="none" class="steam"/>`,
  cama: () => `<rect x="-22" y="0" width="44" height="12" fill="#8E522D"/><rect x="-22" y="-14" width="5" height="28" fill="#8E522D"/><rect x="-16" y="-6" width="12" height="7" rx="3" fill="#FFF6EA"/><rect x="-4" y="-6" width="24" height="8" rx="2" fill="#3A6FB0"/>`,
  taco: () => `<path d="M-20 8A20 20 0 0 1 20 8Z" fill="#F2D184"/><path d="M-14 6Q0 -12 14 6" stroke="#5DBB63" stroke-width="4" fill="none"/><circle cx="-5" cy="2" r="2.5" fill="#E8505B"/><circle cx="6" cy="1" r="2.5" fill="#E8505B"/>`,
  agua: () => `<path d="M-12 -18H12L9 18H-9Z" fill="#E7F5FA" stroke="#9FC9DA"/><path d="M-10 -6H10L8 16H-8Z" fill="#C2185B"/>`,
  dinero: () => `<circle r="17" fill="#F4C542" stroke="#C99A1E" stroke-width="2"/><text y="7" text-anchor="middle" font-size="20" font-weight="800" fill="#8A6A10">$</text>`,
  fruta: () => `<path d="M-20 0H20L15 18H-15Z" fill="#C47E4A"/><circle cx="-9" cy="-4" r="7" fill="#F28C28"/><circle cx="4" cy="-6" r="7" fill="#E8505B"/><circle cx="14" cy="-2" r="6" fill="#7CB342"/>`,
  manzana: () => `<circle cx="-5" cy="3" r="13" fill="#E8505B"/><circle cx="5" cy="3" r="13" fill="#E8505B"/><path d="M0 -10V-18" stroke="#7A3B1E" stroke-width="2.5"/><path d="M1 -15Q9 -20 12 -13Q5 -11 1 -15Z" fill="#5DBB63"/>`,
  platano: () => `<path d="M-20 -8Q-16 18 18 12Q22 10 20 6Q-6 12 -14 -10Z" fill="#F6C453" stroke="#C99A1E"/>`,
  cafe: () => `<rect x="-14" y="-8" width="24" height="24" rx="4" fill="#B5653A"/><path d="M10 -2q9 0 9 7t-9 7" stroke="#B5653A" stroke-width="3.5" fill="none"/><path d="M-6 -12q4-6 0-12M3 -12q4-6 0-12" stroke="#B8C4CC" stroke-width="2" fill="none" class="steam"/>`,
  pan: () => `<path d="M-20 8A20 18 0 0 1 20 8Z" fill="#E9A55B"/><path d="M-12 -2Q0 -10 12 -2M-15 4Q0 -4 15 4M-8 -8Q0 -13 8 -8" stroke="#FFF6EA" stroke-width="2.5" fill="none"/>`,
  corazon: () => `<path d="M0 16C-24 0 -18 -18 -6 -16C-2 -15 0 -11 0 -9C0 -11 2 -15 6 -16C18 -18 24 0 0 16Z" fill="#E84A8A" class="beat"/>`,
  farmacia: () => `<rect x="-20" y="-14" width="40" height="34" fill="#FFF6EA" stroke="#CFC7BD"/><rect x="-5" y="-10" width="10" height="24" fill="#3E9A45"/><rect x="-12" y="-3" width="24" height="10" fill="#3E9A45"/>`,
  escuela: () => `<rect x="-26" y="-4" width="52" height="24" fill="#F4D35E"/><path d="M-12 -4L0 -24L12 -4Z" fill="#C0392B"/><circle cy="-10" r="4.5" fill="#FFF6EA" stroke="#333"/><path d="M0 -12V-10H2" stroke="#333"/>${[-21, -13, 8, 16].map(x => `<rect x="${x}" y="2" width="5" height="6" fill="#3A8FD8"/>`).join('')}<rect x="-5" y="6" width="10" height="14" fill="#7A3B1E"/>`,
  mapa: () => `<path d="M-22 -14L-8 -18L8 -14L22 -18V16L8 20L-8 16L-22 20Z" fill="#FCE9D6" stroke="#C47E4A"/><path d="M-16 10Q-4 -8 10 2" stroke="#E84A8A" stroke-width="2" stroke-dasharray="3 3" fill="none"/><circle cx="10" cy="2" r="3" fill="#E84A8A"/>`,
  camion: () => `<g class="drive"><rect x="-24" y="-14" width="48" height="26" rx="5" fill="#2BB3B1"/>${[-16, -4, 8].map(x => `<rect x="${x}" y="-9" width="9" height="9" fill="#E7F5FA"/>`).join('')}<circle cx="-13" cy="13" r="5" fill="#333"/><circle cx="13" cy="13" r="5" fill="#333"/></g>`,
  metro: () => `<rect x="-22" y="-16" width="44" height="30" rx="8" fill="#F28C28"/><rect x="-16" y="-10" width="32" height="10" fill="#E7F5FA"/><text y="12" text-anchor="middle" font-size="10" font-weight="800" fill="#FFF6EA">M</text><circle cx="-12" cy="16" r="3" fill="#333"/><circle cx="12" cy="16" r="3" fill="#333"/>`,
  taxi: () => `<g class="drive"><path d="M-24 4V-4L-14 -14H12L22 -4V4Z" fill="#E84A8A"/><rect x="-24" y="2" width="48" height="8" fill="#FFF6EA"/><rect x="-6" y="-20" width="14" height="6" fill="#F6C453"/><circle cx="-13" cy="11" r="5" fill="#333"/><circle cx="13" cy="11" r="5" fill="#333"/></g>`,
  boleto: () => `<path d="M-22 -12H22V-4A4 4 0 0 0 22 4V12H-22V4A4 4 0 0 0 -22 -4Z" fill="#F6C453"/><path d="M-8 -12V12" stroke="#C99A1E" stroke-dasharray="2 2"/><path d="M-2 -4H16M-2 3H12" stroke="#8A6A10" stroke-width="2"/>`,
  tienda: () => `<rect x="-20" y="-4" width="40" height="24" fill="#FFF6EA" stroke="#CFC7BD"/>${[-20, -10, 0, 10].map((x, i) => `<path d="M${x} -16h10v10a5 5 0 0 1-10 0Z" fill="${i % 2 ? '#FFF6EA' : '#2BB3B1'}"/>`).join('')}<rect x="-6" y="6" width="12" height="14" fill="#3A6FB0"/>`,
  bolsa: () => `<path d="M-16 -8H16L13 20H-13Z" fill="#C47E4A"/><path d="M-7 -8Q-7 -20 0 -20Q7 -20 7 -8" stroke="#8E522D" stroke-width="2.5" fill="none"/>`,
  leche: () => `<path d="M-10 -10L-10 -16L10 -16L10 -10L14 -2V20H-14V-2Z" fill="#FFF6EA" stroke="#9FC9DA"/><rect x="-14" y="4" width="28" height="9" fill="#3A8FD8"/>`,
  calendario: () => `<rect x="-18" y="-16" width="36" height="34" rx="3" fill="#FFF6EA" stroke="#CFC7BD"/><rect x="-18" y="-16" width="36" height="10" rx="3" fill="#E8505B"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${-12 + (i % 3) * 9}" y="${-1 + Math.floor(i / 3) * 9}" width="6" height="6" fill="${i === 4 ? '#E84A8A' : '#CFC7BD'}"/>`).join('')}`,
  reloj: (h = 3, m = 0) => `<circle r="19" fill="#FFF6EA" stroke="#3A6FB0" stroke-width="3"/><path d="M0 0L${(9 * Math.sin((h % 12 + m / 60) * Math.PI / 6)).toFixed(1)} ${(-9 * Math.cos((h % 12 + m / 60) * Math.PI / 6)).toFixed(1)}" stroke="#333" stroke-width="3" stroke-linecap="round"/><path d="M0 0L${(14 * Math.sin(m * Math.PI / 30)).toFixed(1)} ${(-14 * Math.cos(m * Math.PI / 30)).toFixed(1)}" stroke="#E84A8A" stroke-width="2" stroke-linecap="round"/><circle r="2" fill="#333"/>`,
  laptop: () => `<rect x="-16" y="-14" width="32" height="22" rx="2" fill="#3B4A6B"/><rect x="-13" y="-11" width="26" height="16" fill="#BFE6F2"/><path d="M-22 10H22L18 14H-18Z" fill="#9AA3AE"/>`,
  balon: () => `<g class="spin"><circle r="17" fill="#FFF6EA" stroke="#333" stroke-width="1.5"/><path d="M0 -6L6 -2L4 5H-4L-6 -2Z" fill="#333"/><path d="M0 -6V-16M6 -2L15 -6M4 5L9 13M-4 5L-9 13M-6 -2L-15 -6" stroke="#333" stroke-width="1.5"/></g>`,
  musica: () => `<g class="beat" fill="#8A5CC9"><rect x="-6" y="-18" width="3" height="26"/><rect x="10" y="-22" width="3" height="26"/><path d="M-6 -18L13 -22V-15L-6 -11Z"/><ellipse cx="-10" cy="9" rx="6" ry="4.5"/><ellipse cx="6" cy="5" rx="6" ry="4.5"/></g>`,
  libro: () => `<path d="M0 -12Q-10 -18 -22 -14V16Q-10 12 0 18Q10 12 22 16V-14Q10 -18 0 -12Z" fill="#3A6FB0"/><path d="M0 -10Q-9 -15 -19 -12V13Q-9 9 0 14Q9 9 19 13V-12Q9 -15 0 -10Z" fill="#FFF6EA"/><path d="M0 -10V14" stroke="#CFC7BD"/>`,
  tele: () => `<rect x="-22" y="-16" width="44" height="30" rx="3" fill="#3B4A6B"/><rect x="-18" y="-12" width="36" height="22" fill="#2BB3B1"/><path d="M-8 18H8M0 14V18" stroke="#3B4A6B" stroke-width="3"/>`,
  fiesta: () => `<path d="M-24 -14Q0 -4 24 -14" stroke="#7A3B1E" fill="none"/>${[-18, -4, 10].map((x, i) => `<path d="M${x} -11h10v10l-5 4-5-4Z" fill="${FLAGS[i]}"/>`).join('')}<circle cx="-12" cy="10" r="2" fill="#F4A51C"/><circle cx="4" cy="14" r="2" fill="#2BB3B1"/><circle cx="14" cy="6" r="2" fill="#E84A8A"/>`,
  telefono: () => `<rect x="-11" y="-20" width="22" height="40" rx="4" fill="#3B4A6B"/><rect x="-8" y="-15" width="16" height="27" fill="#BFE6F2"/><circle cy="16" r="1.8" fill="#FFF6EA"/>`,
  wave: () => `<path d="M-22 -16H22V8H4L-6 18V8H-22Z" fill="#FFF6EA" stroke="#F4A51C" stroke-width="2"/><text y="0" text-anchor="middle" font-size="11" font-weight="800" fill="#E07B00">¡Hola!</text>`
};

function prop(name, x = 0, y = 0, s = 1) {
  let inner;
  if (name[0] === '%') {
    inner = `<circle r="20" fill="${name.replace('%', '#')}" stroke="#7A3B1E" stroke-width="2"/>`;
  } else if (name[0] === '#') {
    const t = name.slice(1), w = Math.max(30, t.length * 9 + 14);
    inner = `<rect x="${-w / 2}" y="-15" width="${w}" height="30" rx="7" fill="#FFF6EA" stroke="#F4A51C" stroke-width="2"/><text y="6" text-anchor="middle" font-size="15" font-weight="800" fill="#7A3B1E">${t}</text>`;
  } else {
    const [n, ...a] = name.split(':');
    inner = (PROP[n] || PROP.wave)(...a.map(Number));
  }
  return `<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
}

// A whole picture: background, characters, one optional prop. speaker gets the talking animation.
function scene(bg, cast, { speaker, pic, wave } = {}) {
  const xs = cast.length === 1 ? [110] : [110, 250];
  const people = cast.map((id, i) => person(id, xs[i], 205, (id === speaker ? 'talking ' : '') + (wave && i === 0 ? 'waving' : ''))).join('');
  const p = pic && pic !== 'wave' ? `<circle cx="250" cy="104" r="46" fill="#FFF6EA" opacity=".92"/>${prop(pic, 250, 104, 1.6)}` : '';
  return `<svg viewBox="0 0 360 220" class="scene" role="img" aria-hidden="true">${BG[bg]()}${people}${p}</svg>`;
}

const icon = (name, cls = 'ico') => `<svg viewBox="-30 -30 60 60" class="${cls}" aria-hidden="true">${prop(name)}</svg>`;
