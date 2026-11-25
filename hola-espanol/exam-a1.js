// DELE A1 practice set, written for this app in the official 2020 format (not an official exam).
const EXAM = {
  guide: [
    ['Comprensión de lectura', '45 min · 4 tasks · 25 questions'],
    ['Comprensión auditiva', '25 min · 4 tasks · 25 questions'],
    ['Expresión e interacción escritas', '25 min · 2 tasks: a form (15–25 words) and a short email or message (30–40 words)'],
    ['Expresión e interacción orales', '10 min + 10 min to prepare · 3 tasks: present yourself, talk about a topic, short conversation']
  ],
  reading: { name: 'Comprensión de lectura', min: 45, tasks: [
    { name: 'Read an email', type: 'mc',
      text: 'Hola, Ana:\n¿Cómo estás? Yo estoy muy bien. Ahora vivo en Guadalajara con mi hermana Rosa. Nuestro departamento es pequeño, pero tiene dos cuartos y una cocina bonita. Está cerca del centro y del mercado.\nTrabajo en una escuela de lunes a viernes. Empiezo a las ocho de la mañana y termino a las tres de la tarde. Mi hermana trabaja en una farmacia y siempre llega a casa a las seis. En la tarde voy al parque o cocino con Rosa. Los sábados vamos al mercado a comprar fruta y pan dulce. Los domingos comemos con mis papás.\nEn diciembre voy a ir a Chicago para visitarte. ¡Tengo muchas ganas de verte! ¿Hace mucho frío allá en invierno? Escríbeme pronto.\nUn abrazo,\nLupita',
      q: [
        ['Lupita vive con…', ['su mamá', 'su hermana', 'una amiga'], 1],
        ['El departamento de Lupita…', ['es muy grande', 'está lejos del centro', 'tiene dos cuartos'], 2],
        ['Lupita trabaja…', ['en una escuela', 'en una farmacia', 'en el mercado'], 0],
        ['Los domingos, Lupita…', ['va al mercado', 'come con sus papás', 'trabaja'], 1],
        ['Lupita pregunta por el clima. ¿Qué imagen va con su pregunta?', ['@sol', '@nieve', '@lluvia'], 1]
      ] },
    { name: 'Short notes and signs', type: 'match',
      texts: ['Farmacia San José. Abierto las 24 horas, todos los días.', 'Se renta cuarto cerca del metro. 3,000 pesos al mes.', 'Mamá: fui al mercado. Regreso a las seis. Hay comida en la cocina. Diego', 'Clases de baile: cumbia y salsa. Martes y jueves, 7:00 p. m.', 'Prohibido estacionarse.', 'Biblioteca: por favor, no comer ni beber.', 'Taquería El Güero: 3 tacos + agua por 60 pesos.', 'Se busca mesero para fines de semana. Pregunte aquí.', 'Museo: entrada libre los domingos.'],
      q: [['Aquí puedes comprar medicina en la noche.', 0], ['Este mensaje es para la mamá de Diego.', 2], ['Aquí puedes aprender a bailar.', 3], ['Aquí no puedes tomar café.', 5], ['Puedes comer y tomar algo por poco dinero.', 6], ['Hay trabajo para los sábados y domingos.', 7]] },
    { name: 'Ads', type: 'match',
      texts: ['@libro Clases de inglés para adultos. En la noche.', '@corazon Veterinaria Patitas: consultas para perros y gatos.', '@pan Panadería La Espiga: pan dulce recién hecho desde las 6 a. m.', '@olla Taller de cocina mexicana: aprende a hacer mole.', '@balon Venta de balones y uniformes de fútbol.', '@sol Excursiones a la playa los fines de semana.', '@telefono Reparación de celulares en una hora.', '@libro Librería: libros en español e inglés.', '@tele Cine Plaza: películas mexicanas, boletos a 50 pesos.'],
      q: [['Mi celular no funciona.', 6], ['Quiero aprender a cocinar comida mexicana.', 3], ['Mi perro está enfermo.', 1], ['Quiero ver una película barata.', 8], ['Quiero comprar conchas para el desayuno.', 2], ['Trabajo en el día y quiero estudiar inglés.', 0]] },
    { name: 'Festival flyer', type: 'mc',
      text: 'Festival de la Comida Mexicana\nParque Central, del viernes 12 al domingo 14 de mayo\nHorario: viernes de 4:00 p. m. a 10:00 p. m.; sábado y domingo de 10:00 a. m. a 10:00 p. m.\nEntrada: 30 pesos. Niños menores de 10 años: gratis.\nEste año hay más de cuarenta puestos de comida de todo el país: tacos, tamales, pozole, mole y mucho más. También hay aguas frescas y pan dulce.\nActividades:\n– Viernes: concierto de mariachi a las 8:00 p. m.\n– Sábado: taller de tortillas para niños a las 11:00 a. m.\n– Domingo: concurso de salsas a la 1:00 p. m. ¡El ganador recibe 2,000 pesos!\nInformación importante: no hay estacionamiento en el parque. Recomendamos llegar en metro (estación Juárez) o en camión. Puede traer a su perro. Hay baños y servicio médico.',
      q: [
        ['El festival dura…', ['un día', 'tres días', 'una semana'], 1],
        ['El viernes, el festival empieza a las…', ['10:00 a. m.', '4:00 p. m.', '8:00 p. m.'], 1],
        ['Un niño de 6 años paga…', ['nada', '30 pesos', '15 pesos'], 0],
        ['En el festival hay…', ['más de 40 puestos', '14 puestos', '12 puestos'], 0],
        ['El concierto de mariachi es el…', ['viernes', 'sábado', 'domingo'], 0],
        ['El taller de tortillas es para…', ['adultos', 'niños', 'cocineros'], 1],
        ['Para llegar al festival es mejor ir…', ['en carro', 'en metro', 'en taxi'], 1],
        ['En el festival NO hay…', ['baños', 'servicio médico', 'estacionamiento'], 2]
      ] }
  ]},
  listening: { name: 'Comprensión auditiva', min: 25, tasks: [
    { name: 'Short dialogues', type: 'mc', q: [
      ['¿Qué quiere tomar la mujer?', ['@cafe', '@agua', '@leche'], 1, [['m', '¿Quieres un café?'], ['f', 'No, gracias. Prefiero un agua.'], ['m', 'Muy bien, un agua.']]],
      ['¿Cómo va Diego al trabajo hoy?', ['@metro', '@taxi', '@camion'], 2, [['f', 'Diego, ¿vas en metro?'], ['m', 'No, hoy voy en camión porque el metro está cerrado.']]],
      ['¿Qué hora es?', ['@reloj:3', '@reloj:4:30', '@reloj:5'], 1, [['f', 'Perdón, ¿qué hora es?'], ['m', 'Son las cuatro y media.']]],
      ['¿Qué tiempo hace hoy?', ['@lluvia', '@sol', '@nieve'], 1, [['m', '¿Llevamos sombrilla?'], ['f', 'No, hoy hace sol y mucho calor.']]],
      ['¿Qué compra la señora?', ['@platano', '@manzana', '@pan'], 1, [['f', 'Un kilo de manzanas, por favor.'], ['m', '¿Algo más?'], ['f', 'No, solo las manzanas.']]]
    ] },
    { name: 'Announcements', type: 'match', pics: ['camion', 'farmacia', 'tienda', 'metro', 'tele', 'escuela', 'fiesta', 'lluvia'], q: [
      ['Atención, pasajeros: el metro de las ocho cuarenta llega con diez minutos de retraso.', 3],
      ['Farmacia del Centro: este fin de semana, todos los productos para bebé con descuento.', 1],
      ['Señores padres de familia: mañana no hay clases en la escuela.', 5],
      ['Cine Plaza: la película de las siete empieza en cinco minutos.', 4],
      ['Gran fiesta en la plaza el sábado: música, baile y comida gratis.', 6]
    ] },
    { name: 'Sofía talks about her family', type: 'match',
      texts: ['trabaja en un restaurante', 'vive en Monterrey', 'cocina los domingos', 'tiene ochenta años', 'estudia en la universidad', 'tiene una tienda de ropa', 'juega fútbol los sábados', 'tiene dos gatos', 'vive en Chicago', 'trabaja en una farmacia', 'tiene un perro'],
      q: [['Mi hermano Diego trabaja en un restaurante.', 0, 'Mi hermano…'], ['Mi mamá vive en Monterrey.', 1, 'Mi mamá…'], ['Mi papá cocina los domingos.', 2, 'Mi papá…'], ['Mi abuela tiene ochenta años.', 3, 'Mi abuela…'], ['Mi hermana estudia en la universidad.', 4, 'Mi hermana…'], ['Mi tía tiene una tienda de ropa.', 5, 'Mi tía…'], ['Mi primo juega fútbol los sábados.', 6, 'Mi primo…'], ['Mi sobrina tiene dos gatos.', 7, 'Mi sobrina…']] },
    { name: 'Weekend plans', type: 'mc',
      audio: [['m', 'Hola, Lupita. ¿Qué vas a hacer este fin de semana?'], ['f', 'El sábado en la mañana voy a trabajar, pero en la tarde estoy libre.'], ['m', '¿Quieres ir al cine? Hay una película mexicana nueva.'], ['f', '¡Sí! ¿A qué hora?'], ['m', 'Hay una función a las cinco y otra a las ocho.'], ['f', 'Mejor a las cinco, porque en la noche voy a cenar con mi familia.'], ['m', 'Perfecto. ¿Dónde nos vemos?'], ['f', 'En la estación del metro, al lado de la panadería.'], ['m', 'Muy bien. ¿Y el domingo? ¿Vas al mercado?'], ['f', 'Sí, siempre voy con mi mamá. Compramos fruta, verdura y tortillas.'], ['m', 'Yo quiero ir también. Necesito comprar un regalo para mi hermana. Es su cumpleaños el lunes.'], ['f', '¡Qué bonito! ¿Cuántos años cumple?'], ['m', 'Cumple veinticinco.'], ['f', 'En el mercado hay una tienda de artesanías muy bonita.'], ['m', '¡Qué buena idea! Entonces, nos vemos el sábado a las cinco.'], ['f', '¡Sí, hasta el sábado!']],
      q: [
        ['El sábado en la mañana, Lupita va a…', ['trabajar', 'ir al cine', 'cocinar'], 0],
        ['Van a ver una película…', ['mexicana', 'estadounidense', 'de niños'], 0],
        ['Van a la función de las…', ['cinco', 'ocho', 'siete'], 0],
        ['En la noche, Lupita va a cenar con…', ['su familia', 'Mateo', 'sus amigas'], 0],
        ['Se van a ver al lado de…', ['la panadería', 'el cine', 'el mercado'], 0],
        ['Lupita va al mercado con…', ['su mamá', 'su hermana', 'Mateo'], 0],
        ['La hermana de Mateo va a cumplir…', ['25 años', '20 años', '15 años'], 0]
      ] }
  ]},
  writing: { name: 'Expresión e interacción escritas', min: 25, tasks: [
    { name: 'Fill in a form', type: 'form', prompt: 'You want to sign up for a Mexican cooking class. Fill in the form (15–25 words).',
      fields: ['Nombre', 'Apellido', 'Nacionalidad', 'Ciudad', 'Teléfono', '¿Por qué quiere tomar la clase?'],
      model: 'Nombre: Ana · Apellido: Brown · Nacionalidad: estadounidense · Ciudad: Chicago · Teléfono: 312 555 0100 · Quiero tomar la clase porque me gusta la comida mexicana y quiero cocinar mole.' },
    { name: 'Write an email', type: 'text', min: 30, max: 40,
      prompt: 'Write an email to your new friend Lupita (30–40 words). Say hello, introduce yourself (name, where you are from, where you live), say what you like to do, and say goodbye.',
      model: 'Hola, Lupita: ¿Cómo estás? Me llamo Ana. Soy de Estados Unidos y vivo en Chicago. Trabajo en la tarde. Me gusta leer, escuchar música y comer tacos con mi familia. ¡Escríbeme pronto! Un abrazo, Ana' }
  ]},
  speaking: { name: 'Expresión e interacción orales', min: 10, prep: 10, tasks: [
    { name: 'Present yourself', time: '1–2 min', prompt: 'Say your name, age, nationality, where you live, what languages you speak and what you do.',
      model: 'Hola, me llamo Ana. Tengo treinta años. Soy estadounidense y vivo en Chicago. Hablo inglés y un poco de español. Trabajo con computadoras.' },
    { name: 'Talk about a topic: mi familia', time: '2–3 min', prompt: 'Talk about your family: how many people, their names, where they live, what they do, what you do together.',
      model: 'Mi familia no es muy grande. Mi mamá se llama… Vive en… Mi hermano trabaja en… Los domingos comemos juntos y vemos la tele.' },
    { name: 'Short conversation', time: '3–4 min', prompt: 'Answer each question out loud, then ask the examiner two questions of your own.',
      questions: ['¿Dónde vives?', '¿Tienes hermanos?', '¿Qué te gusta hacer el fin de semana?', '¿A qué hora trabajas?'],
      model: 'Questions you could ask: ¿Y usted, dónde vive? ¿Qué le gusta hacer el fin de semana?' }
  ]}
};
