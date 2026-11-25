// DELE A2 practice set, written for this app in the official DELE A2 format (Instituto Cervantes exam guide). Not an official exam.
// mc question: [question, options, right index, audio lines?, passage?]. match question: [statement or spoken text, right index, label?]
const EXAM_A2 = {
  guide: [
    ['Comprensión de lectura', '60 min · 4 tasks · 25 questions: an email (5), eight short texts (8), match statements to three texts (6), a longer text (6)'],
    ['Comprensión auditiva', '40 min · 4 tasks · 25 questions · each recording plays twice: six conversations with pictures (6), six short messages (6), who says it in a conversation (6), match seven messages to statements (7)'],
    ['Expresión e interacción escritas', '45 min · 2 tasks: reply to a message (60–70 words), a short composition from two options (70–80 words)'],
    ['Expresión e interacción orales', '12 min + 12 min to prepare · 3 tasks: a short talk on a topic (2–3 min), describe a photo (2–3 min), a conversation based on the photo (3–4 min)']
  ],
  reading: { name: 'Comprensión de lectura', min: 60, tasks: [
    { name: 'Read an email', type: 'mc',
      text: 'Hola, Ana:\n¡Por fin tengo tiempo para escribirte! Perdón por no contestar antes, pero este mes fue muy difícil. Como sabes, en octubre me cambié de casa. Ahora vivo en la colonia Roma, en un departamento pequeño pero muy bonito, con mucha luz y una terraza. Lo comparto con mi prima Mariana, que estudia Derecho en la universidad.\nLa colonia me encanta. Hay muchos cafés, librerías y un mercado con fruta muy barata. Los domingos cierran la avenida a los carros y la gente anda en bicicleta o camina con sus perros. El único problema es el ruido: los viernes y sábados hay música hasta muy tarde.\nTambién tengo trabajo nuevo. Ya no trabajo en el banco; ahora soy recepcionista en un hotel del centro. Empiezo a las siete de la mañana, así que me levanto muy temprano, pero termino a las tres y tengo las tardes libres. Por eso me inscribí en un curso de fotografía los martes y jueves.\n¿Y tú? ¿Todavía quieres venir a México en diciembre? Si vienes, puedes quedarte en nuestro departamento. Mariana se va con sus papás a Veracruz para Navidad, así que hay una recámara libre. Podemos ir a Teotihuacán y comer pozole en el mercado.\nEscríbeme pronto y dime las fechas.\nUn abrazo,\nLupita',
      q: [
        ['Lupita no contestó antes porque…', ['estuvo enferma', 'tuvo un mes muy ocupado', 'no tenía internet'], 1],
        ['Mariana es…', ['la prima de Lupita', 'la dueña del departamento', 'una compañera de trabajo'], 0],
        ['Según Lupita, lo malo de la colonia es…', ['el tráfico de los domingos', 'el precio de la fruta', 'el ruido del fin de semana'], 2],
        ['Ahora Lupita trabaja…', ['en un banco', 'en un hotel', 'en una librería'], 1],
        ['Ana puede dormir en la recámara de Mariana porque Mariana…', ['va a viajar en diciembre', 'se va a cambiar de casa', 'va a trabajar en Navidad'], 0]
      ] },
    { name: 'Eight short texts', type: 'mc', q: [
      ['¿Qué ofrece la escuela?', ['Clases gratis de inglés', 'Una clase de prueba sin costo', 'Descuento para niños'], 1, null,
        'Escuela de Idiomas Babel. ¿Quieres aprender inglés, francés o alemán? Grupos pequeños de máximo ocho alumnos, en la mañana o en la tarde. Profesores nativos con experiencia. Ven a conocernos: tu primera clase es gratis. Inscripciones abiertas del 1 al 15 de agosto. Calle Durango 45, colonia Roma.'],
      ['Según el aviso, los vecinos deben…', ['pagar el agua antes del viernes', 'guardar agua para el jueves', 'llamar a la administración el jueves'], 1, null,
        'Aviso a los vecinos: el jueves 14, de 9:00 a 17:00 horas, no habrá agua en el edificio por trabajos de reparación. Les recomendamos llenar cubetas y botellas el miércoles en la noche. Para cualquier duda, pueden llamar a la administración al 55 2345 6789. Gracias por su comprensión.'],
      ['¿Qué busca la persona del anuncio?', ['Alguien para cuidar a sus hijos', 'Un trabajo de niñera', 'Una escuela para sus hijos'], 0, null,
        'Busco niñera para cuidar a dos niños de 4 y 7 años, de lunes a viernes, de 3 a 7 de la tarde. Es necesario recogerlos en la escuela y ayudar con la tarea. Experiencia mínima de un año. Buen sueldo. Interesadas, mandar mensaje al 55 8765 4321.'],
      ['El restaurante…', ['abre solo en la noche', 'tiene comida corrida entre semana', 'cierra los domingos'], 1, null,
        'Fonda Doña Lucha. Comida casera como la de tu abuela. De lunes a viernes, comida corrida de 1 a 5: sopa, guisado, agua del día y postre por 95 pesos. Sábados y domingos, menú especial de barbacoa y pozole. Abrimos todos los días de 8 de la mañana a 6 de la tarde.'],
      ['¿Para qué escribe Diego este mensaje?', ['Para cancelar una cita', 'Para cambiar la hora de una cita', 'Para invitar a Sofía al cine'], 1, null,
        'Hola, Sofía. Al final no puedo llegar a las seis porque tengo una reunión en la oficina. ¿Te parece si nos vemos a las siete y media en el mismo café? Si no puedes, lo dejamos para el sábado. Avísame, por favor. Un beso, Diego.'],
      ['En esta tienda…', ['puedes devolver la ropa sin ticket', 'hay descuento solo este fin de semana', 'los zapatos no tienen descuento'], 2, null,
        '¡Grandes rebajas de verano! Este mes, toda la ropa de mujer y de niño con 30 % de descuento, y la ropa de hombre con 20 %. Zapatos y bolsas, precio normal. No se aceptan devoluciones de productos rebajados. Pregunte por nuestra tarjeta de cliente.'],
      ['El blog recomienda…', ['visitar Guanajuato en un solo día', 'caminar por la ciudad', 'ir en carro al centro'], 1, null,
        'Mi fin de semana en Guanajuato. Es una de las ciudades más bonitas de México. Mi consejo: no lleves carro, porque el centro tiene calles muy estrechas y túneles, y es difícil estacionarse. Lo mejor es caminar y perderse por los callejones. Quédate por lo menos dos noches.'],
      ['Según la nota, la clase de yoga del lunes…', ['es en otro salón', 'empieza más tarde', 'no va a haber'], 0, null,
        'Gimnasio Vida Sana. Les informamos que el lunes la clase de yoga de las 7:00 de la mañana va a ser en el salón 3, en el segundo piso, porque estamos pintando el salón 1. El horario no cambia. Recuerden traer su toalla y una botella de agua.']
    ] },
    { name: 'Three short texts', type: 'match',
      texts: [
        'CURSO DE COCINA MEXICANA. Aprende a preparar los platos más típicos: mole, tamales, chiles en nogada y salsas. Son ocho clases, los sábados de 10:00 a 13:00, en un grupo de máximo diez personas. Todos los ingredientes están incluidos y al final de cada clase comemos juntos lo que cocinamos. No necesitas experiencia. Precio: 3,200 pesos todo el curso. Al terminar recibes un diploma.',
        'SE BUSCA PERSONAL. Restaurante del centro busca cocinero o cocinera con experiencia mínima de dos años en cocina mexicana. Horario de martes a domingo, de 2:00 de la tarde a 11:00 de la noche. Ofrecemos buen sueldo, comida en el trabajo y Seguro Social. Es importante saber trabajar en equipo. Interesados, enviar currículum por correo electrónico antes del 30 de junio.',
        'RECETA: AGUA DE JAMAICA. Ingredientes para un litro y medio: una taza de flor de jamaica, un litro y medio de agua y media taza de azúcar. Pon a hervir medio litro de agua con la jamaica durante cinco minutos. Deja enfriar y cuela. Agrega el resto del agua y el azúcar. Sirve con mucho hielo. Es perfecta para los días de calor y también puedes prepararla sin azúcar.'
      ],
      q: [['Aquí no tienes que pagar los ingredientes aparte.', 0], ['Esto es para personas que ya saben cocinar.', 1], ['Aquí se explica cómo preparar una bebida.', 2], ['Al final te dan un papel que lo certifica.', 0], ['Hay que mandar un documento con tu experiencia.', 1], ['Se puede hacer con menos azúcar o sin ella.', 2]] },
    { name: 'A longer text', type: 'mc',
      text: 'Frida Kahlo: una vida llena de color\nFrida Kahlo nació el 6 de julio de 1907 en Coyoacán, que entonces era un pueblo en las afueras de la Ciudad de México. Vivió casi toda su vida en la Casa Azul, la casa de sus padres, que hoy es uno de los museos más visitados del país.\nDe niña, a los seis años, tuvo poliomielitis y desde entonces su pierna derecha fue más delgada que la izquierda. Pero Frida era una niña fuerte y muy activa: hacía deporte, nadaba y andaba en bicicleta, algo poco común para las niñas de su época.\nA los dieciocho años tuvo un accidente terrible: el camión en el que viajaba chocó con un tranvía. Frida pasó muchos meses en la cama, sin poder caminar. Para no aburrirse, empezó a pintar. Su madre le puso un espejo encima de la cama y así Frida pintó sus primeros autorretratos. Más tarde dijo: "Me pinto a mí misma porque soy el tema que mejor conozco".\nEn 1929 se casó con el pintor Diego Rivera, que era veinte años mayor que ella. Su relación fue difícil: se divorciaron en 1939 y se volvieron a casar un año después. Juntos viajaron a Estados Unidos, donde Diego pintó murales en San Francisco, Detroit y Nueva York.\nFrida pintó unos doscientos cuadros. En ellos aparecen su dolor, su amor por México, los animales que tenía en casa y la ropa tradicional de Tehuana que le encantaba llevar. Su primera exposición individual en México fue en 1953. Estaba tan enferma que llegó en ambulancia y estuvo en su cama durante toda la inauguración.\nMurió en la Casa Azul el 13 de julio de 1954, a los cuarenta y siete años. Hoy es una de las artistas más famosas del mundo.',
      q: [
        ['Coyoacán, cuando nació Frida, era…', ['el centro de la ciudad', 'un pueblo fuera de la ciudad', 'un museo'], 1],
        ['Cuando era niña, Frida…', ['no podía hacer deporte', 'practicaba varios deportes', 'vivía en el campo'], 1],
        ['Frida empezó a pintar…', ['en la escuela', 'después de un accidente', 'cuando conoció a Diego Rivera'], 1],
        ['Frida y Diego Rivera…', ['se casaron dos veces', 'se casaron en Estados Unidos', 'nunca se divorciaron'], 0],
        ['En sus cuadros, Frida NO pintaba…', ['su ropa favorita', 'sus animales', 'murales de Nueva York'], 2],
        ['En su primera exposición en México, Frida…', ['no pudo ir', 'estuvo en una cama', 'llegó caminando'], 1]
      ] }
  ]},
  listening: { name: 'Comprensión auditiva', min: 40, tasks: [
    { name: 'Six conversations', type: 'mc', q: [
      ['¿Qué va a comprar el hombre para la fiesta?', ['@pastel', '@fruta', '@agua'], 0, [['f', '¿Ya tienes todo para la fiesta de tu hija?'], ['m', 'Casi todo. Ya compré los refrescos y la fruta.'], ['f', '¿Y el pastel?'], ['m', 'Ay, se me olvidó. Ahorita voy a la panadería por uno de chocolate, que es su favorito.'], ['f', 'Cómpralo grande, van a venir muchos niños.']]],
      ['¿Dónde está la farmacia?', ['@escuela', '@tienda', '@casa'], 1, [['m', 'Disculpe, ¿hay una farmacia por aquí?'], ['f', 'Sí, mire, siga derecho dos cuadras.'], ['m', '¿Al lado de la escuela?'], ['f', 'No, enfrente de la escuela hay una tienda. La farmacia está dentro de la tienda, al fondo.'], ['m', 'Muchas gracias.']]],
      ['¿Qué compró la mujer?', ['@bolsa', '@telefono', '@libro'], 1, [['m', '¡Qué bonita bolsa! ¿Es nueva?'], ['f', 'No, ya la tenía. Hoy fui al centro comercial a buscar un libro para mi papá, pero al final no compré nada para él.'], ['m', '¿Entonces?'], ['f', 'Vi un celular en oferta y lo compré. El mío ya no funcionaba bien.']]],
      ['¿Cómo va a ir Lupita al aeropuerto?', ['@metro', '@taxi', '@camion'], 1, [['m', 'Lupita, ¿cómo vas a ir al aeropuerto? ¿En metro?'], ['f', 'No, con la maleta es muy incómodo. Pensé en el camión, pero tarda mucho.'], ['m', '¿Entonces?'], ['f', 'Voy a tomar un taxi. Ya lo pedí para las cinco de la mañana.']]],
      ['¿A qué hora empieza la película?', ['@reloj:6', '@reloj:7:30', '@reloj:8:15'], 2, [['f', '¿Vamos al cine esta noche? Hay una función a las seis.'], ['m', 'A las seis no puedo, salgo del trabajo a las siete.'], ['f', 'Entonces la de las ocho y cuarto.'], ['m', 'Perfecto. Nos vemos en la entrada a las ocho.']]],
      ['¿Qué tiempo va a hacer el fin de semana?', ['@sol', '@lluvia', '@nieve'], 1, [['m', '¿Vamos a la playa el sábado?'], ['f', 'No creo. Vi el pronóstico y va a llover todo el fin de semana.'], ['m', '¡Qué mala suerte! Bueno, entonces vamos al museo.'], ['f', 'Sí, buena idea. Y llevamos paraguas.']]]
    ] },
    { name: 'Six short messages', type: 'mc', q: [
      ['¿Qué pasa con el vuelo a Cancún?', ['Sale más tarde', 'Está cancelado', 'Sale de otra puerta'], 2, [['f', 'Atención, señores pasajeros del vuelo 302 con destino a Cancún: les informamos que el vuelo saldrá de la puerta 14 y no de la puerta 8. El horario de salida no cambia: 10:45 de la mañana. Gracias.']]],
      ['¿Qué ofrece hoy el supermercado?', ['Fruta más barata', 'Dos productos por el precio de uno', 'Pan gratis'], 0, [['m', 'Estimados clientes: solo por hoy, toda la fruta y la verdura tienen 25 % de descuento. Además, en la panadería, el pan dulce recién hecho está listo. ¡Gracias por comprar en Súper Ahorro!']]],
      ['Según la radio, el sábado…', ['va a hacer frío en el norte', 'va a llover en la capital', 'va a hacer calor en la costa'], 0, [['f', 'Y ahora el clima para el fin de semana. El sábado viene un frente frío al norte del país, con temperaturas de hasta cinco grados. En la capital, cielo despejado y sin lluvia. En las costas, temperaturas agradables.']]],
      ['La biblioteca…', ['está cerrada esta semana', 'tiene un horario nuevo', 'cierra a las ocho en diciembre'], 1, [['m', 'La Biblioteca Pública Vasconcelos informa a sus usuarios que, a partir del lunes, el nuevo horario es de 8 de la mañana a 9 de la noche, de lunes a domingo. Para sacar libros es necesario presentar la credencial de la biblioteca.']]],
      ['¿Qué tienen que hacer los padres?', ['Ir a una reunión', 'Pagar la inscripción', 'Recoger a los niños temprano'], 0, [['f', 'Aviso para los padres de familia de la escuela Benito Juárez: el viernes a las seis de la tarde hay una reunión en el salón de usos múltiples para organizar la fiesta de fin de curso. Es muy importante su asistencia.']]],
      ['La noticia habla de…', ['un nuevo museo', 'un concierto gratis', 'una exposición de fotografía'], 1, [['m', 'Este domingo, en el zócalo de la ciudad, habrá un concierto gratis de la Orquesta Sinfónica Nacional a las seis de la tarde. Las autoridades recomiendan llegar en metro, porque las calles del centro van a estar cerradas a los carros.']]]
    ] },
    { name: 'Who says it?', type: 'mc',
      audio: [['m', '¡Hola, Lupita! Hace mucho que no te veo. ¿Qué tal tus vacaciones?'], ['f', '¡Hola, Diego! Muy bien. Fui a Oaxaca con mi hermana. Estuvimos diez días.'], ['m', '¡Qué padre! Yo nunca he ido a Oaxaca. ¿Qué hicieron?'], ['f', 'Visitamos Monte Albán, que es impresionante, y comimos mucho: mole, tlayudas, chocolate. Pero el último día me enfermé del estómago.'], ['m', '¡Ay, no! Yo también me enfermé en mis vacaciones. Fui a la playa y tuve gripe toda la semana.'], ['f', '¿En serio? ¿Con tanto calor?'], ['m', 'Sí, por el aire acondicionado del hotel. ¿Y cómo viajaron a Oaxaca?'], ['f', 'En camión. Son seis horas desde la Ciudad de México. Mi hermana quería ir en avión, pero era muy caro.'], ['m', 'Yo prefiero el avión. No me gusta estar sentado tanto tiempo.'], ['f', 'Bueno, ¿y ahora qué haces? ¿Sigues en el banco?'], ['m', 'No, el mes pasado empecé en una empresa de computadoras. Gano más y trabajo cerca de mi casa.'], ['f', '¡Felicidades! Yo sigo en la escuela de idiomas, pero quiero buscar otro trabajo el año que viene.'], ['m', 'Oye, ¿y si comemos juntos el sábado y me cuentas más?'], ['f', '¡Claro! Te mando un mensaje.']],
      q: [
        ['Nunca ha estado en Oaxaca.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 0],
        ['Tuvo gripe en sus vacaciones.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 0],
        ['Viajó en tren.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 2],
        ['Prefiere no pasar muchas horas sentado.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 0],
        ['Tiene un trabajo nuevo.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 0],
        ['Quiere cambiar de trabajo.', ['El hombre', 'La mujer', 'Ninguno de los dos'], 1]
      ] },
    { name: 'Match the messages', type: 'match',
      texts: ['La persona quiere cambiar la hora de una cita.', 'Hay un problema con un pago.', 'Alguien encontró algo que la persona perdió.', 'La persona tiene que traer un documento.', 'La tienda va a cerrar más temprano.', 'Alguien invita a una fiesta.', 'Un paquete no se pudo entregar.', 'Hay que llamar a urgencias.', 'Una clase se cancela.', 'El departamento ya no está disponible.'],
      q: [
        ['Hola, habla Mariana, del consultorio de la doctora Ruiz. Le llamo para cambiar su cita del martes. ¿Puede venir el miércoles a las diez en lugar de las cuatro? Llámenos, por favor.', 0, 'Mensaje 1'],
        ['Buenas tardes, le hablamos del banco. Su último pago con tarjeta no pasó. Por favor, comuníquese con nosotros al 800 123 4567 para revisar su cuenta.', 1, 'Mensaje 2'],
        ['Hola, soy el mesero del restaurante El Patio. Ayer olvidó su paraguas negro en la mesa. Lo tenemos guardado, puede pasar por él cuando quiera.', 2, 'Mensaje 3'],
        ['Le recordamos que mañana, para su entrevista de trabajo, es necesario traer una identificación oficial y una copia de su currículum. La entrevista es a las nueve.', 3, 'Mensaje 4'],
        ['¡Hola! El sábado cumplo treinta años y hago una fiesta en mi casa a las ocho. Trae algo de tomar. ¡Te espero! Soy Mateo.', 5, 'Mensaje 5'],
        ['Buenos días, le hablamos de Paquetería Rápida. Fuimos a su casa a las once, pero no había nadie. Mañana regresamos entre nueve y dos.', 6, 'Mensaje 6'],
        ['Hola, buenas tardes. Le llamo para avisarle que el profesor de fotografía está enfermo y hoy no hay clase. La próxima clase es el jueves a la misma hora.', 8, 'Mensaje 7']
      ] }
  ]},
  writing: { name: 'Expresión e interacción escritas', min: 45, tasks: [
    { name: 'Reply to an email', type: 'text', min: 60, max: 70,
      prompt: 'Your friend Sofía sent you this email: «¡Hola! El mes que viene voy a Chicago por una semana. ¿Me recomiendas qué visitar? ¿Qué tiempo hace? ¿Podemos vernos un día? Un abrazo, Sofía». Reply (60–70 words): greet her, recommend two places, say what the weather is like, suggest a day and a plan to meet, and say goodbye.',
      model: '¡Hola, Sofía! ¡Qué buena noticia! Te recomiendo visitar el Instituto de Arte y caminar por el lago Michigan. También puedes subir a la torre Willis, la vista es impresionante. En noviembre hace mucho frío y a veces nieva, así que trae abrigo, gorro y guantes. ¿Nos vemos el sábado? Podemos comer tacos en Pilsen y después ir al Museo Nacional de Arte Mexicano. ¡Escríbeme! Un abrazo, Ana' },
    { name: 'Write a short composition', type: 'text', min: 70, max: 80,
      prompt: 'Choose ONE option and write 70–80 words.\nOption A: Write about your last vacation or a special trip: where you went, who you went with, what you did, and what you liked most.\nOption B: Write about a person who is important in your life: who they are, what they are like, what you used to do together, and why they are important to you.',
      model: 'Opción A: El verano pasado fui a Guadalajara con mi novio. Viajamos en avión y nos quedamos cinco días en un hotel del centro. Visitamos la catedral, caminamos por las calles peatonales y fuimos a Tlaquepaque a comprar artesanías. Un día fuimos a Tequila en tren y probamos el tequila. Lo que más me gustó fue la comida: comimos tortas ahogadas y birria todos los días. Fue un viaje increíble y quiero regresar el año que viene.' }
  ]},
  speaking: { name: 'Expresión e interacción orales', min: 12, prep: 12, tasks: [
    { name: 'Short talk', time: '2–3 min', prompt: 'Choose ONE topic and talk about it. Option 1, Mi trabajo o mis estudios: what you do, where, your schedule, what you like and don\'t like, what you would like to do in the future. Option 2, Mi tiempo libre: your hobbies, when and where you do them, who with, something fun you did recently.',
      model: 'Voy a hablar de mi trabajo. Trabajo en soporte técnico en una empresa en el centro de Chicago. Mi horario es de tres de la tarde a once y media de la noche. Me gusta porque ayudo a la gente y aprendo mucho de computadoras. Lo que no me gusta es que llego muy tarde a casa. En el futuro quiero trabajar en ciberseguridad. Por eso estoy estudiando en la universidad en línea.' },
    { name: 'Describe the photo', time: '2–3 min', scene: ['mercado', ['carmen', 'pepe']], prompt: 'Describe the photo: where the people are, what they look like, what they are wearing, what they are doing, and what you think they are saying. Then say if you like going to markets and why.',
      model: 'En la foto hay dos personas en un mercado. Una señora mayor, con lentes y el pelo gris, está comprando. Lleva una blusa morada. El señor es el vendedor: lleva un delantal blanco. Creo que la señora está pidiendo un kilo de naranjas y el señor le dice el precio. Hay mucha fruta y papel picado de colores. A mí me gustan los mercados porque la fruta es fresca y barata.' },
    { name: 'Conversation at the market', time: '3–4 min', prompt: 'Imagine you are at this market and the examiner is the seller. Answer each question out loud and ask about prices and quantities.',
      questions: ['Buenos días, ¿qué le doy?', '¿Cuánto quiere?', '¿Algo más? Hoy los mangos están muy buenos.', '¿Va a pagar en efectivo o con tarjeta?', '¿Quiere una bolsa?'],
      model: 'Buenos días. Quiero naranjas, por favor. Un kilo y medio. ¿A cómo están los mangos? Bueno, deme medio kilo. Pago en efectivo. No, gracias, traigo mi bolsa.' }
  ]}
};
const EXAMS = { A1: EXAM, A2: EXAM_A2 };
