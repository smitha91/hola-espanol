// A2 lessons, part 2 (units 24–30).
UNITS.push(
{ lv: "A2", t: "El trabajo", en: "Work", lessons: [
  { id: "24-1", t: "¿En qué trabajas?", en: "What do you do?", bg: "calle", cast: ["sofia", "diego"], icon: "laptop",
    words: [
      ["el dependiente / la dependienta", "store clerk", "n.", "Trabajo de dependienta en una tienda.", "I work as a clerk in a store.", "tienda"],
      ["el funcionario / la funcionaria", "civil servant", "n.", "Mi tío es funcionario del gobierno.", "My uncle is a government employee.", ""],
      ["el vendedor / la vendedora", "salesperson, sales rep", "n.", "Es vendedora de seguros.", "She sells insurance.", "", "el comercial"],
      ["el empresario / la empresaria", "businessperson", "n.", "Mi papá es empresario: tiene un negocio.", "My dad is a businessman: he has a business.", ""],
      ["el empleado / la empleada", "employee", "n.", "La empresa tiene cien empleados.", "The company has a hundred employees.", "laptop"],
      ["el negocio", "business", "n.", "Mi tía tiene un negocio de comida.", "My aunt has a food business.", "tienda"],
      ["tener una peluquería", "to own a hair salon", "expr.", "Mi prima tiene una peluquería.", "My cousin owns a hair salon.", ""],
      ["trabajar de niñera", "to work as a babysitter", "expr.", "En la prepa trabajé de niñera.", "In high school I worked as a babysitter.", "", "trabajar de canguro"],
      ["tener un trabajo en un banco", "to have a job at a bank", "expr.", "Tiene un trabajo en un banco.", "She has a job at a bank.", "dinero"],
      ["el agricultor / la agricultora", "farmer", "n.", "Mi abuelo era agricultor.", "My grandfather was a farmer.", ""],
      ["el presidente / la presidenta", "president (of a company or country)", "n.", "La presidenta de la empresa es muy joven.", "The company president is very young.", ""]
    ],
    gram: { t: "Trabajar de / trabajar en", rule: "Trabajar de + job (trabajo de vendedora). Trabajar en + place (trabajo en un banco).",
      ex: [["Trabajo de dependiente.", "I work as a clerk."], ["Trabajo en una fábrica.", "I work at a factory."], ["Trabajó de niñera.", "She worked as a babysitter."]] },
    conv: [
      ["sofia", "Diego, ¿en qué trabajas ahora?", "Diego, what do you do now?"],
      ["diego", "Soy vendedor en una empresa de computadoras.", "I'm a sales rep at a computer company."],
      ["sofia", "¿Te gusta?", "Do you like it?"],
      ["diego", "Sí, pero quiero tener mi propio negocio. ¿Y tú?", "Yes, but I want my own business. And you?"],
      ["sofia", "Yo tengo un trabajo en un banco. Soy empleada desde hace dos años.", "I have a job at a bank. I've been an employee there for two years."]
    ] },
  { id: "24-2", t: "En la oficina", en: "At the office", bg: "casa", cast: ["mateo", "lupita"], icon: "laptop",
    words: [
      ["el despacho", "office (room), study", "n.", "La jefa está en su despacho.", "The boss is in her office.", "laptop"],
      ["la fábrica", "factory", "n.", "Mi papá trabaja en una fábrica de autos.", "My dad works at a car factory.", ""],
      ["la multinacional", "multinational company", "n.", "Trabaja en una multinacional.", "She works at a multinational.", "pin"],
      ["la impresora / la fotocopiadora", "printer / photocopier", "n.", "La impresora no tiene papel.", "The printer is out of paper.", "laptop"],
      ["sacar copias", "to make photocopies", "expr.", "¿Me sacas diez copias?", "Can you make me ten copies?", "", "hacer fotocopias"],
      ["el cliente / la clienta", "client", "n.", "Tengo una reunión con un cliente.", "I have a meeting with a client.", ""],
      ["el producto", "product", "n.", "Vendemos productos naturales.", "We sell natural products.", "bolsa"],
      ["la factura", "invoice", "n.", "Preparo la factura para el cliente.", "I'm preparing the client's invoice.", "dinero"],
      ["contestar el teléfono", "to answer the phone", "expr.", "¿Puedes contestar el teléfono?", "Can you answer the phone?", "telefono", "contestar al teléfono"],
      ["el fax", "fax", "n.", "Antes mandábamos todo por fax.", "We used to send everything by fax.", ""],
      ["tener una reunión", "to have a meeting", "expr.", "Tengo una reunión con el jefe a las once.", "I have a meeting with the boss at eleven.", "reloj:11"],
      ["el maletín / la agenda", "briefcase / planner", "n.", "Mi agenda está en el maletín.", "My planner is in the briefcase.", "calendario"],
      ["la tarjeta de presentación", "business card", "n.", "Le doy mi tarjeta de presentación.", "I'll give you my business card.", "boleto", "la tarjeta de visita"]
    ],
    gram: { t: "Me / te / le with favors", rule: "To ask a favor: ¿Me sacas copias? (Can you make copies for me?) ¿Le mandas la factura? (Can you send him the invoice?)",
      ex: [["¿Me sacas cinco copias?", "Can you make me five copies?"], ["¿Le mandas la factura al cliente?", "Can you send the client the invoice?"], ["Te dejo mi tarjeta.", "I'll leave you my card."]] },
    conv: [
      ["lupita", "Mateo, ¿me sacas copias de la factura?", "Mateo, can you make copies of the invoice for me?"],
      ["mateo", "Claro. ¿Cuántas?", "Sure. How many?"],
      ["lupita", "Tres. Tengo una reunión con un cliente a las once.", "Three. I have a meeting with a client at eleven."],
      ["mateo", "La fotocopiadora no funciona. Uso la impresora.", "The photocopier isn't working. I'll use the printer."],
      ["lupita", "¡Gracias! Y contesta el teléfono, por favor, si llama la jefa.", "Thanks! And answer the phone, please, if the boss calls."]
    ] },
  { id: "24-3", t: "Buscar trabajo", en: "Job hunting", bg: "calle", cast: ["diego", "carmen"], icon: "laptop",
    words: [
      ["la entrevista de trabajo", "job interview", "n.", "Mañana tengo una entrevista de trabajo.", "Tomorrow I have a job interview.", "calendario"],
      ["el currículum", "résumé, CV", "n.", "Mandé mi currículum a cinco empresas.", "I sent my résumé to five companies.", "laptop"],
      ["enviar / mandar", "to send", "v.", "Te mando el currículum por correo.", "I'll send you my résumé by email.", "laptop"],
      ["ganar dinero", "to earn money", "expr.", "Quiero ganar más dinero.", "I want to earn more money.", "dinero"],
      ["estar jubilado / jubilada", "to be retired", "expr.", "Mi abuelo está jubilado.", "My grandfather is retired.", ""],
      ["el traje / la corbata", "suit / tie", "n.", "Para la entrevista me pongo traje y corbata.", "For the interview I wear a suit and tie.", ""],
      ["el uniforme", "uniform", "n.", "Las enfermeras llevan uniforme.", "Nurses wear a uniform.", ""]
    ],
    gram: { t: "Ir a + infinitive", rule: "Plans: voy a, vas a, va a, vamos a, van a + infinitive.",
      ex: [["Voy a mandar mi currículum.", "I'm going to send my résumé."], ["¿Vas a ir a la entrevista?", "Are you going to go to the interview?"], ["Mi papá se va a jubilar.", "My dad is going to retire."]] },
    conv: [
      ["carmen", "¿Cómo va la búsqueda de trabajo, mijo?", "How's the job hunt going, son?"],
      ["diego", "Mandé mi currículum a varias empresas.", "I sent my résumé to several companies."],
      ["carmen", "¿Y ya tienes alguna entrevista?", "And do you have any interviews yet?"],
      ["diego", "Sí, el lunes. Voy a ponerme traje y corbata.", "Yes, on Monday. I'm going to wear a suit and tie."],
      ["carmen", "¡Muy bien! Vas a ganar más dinero que tu papá.", "Very good! You're going to earn more than your dad."]
    ] }
]},
{ lv: "A2", t: "El tiempo libre", en: "Free time", lessons: [
  { id: "25-1", t: "Planes", en: "Plans", bg: "parque", cast: ["lupita", "sofia"], icon: "sol",
    words: [
      ["el tiempo libre", "free time", "n.", "En mi tiempo libre leo y camino.", "In my free time I read and walk.", "sol"],
      ["el pasatiempo / el hobby", "hobby", "n.", "Mi pasatiempo favorito es cocinar.", "My favorite hobby is cooking.", "", "la afición"],
      ["el parque de diversiones", "amusement park", "n.", "Los niños quieren ir al parque de diversiones.", "The kids want to go to the amusement park.", "fiesta", "el parque de atracciones"],
      ["el zoológico", "zoo", "n.", "El zoológico de Chapultepec es gratis.", "The Chapultepec zoo is free.", ""],
      ["ir de paseo", "to go for a walk / outing", "expr.", "Fuimos de paseo al centro.", "We went for a walk downtown.", ""],
      ["ir de excursión", "to go on a day trip", "expr.", "El domingo vamos de excursión a Teotihuacán.", "On Sunday we're going on a trip to Teotihuacán.", "mapa"],
      ["pasear / caminar / andar", "to stroll / to walk", "v.", "Me gusta caminar por el parque.", "I like walking in the park.", ""],
      ["tener planes", "to have plans", "expr.", "¿Tienes planes para el sábado?", "Do you have plans for Saturday?", "calendario"],
      ["salir con amigos", "to go out with friends", "expr.", "Los viernes salgo con amigos.", "On Fridays I go out with friends.", "fiesta"],
      ["quedar", "to arrange to meet", "v.", "¿A qué hora quedamos?", "What time shall we meet?", "reloj:6"]
    ],
    gram: { t: "Preterite: ir and ser", rule: "Ir and ser share the same preterite: fui, fuiste, fue, fuimos, fueron. Context tells you which.",
      ex: [["Fuimos al zoológico.", "We went to the zoo."], ["Fue un día increíble.", "It was an amazing day."], ["¿Adónde fuiste?", "Where did you go?"]] },
    conv: [
      ["sofia", "¿Tienes planes para el domingo?", "Do you have plans for Sunday?"],
      ["lupita", "No. ¿Por qué?", "No. Why?"],
      ["sofia", "Vamos de excursión a Xochimilco con unos amigos.", "We're taking a trip to Xochimilco with some friends."],
      ["lupita", "¡Me encanta! ¿A qué hora quedamos?", "I love it! What time shall we meet?"],
      ["sofia", "A las nueve en el metro.", "At nine at the subway."]
    ] },
  { id: "25-2", t: "Espectáculos", en: "Shows", bg: "plaza", cast: ["mateo", "diego"], icon: "musica",
    words: [
      ["el boleto", "ticket (for a show)", "n.", "Compré los boletos por internet.", "I bought the tickets online.", "boleto", "la entrada"],
      ["la invitación", "invitation", "n.", "Recibí una invitación para la boda.", "I got a wedding invitation.", "fiesta"],
      ["la obra de teatro", "play", "n.", "Vimos una obra de teatro muy divertida.", "We saw a very funny play.", "tele"],
      ["la ópera / el musical", "opera / musical", "n.", "Nunca he ido a la ópera.", "I've never been to the opera.", "musica"],
      ["el concierto de rock", "rock concert", "n.", "El concierto de rock es en el estadio.", "The rock concert is at the stadium.", "musica"],
      ["la música clásica / la música moderna", "classical / modern music", "n.", "Mi abuelo escucha música clásica.", "My grandfather listens to classical music.", "musica"],
      ["el pop / el jazz", "pop / jazz", "n.", "Me gusta el jazz más que el pop.", "I like jazz more than pop.", "musica"],
      ["el tango / el flamenco", "tango / flamenco", "n.", "El tango es de Argentina y el flamenco de España.", "Tango is from Argentina and flamenco from Spain.", "musica"],
      ["la salsa", "salsa (dance music)", "n.", "Tomamos clases de salsa.", "We take salsa classes.", "musica"],
      ["reservar una entrada", "to reserve a ticket", "expr.", "Reservé dos boletos por teléfono.", "I reserved two tickets by phone.", "telefono"]
    ],
    gram: { t: "Pretérito perfecto", rule: "Has it ever happened? haber + participle: he ido, has visto, ha comprado. In Mexico it's used mostly for life experience (¿has ido…?).",
      ex: [["¿Has ido a la ópera?", "Have you ever been to the opera?"], ["Nunca he visto un musical.", "I've never seen a musical."], ["Hemos comprado los boletos.", "We've bought the tickets."]] },
    conv: [
      ["diego", "¿Has ido a un concierto de rock?", "Have you ever been to a rock concert?"],
      ["mateo", "Muchas veces. ¡Me encantan!", "Lots of times. I love them!"],
      ["diego", "Tengo dos boletos para el sábado.", "I have two tickets for Saturday."],
      ["mateo", "¿En serio? ¿Quién toca?", "Really? Who's playing?"],
      ["diego", "Café Tacvba. Te invito.", "Café Tacvba. My treat."]
    ] },
  { id: "25-3", t: "Deportes y juegos", en: "Sports and games", bg: "parque", cast: ["mateo", "sofia"], icon: "balon",
    words: [
      ["el gimnasio", "gym", "n.", "Voy al gimnasio tres veces a la semana.", "I go to the gym three times a week.", ""],
      ["la alberca", "swimming pool", "n.", "El hotel tiene alberca.", "The hotel has a pool.", "agua", "la piscina"],
      ["practicar un deporte", "to play a sport", "expr.", "¿Practicas algún deporte?", "Do you play any sports?", "balon"],
      ["hacer ejercicio / gimnasia", "to exercise / to do gymnastics", "expr.", "Hago ejercicio en la mañana.", "I exercise in the morning.", ""],
      ["correr", "to run", "v.", "Corro en el parque los domingos.", "I run in the park on Sundays.", ""],
      ["andar en bicicleta", "to ride a bike", "expr.", "Los domingos andamos en bicicleta por Reforma.", "On Sundays we ride bikes on Reforma.", "", "montar en bicicleta"],
      ["el ciclista / la ciclista", "cyclist", "n.", "Hay muchos ciclistas en la ciudad.", "There are lots of cyclists in the city.", ""],
      ["hacer senderismo", "to go hiking", "expr.", "Hicimos senderismo en el Ajusco.", "We went hiking on the Ajusco.", ""],
      ["jugar a las cartas", "to play cards", "expr.", "Mis abuelos juegan a las cartas.", "My grandparents play cards.", ""],
      ["el ajedrez / el parchís / la oca", "chess / ludo / snakes-and-ladders-type game", "n.", "¿Sabes jugar ajedrez?", "Do you know how to play chess?", ""]
    ],
    gram: { t: "Preterite: hacer", rule: "Hacer is irregular: hice, hiciste, hizo, hicimos, hicieron.",
      ex: [["Hice ejercicio ayer.", "I exercised yesterday."], ["¿Qué hiciste el fin de semana?", "What did you do over the weekend?"], ["Hicimos senderismo.", "We went hiking."]] },
    conv: [
      ["sofia", "¿Qué hiciste el fin de semana?", "What did you do over the weekend?"],
      ["mateo", "Hice senderismo con mi hermano. ¿Y tú?", "I went hiking with my brother. And you?"],
      ["sofia", "Fui al gimnasio y luego a la alberca.", "I went to the gym and then to the pool."],
      ["mateo", "En la noche jugamos ajedrez con mi abuelo.", "At night we played chess with my grandfather."],
      ["sofia", "¿Quién ganó?", "Who won?"],
      ["mateo", "¡Él, como siempre!", "He did, as always!"]
    ] },
  { id: "25-4", t: "Arte y literatura", en: "Art and literature", bg: "plaza", cast: ["carmen", "lupita"], icon: "foto",
    words: [
      ["el arte / el artista", "art / artist", "n.", "Frida Kahlo es una artista muy famosa.", "Frida Kahlo is a very famous artist.", "foto"],
      ["el cuadro / pintar", "painting / to paint", "n.", "Este cuadro lo pintó Diego Rivera.", "Diego Rivera painted this painting.", "foto"],
      ["el pintor / la pintora", "painter", "n.", "Rufino Tamayo fue un pintor de Oaxaca.", "Rufino Tamayo was a painter from Oaxaca.", "foto"],
      ["la estatua / el monumento", "statue / monument", "n.", "El Ángel es un monumento con una estatua.", "The Angel is a monument with a statue.", ""],
      ["el palacio / el castillo", "palace / castle", "n.", "El Castillo de Chapultepec es un museo.", "Chapultepec Castle is a museum.", ""],
      ["el arquitecto / la arquitecta", "architect", "n.", "El arquitecto diseñó el museo.", "The architect designed the museum.", "casa"],
      ["la literatura", "literature", "n.", "Estudio literatura mexicana.", "I study Mexican literature.", "libro"],
      ["la novela / el cuento", "novel / short story", "n.", "Juan Rulfo escribió novelas y cuentos.", "Juan Rulfo wrote novels and short stories.", "libro"],
      ["la poesía", "poetry", "n.", "Me gusta la poesía de Octavio Paz.", "I like Octavio Paz's poetry.", "libro"],
      ["el escritor / la escritora", "writer", "n.", "Elena Poniatowska es escritora.", "Elena Poniatowska is a writer.", "libro"],
      ["la fotografía / el fotógrafo", "photography / photographer", "n.", "Mi hermano es fotógrafo.", "My brother is a photographer.", "foto"],
      ["la cámara de fotos", "camera", "n.", "Olvidé la cámara de fotos.", "I forgot the camera.", "foto"],
      ["tomar fotos", "to take photos", "expr.", "¿Se pueden tomar fotos en el museo?", "Can you take photos in the museum?", "foto", "hacer fotos"],
      ["ver una exposición", "to see an exhibition", "expr.", "Vimos una exposición de fotografía.", "We saw a photography exhibition.", "foto"],
      ["el director / la directora", "director (film)", "n.", "Guillermo del Toro es un director mexicano.", "Guillermo del Toro is a Mexican director.", "tele"]
    ],
    gram: { t: "Preterite with known people", rule: "Use the preterite to say what someone did in the past: pintó, escribió, diseñó.",
      ex: [["Frida pintó muchos autorretratos.", "Frida painted many self-portraits."], ["Rulfo escribió Pedro Páramo.", "Rulfo wrote Pedro Páramo."], ["¿Quién diseñó este edificio?", "Who designed this building?"]] },
    conv: [
      ["lupita", "¿Vamos a ver la exposición de Frida?", "Shall we go see the Frida exhibition?"],
      ["carmen", "¡Sí! Me encantan sus cuadros.", "Yes! I love her paintings."],
      ["lupita", "¿Se pueden tomar fotos?", "Can you take photos?"],
      ["carmen", "Sí, pero sin flash.", "Yes, but no flash."],
      ["lupita", "Después vamos a la librería. Quiero una novela de Rulfo.", "Afterwards let's go to the bookstore. I want a Rulfo novel."]
    ] },
  { id: "25-5", t: "La música", en: "Music", bg: "plaza", cast: ["diego", "mateo"], icon: "musica",
    words: [
      ["el músico / la música", "musician", "n.", "Mi primo es músico de mariachi.", "My cousin is a mariachi musician.", "musica"],
      ["la canción", "song", "n.", "Esta canción me recuerda a mi abuela.", "This song reminds me of my grandmother.", "musica"],
      ["tocar", "to play (an instrument)", "v.", "¿Tocas algún instrumento?", "Do you play an instrument?", "musica"],
      ["la guitarra", "guitar", "n.", "Toco la guitarra.", "I play the guitar.", "musica"],
      ["el piano / el violín", "piano / violin", "n.", "El mariachi tiene violines y trompetas.", "Mariachi has violins and trumpets.", "musica"]
    ],
    gram: { t: "Tocar vs jugar", rule: "Tocar is for instruments (toco la guitarra). Jugar is for games and sports (juego futbol).",
      ex: [["Toco el piano.", "I play the piano."], ["Juego tenis.", "I play tennis."], ["¿Tocas la guitarra?", "Do you play the guitar?"]] },
    conv: [
      ["mateo", "¿Tocas algún instrumento?", "Do you play an instrument?"],
      ["diego", "Sí, toco la guitarra. Mi papá era músico.", "Yes, I play the guitar. My dad was a musician."],
      ["mateo", "¡Qué padre! ¿Me tocas una canción?", "How cool! Will you play me a song?"],
      ["diego", "Claro. ¿Te gusta Juan Gabriel?", "Sure. Do you like Juan Gabriel?"]
    ] }
]},
{ lv: "A2", t: "La comunicación", en: "Communication", lessons: [
  { id: "26-1", t: "Por teléfono", en: "On the phone", bg: "casa", cast: ["sofia", "carmen"], icon: "telefono",
    words: [
      ["llamar por teléfono", "to phone", "expr.", "Llamé por teléfono a mi mamá.", "I called my mom on the phone.", "telefono"],
      ["la llamada", "call", "n.", "Tienes tres llamadas perdidas.", "You have three missed calls.", "telefono"],
      ["dejar un mensaje", "to leave a message", "expr.", "¿Quiere dejar un mensaje?", "Would you like to leave a message?", "telefono"],
      ["recibir / responder", "to receive / to reply", "v.", "Recibí tu mensaje pero no respondí.", "I got your message but didn't reply.", "telefono"],
      ["la lada", "area code", "n.", "La lada de Ciudad de México es 55.", "Mexico City's area code is 55.", "telefono", "el prefijo"],
      ["la extensión", "extension", "n.", "Llame al número de la oficina, extensión 204.", "Call the office number, extension 204.", "telefono"],
      ["la tarjeta telefónica", "phone card", "n.", "Antes comprábamos tarjetas telefónicas.", "We used to buy phone cards.", "boleto"],
      ["la caseta telefónica", "phone booth", "n.", "Ya casi no hay casetas telefónicas.", "There are hardly any phone booths left.", "telefono", "la cabina"]
    ],
    gram: { t: "Imperfect for 'used to'", rule: "Habits in the past: -ar → -aba (llamaba), -er/-ir → -ía (tenía, recibía).",
      ex: [["Antes llamaba desde una caseta.", "I used to call from a phone booth."], ["No teníamos celular.", "We didn't have cell phones."], ["Comprábamos tarjetas telefónicas.", "We used to buy phone cards."]] },
    conv: [
      ["carmen", "Bueno, oficina de la doctora Ruiz.", "Hello, Dr. Ruiz's office."],
      ["sofia", "Buenos días. ¿Me comunica con la extensión 204?", "Good morning. Can you put me through to extension 204?"],
      ["carmen", "La doctora no está. ¿Quiere dejar un mensaje?", "The doctor isn't in. Would you like to leave a message?"],
      ["sofia", "Sí, que me llame, por favor. Mi número es lada 312…", "Yes, please have her call me. My number is area code 312…"],
      ["carmen", "Muy bien, yo le doy su mensaje.", "Very good, I'll give her your message."]
    ] },
  { id: "26-2", t: "Correo e internet", en: "Mail and internet", bg: "casa", cast: ["mateo", "lupita"], icon: "laptop",
    words: [
      ["la oficina de correos", "post office", "n.", "Voy a la oficina de correos a mandar un paquete.", "I'm going to the post office to send a package.", "casa", "Correos"],
      ["la nota", "note", "n.", "Te dejé una nota en el refrigerador.", "I left you a note on the fridge.", ""],
      ["la dirección electrónica", "email address", "n.", "¿Me das tu dirección electrónica?", "Can you give me your email address?", "laptop"],
      ["la dirección de internet", "web address", "n.", "La dirección de internet está en el folleto.", "The web address is in the brochure.", "laptop"],
      ["navegar por internet", "to browse the internet", "expr.", "Navego por internet en el celular.", "I browse the internet on my phone.", "telefono"],
      ["el correo electrónico", "email message", "n.", "Te mandé un correo electrónico.", "I sent you an email.", "laptop", "el mensaje electrónico"],
      ["el foro / el chat", "forum / chat", "n.", "Pregunté en un foro de viajeros.", "I asked on a travelers' forum.", "laptop"],
      ["chatear", "to chat (online)", "v.", "Chateo con mi novio todo el día.", "I chat with my boyfriend all day.", "telefono"],
      ["el virus", "virus (computer)", "n.", "Mi computadora tiene un virus.", "My computer has a virus.", "laptop"],
      ["la laptop", "laptop", "n.", "Trabajo con mi laptop en el café.", "I work on my laptop at the café.", "laptop", "el (ordenador) portátil"],
      ["la PC", "PC", "n.", "En la oficina uso una PC.", "At the office I use a PC.", "laptop", "el PC"],
      ["el CD-ROM / el DVD", "CD-ROM / DVD", "n.", "El programa venía en un CD-ROM.", "The program came on a CD-ROM.", "tele"],
      ["el programa", "program (software)", "n.", "Instalé un programa nuevo.", "I installed a new program.", "laptop"],
      ["el informático / la informática", "IT professional", "n.", "Mi hermano es informático.", "My brother works in IT.", "laptop"]
    ],
    gram: { t: "Mandar / enviar + le", rule: "Te mando un correo, le envío el archivo. Mandar is more common in everyday Mexican speech.",
      ex: [["Te mando la foto.", "I'll send you the photo."], ["Le envié un correo al jefe.", "I sent the boss an email."], ["¿Me mandas tu dirección?", "Will you send me your address?"]] },
    conv: [
      ["lupita", "Mateo, mi laptop no funciona.", "Mateo, my laptop isn't working."],
      ["mateo", "¿Qué hiciste?", "What did you do?"],
      ["lupita", "Nada. Abrí un correo electrónico y ya.", "Nothing. I just opened an email."],
      ["mateo", "Creo que tiene un virus. Mi hermano es informático, le mando un mensaje.", "I think it has a virus. My brother works in IT, I'll message him."],
      ["lupita", "¡Gracias! Te dejo una nota con mi contraseña.", "Thanks! I'll leave you a note with my password."]
    ] },
  { id: "26-3", t: "Los medios", en: "The media", bg: "casa", cast: ["diego", "sofia"], icon: "tele",
    words: [
      ["la entrevista", "interview", "n.", "Vi una entrevista con el presidente.", "I saw an interview with the president.", "tele"],
      ["el periodista / la periodista", "journalist", "n.", "Carmen Aristegui es periodista.", "Carmen Aristegui is a journalist.", "libro"],
      ["el programa de televisión", "TV show", "n.", "Es mi programa de televisión favorito.", "It's my favorite TV show.", "tele"],
      ["el programa de radio", "radio show", "n.", "Escucho un programa de radio en el coche.", "I listen to a radio show in the car.", "musica"],
      ["el anuncio / la publicidad", "ad, commercial / advertising", "n.", "Hay muchos anuncios en la tele.", "There are lots of ads on TV.", "tele"],
      ["el conductor / la conductora", "TV/radio host", "n.", "El conductor del programa es muy chistoso.", "The show's host is very funny.", "tele", "el presentador"]
    ],
    conv: [
      ["sofia", "¿Viste el programa de anoche?", "Did you see the show last night?"],
      ["diego", "Sí, hubo una entrevista con una periodista.", "Yes, there was an interview with a journalist."],
      ["sofia", "La conductora me cae muy bien.", "I really like the host."],
      ["diego", "Sí, pero hay demasiados anuncios.", "Yes, but there are too many commercials."]
    ] }
]},
{ lv: "A2", t: "De viaje", en: "Traveling", lessons: [
  { id: "27-1", t: "Preparar el viaje", en: "Getting ready to travel", bg: "casa", cast: ["lupita", "mateo"], icon: "boleto",
    words: [
      ["ir de viaje / ir de vacaciones", "to go on a trip / on vacation", "expr.", "En diciembre vamos de vacaciones a Cancún.", "In December we're going on vacation to Cancún.", "sol"],
      ["el viaje corto / el viaje largo", "short / long trip", "n.", "Es un viaje largo, doce horas en camión.", "It's a long trip, twelve hours by bus.", "camion"],
      ["el vuelo", "flight", "n.", "El vuelo sale a las seis.", "The flight leaves at six.", ""],
      ["la excursión", "day trip, tour", "n.", "Hicimos una excursión a las pirámides.", "We took a tour to the pyramids.", "mapa"],
      ["reservar un boleto de avión", "to book a plane ticket", "expr.", "Reservé un boleto de avión a Oaxaca.", "I booked a plane ticket to Oaxaca.", "boleto", "reservar un billete de avión"],
      ["el seguro de viaje", "travel insurance", "n.", "¿Tienes seguro de viaje?", "Do you have travel insurance?", "boleto"],
      ["hacer la maleta", "to pack", "expr.", "Todavía no hago la maleta.", "I haven't packed yet.", "", "hacer las maletas"],
      ["deshacer la maleta", "to unpack", "expr.", "Llegué y deshice la maleta.", "I arrived and unpacked.", "", "deshacer las maletas"],
      ["la mochila", "backpack", "n.", "Solo llevo una mochila.", "I'm only taking a backpack.", "bolsa"],
      ["consultar el mapa / el plano", "to check the map / city map", "expr.", "Consulta el plano de la ciudad.", "Check the city map.", "mapa"],
      ["el guía turístico / la guía turística", "tour guide", "n.", "El guía turístico habla inglés.", "The tour guide speaks English.", "pin"]
    ],
    gram: { t: "Ya / todavía no", rule: "Ya = already, todavía no = not yet. In Mexico, use them with the preterite: ¿Ya hiciste la maleta? Todavía no.",
      ex: [["¿Ya reservaste el vuelo?", "Did you book the flight yet?"], ["Todavía no hago la maleta.", "I haven't packed yet."], ["Ya compré el seguro.", "I already bought the insurance."]] },
    conv: [
      ["mateo", "¿Ya hiciste la maleta?", "Did you pack yet?"],
      ["lupita", "Todavía no. El vuelo es mañana a las seis.", "Not yet. The flight is tomorrow at six."],
      ["mateo", "¿Compraste el seguro de viaje?", "Did you buy travel insurance?"],
      ["lupita", "Sí, ya lo compré. Y reservé una excursión con guía.", "Yes, I already bought it. And I booked a guided tour."],
      ["mateo", "¡Qué envidia! ¡Buen viaje!", "So jealous! Have a good trip!"]
    ] },
  { id: "27-2", t: "Playa y montaña", en: "Beach and mountains", bg: "parque", cast: ["sofia", "diego"], icon: "sol",
    words: [
      ["bañarse en el mar", "to swim in the sea", "expr.", "Nos bañamos en el mar todo el día.", "We swam in the sea all day.", "sol"],
      ["el traje de baño", "swimsuit", "n.", "No olvides el traje de baño.", "Don't forget your swimsuit.", "sol", "el bañador"],
      ["los lentes de sol", "sunglasses", "n.", "Necesito lentes de sol.", "I need sunglasses.", "sol", "las gafas de sol"],
      ["la toalla / la gorra", "towel / cap", "n.", "Lleva toalla y gorra a la playa.", "Take a towel and a cap to the beach.", "sol"],
      ["el abrigo", "coat", "n.", "En la montaña hace frío. Lleva abrigo.", "It's cold in the mountains. Take a coat.", "nieve"],
      ["el gorro", "knit cap, beanie", "n.", "Me puse gorro y guantes.", "I put on a beanie and gloves.", "nieve"],
      ["las botas de montaña", "hiking boots", "n.", "Compré botas de montaña para el viaje.", "I bought hiking boots for the trip.", ""]
    ],
    conv: [
      ["sofia", "¿Playa o montaña para las vacaciones?", "Beach or mountains for vacation?"],
      ["diego", "Playa. Quiero bañarme en el mar.", "Beach. I want to swim in the sea."],
      ["sofia", "Yo prefiero la montaña.", "I prefer the mountains."],
      ["diego", "¿Con abrigo, gorro y botas? ¡No, gracias!", "With a coat, a beanie and boots? No thanks!"],
      ["sofia", "Bueno, la playa. Pero llevo mis lentes de sol.", "Fine, the beach. But I'm bringing my sunglasses."]
    ] },
  { id: "27-3", t: "En el hotel", en: "At the hotel", bg: "casa", cast: ["pepe", "lupita"], icon: "cama",
    words: [
      ["reservar", "to book, to reserve", "v.", "Reservé un cuarto con vista al mar.", "I booked a room with an ocean view.", "telefono"],
      ["hacer una reservación", "to make a reservation", "expr.", "Quiero hacer una reservación para tres noches.", "I want to make a reservation for three nights.", "calendario", "hacer una reserva"],
      ["la pensión completa", "full board (all meals)", "n.", "Con pensión completa, la comida está incluida.", "With full board, meals are included.", "olla"],
      ["la media pensión", "half board (breakfast and dinner)", "n.", "Preferimos media pensión.", "We prefer half board.", "olla"],
      ["alojamiento y desayuno", "bed and breakfast", "expr.", "El precio es de alojamiento y desayuno.", "The price is for bed and breakfast.", "cafe"],
      ["quedarse", "to stay", "v.", "Nos quedamos cuatro noches.", "We're staying four nights.", "cama"]
    ],
    gram: { t: "Quisiera", rule: "Quisiera (I would like) is a polite way to ask: quisiera reservar un cuarto.",
      ex: [["Quisiera hacer una reservación.", "I'd like to make a reservation."], ["Quisiera un cuarto doble.", "I'd like a double room."], ["Quisiéramos media pensión.", "We'd like half board."]] },
    conv: [
      ["pepe", "Hotel Mar Azul, buenas tardes.", "Hotel Mar Azul, good afternoon."],
      ["lupita", "Quisiera hacer una reservación para tres noches.", "I'd like to make a reservation for three nights."],
      ["pepe", "¿Con alojamiento y desayuno o pensión completa?", "Bed and breakfast or full board?"],
      ["lupita", "Media pensión, por favor.", "Half board, please."],
      ["pepe", "Perfecto. ¿Cuántas personas se quedan?", "Perfect. How many people are staying?"],
      ["lupita", "Dos adultos.", "Two adults."]
    ] },
  { id: "27-4", t: "Transporte", en: "Getting around", bg: "calle", cast: ["diego", "mateo"], icon: "taxi",
    words: [
      ["el transporte", "transportation", "n.", "El transporte público es barato.", "Public transportation is cheap.", "camion"],
      ["la carretera", "highway, road", "n.", "La carretera a Cuernavaca tiene mucho tráfico.", "The highway to Cuernavaca has a lot of traffic.", ""],
      ["la entrada del metro", "subway entrance", "n.", "Nos vemos en la entrada del metro.", "See you at the subway entrance.", "metro", "la boca de metro"],
      ["el mapa del metro", "subway map", "n.", "Mira el mapa del metro.", "Look at the subway map.", "metro", "el plano de metro"],
      ["tomar un taxi", "to take a taxi", "expr.", "Es tarde. Mejor tomamos un taxi.", "It's late. Better take a taxi.", "taxi", "coger un taxi"],
      ["la moto", "motorcycle", "n.", "Mi hermano va al trabajo en moto.", "My brother goes to work by motorcycle.", ""],
      ["el piloto / la aeromoza", "pilot / flight attendant", "n.", "La aeromoza nos dio agua.", "The flight attendant gave us water.", "", "la azafata"],
      ["la llanta", "tire", "n.", "Se ponchó una llanta.", "We got a flat tire.", "taxi", "la rueda"],
      ["el mecánico", "mechanic", "n.", "Llevé el carro al mecánico.", "I took the car to the mechanic.", "taxi"],
      ["lavar el carro", "to wash the car", "expr.", "Los domingos lavo el carro.", "On Sundays I wash the car.", "taxi", "lavar el coche"],
      ["kilómetros por hora", "kilometers per hour", "expr.", "En la ciudad, máximo cincuenta kilómetros por hora.", "In the city, fifty kilometers per hour max.", ""]
    ],
    gram: { t: "Preterite: tener, poder, estar", rule: "Irregular stems: tuve, pude, estuve + -e, -iste, -o, -imos, -ieron.",
      ex: [["Tuvimos que tomar un taxi.", "We had to take a taxi."], ["No pude llegar.", "I couldn't make it."], ["Estuve dos horas en la carretera.", "I was on the road for two hours."]] },
    conv: [
      ["mateo", "¿Por qué llegaste tarde?", "Why were you late?"],
      ["diego", "Se ponchó una llanta en la carretera.", "I got a flat tire on the highway."],
      ["mateo", "¡No manches! ¿Y qué hiciste?", "No way! What did you do?"],
      ["diego", "Llamé al mecánico y tuve que tomar un taxi.", "I called the mechanic and had to take a taxi."]
    ] },
  { id: "27-5", t: "¿Dónde está?", en: "Where is it?", bg: "calle", cast: ["sofia", "carmen"], icon: "mapa",
    words: [
      ["dentro / afuera", "inside / outside", "adv.", "Te espero afuera.", "I'll wait for you outside.", "", "dentro / fuera"],
      ["debajo / encima", "underneath / on top", "adv.", "Las llaves están debajo del libro.", "The keys are under the book.", ""],
      ["delante / detrás", "in front / behind", "adv.", "El estacionamiento está detrás del edificio.", "The parking lot is behind the building.", ""],
      ["enfrente", "across, opposite", "adv.", "La farmacia está enfrente del banco.", "The pharmacy is across from the bank.", "farmacia"],
      ["alrededor", "around", "adv.", "Hay árboles alrededor de la plaza.", "There are trees around the square.", ""],
      ["la esquina", "corner", "n.", "Nos vemos en la esquina.", "See you on the corner.", "pin"],
      ["cruzar", "to cross", "v.", "Cruza la calle con cuidado.", "Cross the street carefully.", ""],
      ["dar vuelta", "to turn", "expr.", "Da vuelta a la izquierda en el semáforo.", "Turn left at the traffic light.", "mapa", "girar"],
      ["seguir", "to keep going, to follow", "v.", "Siga derecho dos cuadras.", "Keep going straight two blocks.", "mapa"],
      ["pasar por", "to go past / through", "expr.", "El camión pasa por el centro.", "The bus goes through downtown.", "camion"],
      ["la distancia / desde… hasta", "distance / from… to", "n.", "Desde mi casa hasta el trabajo hay diez kilómetros.", "From my house to work it's ten kilometers.", "mapa"]
    ],
    gram: { t: "De after place words", rule: "Before a noun, add de: enfrente del banco, detrás de la iglesia, alrededor de la plaza (de + el = del).",
      ex: [["Está enfrente del banco.", "It's across from the bank."], ["Detrás de la iglesia.", "Behind the church."], ["Encima de la mesa.", "On top of the table."]] },
    conv: [
      ["sofia", "Disculpe, ¿dónde está la oficina de correos?", "Excuse me, where's the post office?"],
      ["carmen", "Siga derecho y dé vuelta en la segunda esquina.", "Keep going straight and turn at the second corner."],
      ["sofia", "¿A la derecha?", "To the right?"],
      ["carmen", "A la izquierda. Está enfrente del parque, detrás de la iglesia.", "To the left. It's across from the park, behind the church."],
      ["sofia", "¿Tengo que cruzar la avenida?", "Do I have to cross the avenue?"],
      ["carmen", "Sí, pero hay semáforo.", "Yes, but there's a traffic light."]
    ] }
]},
{ lv: "A2", t: "La ciudad y el mundo", en: "City and world", lessons: [
  { id: "28-1", t: "Mi ciudad", en: "My city", bg: "plaza", cast: ["mateo", "sofia"], icon: "pin",
    words: [
      ["el habitante", "inhabitant", "n.", "Ciudad de México tiene más de nueve millones de habitantes.", "Mexico City has more than nine million inhabitants.", ""],
      ["la colonia", "neighborhood", "n.", "Vivo en la colonia Roma.", "I live in the Roma neighborhood.", "casa", "el barrio"],
      ["el zócalo", "main square", "n.", "El zócalo está lleno de gente.", "The main square is full of people.", "", "la plaza mayor"],
      ["la catedral", "cathedral", "n.", "La catedral está en el zócalo.", "The cathedral is on the main square.", ""],
      ["la calle peatonal", "pedestrian street", "n.", "Madero es una calle peatonal.", "Madero is a pedestrian street.", ""],
      ["la calle comercial", "shopping street", "n.", "Es la calle comercial más famosa.", "It's the most famous shopping street.", "tienda"],
      ["la ciudad moderna / la ciudad antigua", "modern / old city", "n.", "Guanajuato es una ciudad antigua.", "Guanajuato is an old city.", ""],
      ["la ciudad universitaria / la ciudad industrial", "university town / industrial city", "n.", "Monterrey es una ciudad industrial.", "Monterrey is an industrial city.", ""],
      ["cosmopolita", "cosmopolitan", "adj.", "Chicago es una ciudad muy cosmopolita.", "Chicago is a very cosmopolitan city.", ""],
      ["la presidencia municipal", "city hall", "n.", "La presidencia municipal está frente a la plaza.", "City hall is in front of the square.", "", "el ayuntamiento"],
      ["la estación de policía", "police station", "n.", "Fuimos a la estación de policía a reportar el robo.", "We went to the police station to report the theft.", "", "la comisaría"],
      ["la policía / los bomberos", "police / firefighters", "n.", "Llama a los bomberos.", "Call the firefighters.", ""]
    ],
    gram: { t: "Superlatives", rule: "el/la más + adjective (+ de): la calle más famosa de la ciudad.",
      ex: [["Es la plaza más grande de México.", "It's the biggest square in Mexico."], ["Es el barrio más bonito.", "It's the prettiest neighborhood."], ["Es la ciudad más cosmopolita del país.", "It's the most cosmopolitan city in the country."]] },
    conv: [
      ["sofia", "¿Cómo es tu colonia?", "What's your neighborhood like?"],
      ["mateo", "Es antigua, con calles peatonales y muchos cafés.", "It's old, with pedestrian streets and lots of cafés."],
      ["sofia", "¿Está cerca del zócalo?", "Is it near the main square?"],
      ["mateo", "Sí, a diez minutos. La catedral es impresionante.", "Yes, ten minutes away. The cathedral is impressive."],
      ["sofia", "Es la parte más bonita de la ciudad.", "It's the prettiest part of the city."]
    ] },
  { id: "28-2", t: "Geografía", en: "Geography", bg: "parque", cast: ["diego", "lupita"], icon: "mapa",
    words: [
      ["la región", "region", "n.", "La región de Oaxaca tiene muchas culturas.", "The Oaxaca region has many cultures.", "mapa"],
      ["el noroeste / el noreste", "northwest / northeast", "n.", "Monterrey está en el noreste de México.", "Monterrey is in northeastern Mexico.", "mapa", "el noroeste / el nordeste"],
      ["el suroeste / el sureste", "southwest / southeast", "n.", "Yucatán está en el sureste.", "Yucatán is in the southeast.", "mapa", "el suroeste / el sudeste"],
      ["la isla", "island", "n.", "Cozumel es una isla.", "Cozumel is an island.", "sol"],
      ["el desierto", "desert", "n.", "En el norte hay desiertos.", "In the north there are deserts.", "sol"],
      ["el bosque", "forest", "n.", "Caminamos por el bosque.", "We walked through the forest.", ""],
      ["la costa / el interior", "coast / inland", "n.", "Vivo en el interior, lejos de la costa.", "I live inland, far from the coast.", "mapa"],
      ["la naturaleza", "nature", "n.", "Me encanta estar en la naturaleza.", "I love being in nature.", ""],
      ["el jardín", "garden, yard", "n.", "Mi abuela tiene un jardín con flores.", "My grandmother has a garden with flowers.", ""]
    ],
    conv: [
      ["lupita", "¿De qué región de México es tu familia?", "What region of Mexico is your family from?"],
      ["diego", "Del noroeste, de Sonora. Hay mucho desierto.", "From the northwest, Sonora. There's a lot of desert."],
      ["lupita", "¿Está en la costa?", "Is it on the coast?"],
      ["diego", "Una parte sí. ¿Y la tuya?", "Part of it is. And yours?"],
      ["lupita", "Del sureste, de Chiapas. Hay bosques y mucha naturaleza.", "From the southeast, Chiapas. There are forests and lots of nature."]
    ] },
  { id: "28-3", t: "El cielo y el clima", en: "Sky and weather", bg: "parque", cast: ["mateo", "carmen"], icon: "nube",
    words: [
      ["el mundo", "world", "n.", "Quiero viajar por todo el mundo.", "I want to travel all over the world.", "mapa"],
      ["el cielo", "sky", "n.", "El cielo está muy azul hoy.", "The sky is very blue today.", "sol"],
      ["la luna / la estrella", "moon / star", "n.", "Esta noche se ven muchas estrellas.", "Tonight you can see lots of stars.", "luna"],
      ["el planeta", "planet", "n.", "Hay que cuidar el planeta.", "We have to take care of the planet.", ""],
      ["la lluvia / la nieve", "rain / snow", "n.", "En Chicago hay mucha nieve en invierno.", "In Chicago there's a lot of snow in winter.", "nieve"],
      ["la niebla", "fog", "n.", "Hay niebla en la carretera.", "There's fog on the highway.", "nube"],
      ["la tormenta", "storm", "n.", "Anoche hubo una tormenta.", "Last night there was a storm.", "lluvia"],
      ["la nube", "cloud", "n.", "No hay ni una nube.", "There isn't a single cloud.", "nube"],
      ["el aire", "air", "n.", "En el campo el aire es limpio.", "In the countryside the air is clean.", ""],
      ["el viento del norte", "north wind", "n.", "Viene el viento del norte, va a hacer frío.", "The north wind is coming, it's going to be cold.", "nube"]
    ],
    gram: { t: "Hubo / había", rule: "Hubo = there was (a single event). Había = there was/there used to be (background or description).",
      ex: [["Anoche hubo una tormenta.", "Last night there was a storm."], ["Había mucha niebla.", "There was a lot of fog."], ["Antes había más estrellas.", "There used to be more stars."]] },
    conv: [
      ["carmen", "¿Viste la tormenta de anoche?", "Did you see last night's storm?"],
      ["mateo", "Sí, hubo mucha lluvia y viento.", "Yes, there was lots of rain and wind."],
      ["carmen", "Y esta mañana había niebla.", "And this morning there was fog."],
      ["mateo", "Pero ahora el cielo está azul, sin nubes.", "But now the sky is blue, no clouds."]
    ] },
  { id: "28-4", t: "Animales y plantas", en: "Animals and plants", bg: "parque", cast: ["lupita", "sofia"], icon: "corazon",
    words: [
      ["el perro / el gato", "dog / cat", "n.", "Tengo un perro y dos gatos.", "I have a dog and two cats.", ""],
      ["el pájaro", "bird", "n.", "Los pájaros cantan en la mañana.", "Birds sing in the morning.", ""],
      ["el pez", "fish (alive)", "n.", "Mi hijo tiene un pez.", "My son has a fish.", ""],
      ["el caballo", "horse", "n.", "En el rancho hay caballos.", "There are horses on the ranch.", ""],
      ["la vaca / el cerdo", "cow / pig", "n.", "Mi abuelo tenía vacas y cerdos.", "My grandfather had cows and pigs.", ""],
      ["la mosca / el mosquito", "fly / mosquito", "n.", "Hay muchos mosquitos en el verano.", "There are lots of mosquitoes in summer.", ""],
      ["la araña", "spider", "n.", "¡Hay una araña en el baño!", "There's a spider in the bathroom!", ""],
      ["la rosa / la margarita", "rose / daisy", "n.", "Le regalé rosas a mi mamá.", "I gave my mom roses.", "corazon"],
      ["el pino / el olivo", "pine / olive tree", "n.", "En Navidad ponemos un pino.", "At Christmas we put up a pine tree.", ""],
      ["el ramo de flores", "bouquet of flowers", "n.", "Le compré un ramo de flores.", "I bought her a bouquet of flowers.", "corazon"]
    ],
    gram: { t: "Imperfect for descriptions", rule: "Describe how things were: había, tenía, era, vivía.",
      ex: [["Mi abuelo tenía caballos.", "My grandfather had horses."], ["La casa era grande.", "The house was big."], ["Había muchos pájaros.", "There were lots of birds."]] },
    conv: [
      ["sofia", "¿Tenías animales de niña?", "Did you have animals as a girl?"],
      ["lupita", "Sí, vivíamos en un rancho. Teníamos vacas y caballos.", "Yes, we lived on a ranch. We had cows and horses."],
      ["sofia", "¡Qué bonito! ¿Y perro?", "How nice! And a dog?"],
      ["lupita", "Tres perros. Y muchos mosquitos, ¡ja, ja!", "Three dogs. And lots of mosquitoes, ha ha!"]
    ] },
  { id: "28-5", t: "La sociedad", en: "Society", bg: "plaza", cast: ["diego", "carmen"], icon: "pin",
    words: [
      ["el gobierno", "government", "n.", "El gobierno anunció nuevas medidas.", "The government announced new measures.", ""],
      ["la política", "politics", "n.", "En mi familia no hablamos de política.", "In my family we don't talk about politics.", ""],
      ["el partido político", "political party", "n.", "Hay varios partidos políticos en México.", "There are several political parties in Mexico.", ""],
      ["el primer ministro", "prime minister", "n.", "Canadá tiene primer ministro.", "Canada has a prime minister.", ""],
      ["el secretario / la secretaria", "cabinet secretary, minister", "n.", "La secretaria de Educación habló hoy.", "The Secretary of Education spoke today.", "", "el ministro"],
      ["el príncipe / la princesa", "prince / princess", "n.", "España tiene una princesa.", "Spain has a princess.", ""],
      ["el juez / la jueza", "judge", "n.", "La jueza tomó una decisión.", "The judge made a decision.", ""],
      ["el ejército", "army", "n.", "Mi primo está en el ejército.", "My cousin is in the army.", ""],
      ["la guerra / la paz", "war / peace", "n.", "Todos queremos la paz.", "We all want peace.", "corazon"],
      ["rico / pobre", "rich / poor", "adj.", "Es un país rico con mucha gente pobre.", "It's a rich country with many poor people.", "dinero"]
    ],
    conv: [
      ["carmen", "¿Viste las noticias?", "Did you see the news?"],
      ["diego", "Sí, hablaron del gobierno y de la guerra.", "Yes, they talked about the government and the war."],
      ["carmen", "Ojalá haya paz pronto.", "I hope there's peace soon."],
      ["diego", "Sí. Mejor cambiamos de tema, ¿no?", "Yes. Let's change the subject, shall we?"]
    ] }
]},
{ lv: "A2", t: "El tiempo", en: "Time", lessons: [
  { id: "29-1", t: "¿Qué hiciste?", en: "What did you do?", bg: "casa", cast: ["sofia", "mateo"], icon: "calendario",
    words: [
      ["la semana pasada", "last week", "expr.", "La semana pasada fui a Guadalajara.", "Last week I went to Guadalajara.", "calendario"],
      ["el año pasado", "last year", "expr.", "El año pasado me cambié de trabajo.", "Last year I changed jobs.", "calendario"],
      ["hace dos semanas", "two weeks ago", "expr.", "Llegué hace dos semanas.", "I arrived two weeks ago.", "calendario"],
      ["hace un rato", "a little while ago", "expr.", "Te llamé hace un rato.", "I called you a little while ago.", "reloj:4"],
      ["desde hace", "for (a period up to now)", "expr.", "Vivo aquí desde hace cinco años.", "I've lived here for five years.", "casa"],
      ["acabar de + infinitivo", "to have just (done)", "expr.", "Acabo de llegar.", "I just arrived.", ""],
      ["la Semana Santa", "Holy Week", "n.", "En Semana Santa fuimos a la playa.", "During Holy Week we went to the beach.", "sol"],
      ["una vez / otra vez", "once / again", "expr.", "Fui una vez y quiero ir otra vez.", "I went once and want to go again.", ""]
    ],
    gram: { t: "Hace + time", rule: "Hace + time = ago (llegué hace dos semanas). Desde hace + time = for, still true now (vivo aquí desde hace un año).",
      ex: [["Me casé hace tres años.", "I got married three years ago."], ["Estudio español desde hace un mes.", "I've been studying Spanish for a month."], ["Acabo de comer.", "I just ate."]] },
    conv: [
      ["mateo", "¿Cuándo llegaste de Guadalajara?", "When did you get back from Guadalajara?"],
      ["sofia", "Hace un rato. Acabo de llegar.", "A little while ago. I just got here."],
      ["mateo", "¿Y qué tal?", "And how was it?"],
      ["sofia", "¡Increíble! Fui una vez el año pasado y quiero ir otra vez.", "Amazing! I went once last year and I want to go again."]
    ] },
  { id: "29-2", t: "Ahora y después", en: "Now and later", bg: "plaza", cast: ["lupita", "diego"], icon: "reloj:10",
    words: [
      ["esta mañana / esta noche", "this morning / tonight", "expr.", "Esta mañana fui al gimnasio.", "This morning I went to the gym.", "sol"],
      ["esta semana / este mes", "this week / this month", "expr.", "Esta semana trabajo mucho.", "This week I'm working a lot.", "calendario"],
      ["en este momento", "right now", "expr.", "En este momento no puedo hablar.", "I can't talk right now.", "telefono"],
      ["estar + gerundio", "to be doing", "expr.", "Estoy cocinando.", "I'm cooking.", "olla"],
      ["ir a + infinitivo", "to be going to", "expr.", "Voy a estudiar esta noche.", "I'm going to study tonight.", "libro"],
      ["la próxima semana", "next week", "expr.", "La próxima semana empiezo el curso.", "Next week I start the course.", "calendario", "la semana que viene"],
      ["ya / todavía no", "already / not yet", "adv.", "¿Ya comiste? Todavía no.", "Did you eat yet? Not yet.", ""],
      ["tener tiempo", "to have time", "expr.", "Hoy no tengo tiempo.", "I don't have time today.", "reloj:3"]
    ],
    conv: [
      ["diego", "¿Qué estás haciendo?", "What are you doing?"],
      ["lupita", "Estoy estudiando. Tengo examen la próxima semana.", "I'm studying. I have an exam next week."],
      ["diego", "¿Tienes tiempo para un café esta noche?", "Do you have time for a coffee tonight?"],
      ["lupita", "En este momento no, pero mañana sí.", "Not right now, but tomorrow yes."],
      ["diego", "Bueno, voy a llamarte mañana.", "Okay, I'm going to call you tomorrow."]
    ] },
  { id: "29-3", t: "¿Cuánto tiempo?", en: "How long?", bg: "casa", cast: ["carmen", "mateo"], icon: "reloj:12:30",
    words: [
      ["el cuarto de hora / la media hora", "quarter hour / half hour", "n.", "Llego en media hora.", "I'll be there in half an hour.", "reloj:12:30"],
      ["durar", "to last", "v.", "La película dura dos horas.", "The movie lasts two hours.", "tele"],
      ["durante", "during, for", "prep.", "Viví en Puebla durante tres años.", "I lived in Puebla for three years.", ""],
      ["todo el día / todo el tiempo", "all day / all the time", "expr.", "Llovió todo el día.", "It rained all day.", "lluvia"],
      ["muchas veces / algunas veces", "many times / sometimes", "expr.", "Algunas veces como en la oficina.", "Sometimes I eat at the office.", ""],
      ["todos los meses", "every month", "expr.", "Pago la renta todos los meses.", "I pay rent every month.", "dinero"],
      ["empezar a / terminar de", "to start / to finish (doing)", "expr.", "Empecé a estudiar a las seis y terminé de leer a las ocho.", "I started studying at six and finished reading at eight.", "libro"],
      ["la estación del año", "season", "n.", "¿Cuál es tu estación del año favorita?", "What's your favorite season?", "sol"],
      ["el cambio / cambiar de casa", "change / to move house", "n.", "Fue un gran cambio. Cambiamos de casa.", "It was a big change. We moved.", "casa"]
    ],
    gram: { t: "Empezar a / terminar de", rule: "Empezar takes a before the infinitive; terminar takes de: empiezo a trabajar, termino de comer.",
      ex: [["Empiezo a trabajar a las tres.", "I start work at three."], ["¿Terminaste de comer?", "Did you finish eating?"], ["Empezó a llover.", "It started raining."]] },
    conv: [
      ["mateo", "Mamá, ¿cuánto dura el viaje a Puebla?", "Mom, how long is the trip to Puebla?"],
      ["carmen", "Dos horas y media, más o menos.", "Two and a half hours, more or less."],
      ["mateo", "¿Salimos cuando termines de cocinar?", "Shall we leave when you finish cooking?"],
      ["carmen", "Sí, en un cuarto de hora.", "Yes, in a quarter of an hour."]
    ] }
]},
{ lv: "A2", t: "Describir y opinar", en: "Describing and giving opinions", lessons: [
  { id: "30-1", t: "¿De qué es?", en: "What is it made of?", bg: "mercado", cast: ["pepe", "sofia"], icon: "bolsa",
    words: [
      ["redondo / cuadrado", "round / square", "adj.", "Una mesa redonda.", "A round table.", ""],
      ["ser de madera / de metal", "to be made of wood / metal", "expr.", "La silla es de madera.", "The chair is wooden.", ""],
      ["la piel / la tela", "leather / fabric", "n.", "Una bolsa de piel.", "A leather purse.", "bolsa"],
      ["el plástico", "plastic", "n.", "No uses bolsas de plástico.", "Don't use plastic bags.", "bolsa"],
      ["el vidrio", "glass (material)", "n.", "Una botella de vidrio.", "A glass bottle.", "agua", "el cristal"],
      ["fuerte / seco", "strong / dry", "adj.", "El clima es muy seco.", "The climate is very dry.", "sol"],
      ["antiguo / moderno", "old, antique / modern", "adj.", "Es un mueble antiguo.", "It's an antique piece of furniture.", ""],
      ["el color", "color", "n.", "¿De qué color es?", "What color is it?", "%E84A8A"],
      ["igual / diferente", "the same / different", "adj.", "Las dos bolsas son iguales.", "The two purses are the same.", ""],
      ["parecido / típico", "similar / typical", "adj.", "Es un dulce típico de Puebla.", "It's a typical Puebla sweet.", ""],
      ["el paraguas", "umbrella", "n.", "Lleva el paraguas, va a llover.", "Take the umbrella, it's going to rain.", "lluvia"]
    ],
    gram: { t: "Ser de", rule: "Ser de + material: es de madera, son de piel. It doesn't change: de stays de.",
      ex: [["La mesa es de vidrio.", "The table is glass."], ["Mis botas son de piel.", "My boots are leather."], ["¿De qué es?", "What's it made of?"]] },
    conv: [
      ["sofia", "¿Esta bolsa es de piel?", "Is this bag leather?"],
      ["pepe", "Sí, señorita. Es típica de León.", "Yes, miss. It's typical of León."],
      ["sofia", "¿Y esa es igual?", "And is that one the same?"],
      ["pepe", "Es parecida, pero es de tela. Es más barata.", "It's similar, but it's fabric. It's cheaper."]
    ] },
  { id: "30-2", t: "Comparar", en: "Comparing", bg: "plaza", cast: ["lupita", "mateo"], icon: "#>",
    words: [
      ["más que / menos que", "more than / less than", "expr.", "El metro es más rápido que el camión.", "The subway is faster than the bus.", "metro"],
      ["tan como (tan alto como)", "as … as", "expr.", "Mi hermano es tan alto como yo.", "My brother is as tall as me.", ""],
      ["mejor / peor", "better / worse", "adj.", "Este restaurante es mejor que el otro.", "This restaurant is better than the other one.", "olla"],
      ["demasiado", "too, too much", "adv.", "Es demasiado caro.", "It's too expensive.", "dinero"],
      ["el centímetro", "centimeter", "n.", "Mide veinte centímetros.", "It measures twenty centimeters.", ""],
      ["valer", "to be worth, to cost", "v.", "¿Cuánto vale?", "How much is it worth?", "dinero"],
      ["impresionante / perfecto", "impressive / perfect", "adj.", "La vista es impresionante.", "The view is impressive.", "sol"],
      ["estar seguro / segura", "to be sure", "expr.", "¿Estás segura?", "Are you sure?", ""],
      ["ser verdad / ser probable", "to be true / to be likely", "expr.", "Es probable que llueva. Es verdad.", "It's likely to rain. It's true.", "nube"],
      ["necesario / necesitar", "necessary / to need", "adj.", "No es necesario. No necesito nada.", "It's not necessary. I don't need anything.", ""]
    ],
    gram: { t: "Comparatives", rule: "más/menos + adjective + que; tan + adjective + como. Irregular: mejor, peor, mayor, menor.",
      ex: [["Es más barato que el otro.", "It's cheaper than the other one."], ["Soy tan alta como mi mamá.", "I'm as tall as my mom."], ["Este café es mejor.", "This coffee is better."]] },
    conv: [
      ["mateo", "¿Qué departamento te gusta más?", "Which apartment do you like more?"],
      ["lupita", "El de Coyoacán. Es más grande que el otro.", "The one in Coyoacán. It's bigger than the other."],
      ["mateo", "Pero es demasiado caro.", "But it's too expensive."],
      ["lupita", "Sí, pero la vista es impresionante. Vale la pena.", "Yes, but the view is impressive. It's worth it."],
      ["mateo", "¿Estás segura?", "Are you sure?"]
    ] },
  { id: "30-3", t: "Frases útiles", en: "Useful phrases", bg: "casa", cast: ["diego", "sofia"], icon: "wave",
    words: [
      ["está bien / claro", "okay / of course", "expr.", "¿Nos vemos a las seis? Claro, está bien.", "See you at six? Of course, okay.", ""],
      ["órale", "okay, come on, wow (Mexico)", "interj.", "¿Vamos? ¡Órale!", "Shall we go? Let's do it!", "", "vale"],
      ["nadie / nada", "nobody / nothing", "pron.", "No hay nadie en casa. No hay nada en el refri.", "There's nobody home. There's nothing in the fridge.", ""],
      ["no haber ningún / ninguna", "there's no … at all", "expr.", "No hay ninguna farmacia en esta calle.", "There's no pharmacy on this street.", "farmacia"],
      ["todo el mundo", "everybody", "expr.", "Todo el mundo habla de la película.", "Everybody's talking about the movie.", ""],
      ["tener suerte", "to be lucky", "expr.", "¡Qué suerte tienes!", "You're so lucky!", ""],
      ["decir", "to say, to tell", "v.", "¿Qué dijiste?", "What did you say?", ""],
      ["poder", "to be able to, can", "v.", "¿Puedes ayudarme?", "Can you help me?", ""],
      ["estar sentado / estar parado", "to be sitting / to be standing", "expr.", "Estuve parado todo el día.", "I was standing all day.", "", "estar sentado / estar de pie"],
      ["sentarse / acostarse", "to sit down / to lie down", "v.", "Siéntate, por favor.", "Sit down, please.", "cama"],
      ["traer", "to bring", "v.", "¿Qué traigo a la fiesta?", "What should I bring to the party?", "fiesta"],
      ["venir de", "to come from", "expr.", "Vengo del trabajo.", "I'm coming from work.", ""],
      ["agarrar", "to take, to grab", "v.", "Agarra un plato.", "Grab a plate.", "", "coger"],
      ["subir / bajar", "to go up / to go down", "v.", "Sube por la escalera.", "Go up the stairs.", ""],
      ["oír / mirar", "to hear / to look", "v.", "¿Oíste eso? Mira por la ventana.", "Did you hear that? Look out the window.", ""]
    ],
    gram: { t: "Double negatives", rule: "Spanish uses double negatives: no hay nadie, no quiero nada, no hay ninguna.",
      ex: [["No hay nadie.", "There's nobody."], ["No tengo nada.", "I have nothing."], ["No hay ningún problema.", "There's no problem at all."]] },
    conv: [
      ["sofia", "Diego, ¿qué traigo a la fiesta?", "Diego, what should I bring to the party?"],
      ["diego", "Nada, ya tenemos todo.", "Nothing, we already have everything."],
      ["sofia", "¿Seguro? ¿Agarro unas chelas?", "Sure? Should I grab some beers?"],
      ["diego", "¡Órale, está bien!", "Okay, sounds good!"],
      ["sofia", "¿Viene todo el mundo?", "Is everybody coming?"],
      ["diego", "Sí, ¡no falta nadie!", "Yes, nobody's missing!"]
    ] }
]}
);
