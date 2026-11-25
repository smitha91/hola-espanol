// A2 lessons, part 1 (units 17–23). With data4.js these cover every word in the Instituto Cervantes Plan Curricular A2 inventory.
// Word: [Mexican Spanish, English, part of speech, example es, example en, picture, Spain form if different]
UNITS.push(
{ lv: "A2", t: "El cuerpo y la salud", en: "Body and health", lessons: [
  { id: "17-1", t: "El cuerpo", en: "The body", bg: "parque", cast: ["mateo", "diego"], icon: "corazon",
    words: [
      ["la cabeza", "head", "n.", "Me pegué en la cabeza.", "I hit my head.", ""],
      ["la cara", "face", "n.", "Tiene la cara roja por el sol.", "His face is red from the sun.", "sol"],
      ["el cuello", "neck", "n.", "Me duele el cuello.", "My neck hurts.", ""],
      ["la espalda", "back", "n.", "Cargué cajas y me duele la espalda.", "I carried boxes and my back hurts.", ""],
      ["el brazo / la mano", "arm / hand", "n.", "Levanten la mano derecha.", "Raise your right hand.", "wave"],
      ["el dedo", "finger, toe", "n.", "Me corté el dedo.", "I cut my finger.", ""],
      ["la pierna / el pie", "leg / foot", "n.", "Caminé mucho y me duelen los pies.", "I walked a lot and my feet hurt.", ""],
      ["el oído", "inner ear, hearing", "n.", "Tengo dolor de oído.", "I have an earache.", ""],
      ["la muela", "molar, back tooth", "n.", "Me duele una muela.", "I have a toothache.", ""],
      ["la garganta", "throat", "n.", "Me duele la garganta.", "I have a sore throat.", ""],
      ["el estómago", "stomach", "n.", "Comí mucho y me duele el estómago.", "I ate a lot and my stomach hurts.", ""]
    ],
    gram: { t: "Doler", rule: "Doler works like gustar: me duele + one thing, me duelen + several things.",
      ex: [["Me duele la cabeza.", "My head hurts."], ["Me duelen los pies.", "My feet hurt."], ["¿Te duele la espalda?", "Does your back hurt?"]] },
    conv: [
      ["diego", "¿Qué te pasa, Mateo?", "What's wrong, Mateo?"],
      ["mateo", "Jugué futbol y me duelen las piernas.", "I played soccer and my legs hurt."],
      ["diego", "¿Y la mano?", "And your hand?"],
      ["mateo", "También. Me pegué en un dedo.", "That too. I hit a finger."],
      ["diego", "Descansa hoy, ¿eh?", "Rest today, okay?"]
    ] },
  { id: "17-2", t: "Estoy enfermo", en: "I'm sick", bg: "casa", cast: ["lupita", "carmen"], icon: "farmacia",
    words: [
      ["sentirse bien / mal", "to feel well / sick", "v.", "No me siento bien.", "I don't feel well.", ""],
      ["doler", "to hurt", "v.", "¿Dónde te duele?", "Where does it hurt?", ""],
      ["tener dolor de cabeza", "to have a headache", "expr.", "Tengo dolor de cabeza.", "I have a headache.", ""],
      ["tener dolor de estómago", "to have a stomachache", "expr.", "El niño tiene dolor de estómago.", "The boy has a stomachache.", ""],
      ["la gripe", "flu", "n.", "Tengo gripe.", "I have the flu.", "farmacia"],
      ["la alergia", "allergy", "n.", "Tengo alergia a los gatos.", "I'm allergic to cats.", ""],
      ["la calentura", "fever", "n.", "El bebé tiene calentura.", "The baby has a fever.", "", "la fiebre"],
      ["la tos", "cough", "n.", "Tengo mucha tos.", "I have a bad cough.", ""],
      ["la enfermedad", "illness", "n.", "Es una enfermedad común.", "It's a common illness.", "farmacia"],
      ["estar cansado / cansada", "to be tired", "expr.", "Estoy muy cansada hoy.", "I'm very tired today.", "cama"]
    ],
    gram: { t: "Tener for symptoms", rule: "Use tener for most symptoms: tengo gripe, tengo tos, tengo calentura, tengo dolor de…",
      ex: [["Tengo tos y calentura.", "I have a cough and a fever."], ["Tiene alergia.", "She has allergies."], ["¿Tienes dolor de garganta?", "Do you have a sore throat?"]] },
    conv: [
      ["carmen", "Lupita, ¿cómo te sientes?", "Lupita, how do you feel?"],
      ["lupita", "Mal. Tengo tos y dolor de cabeza.", "Bad. I have a cough and a headache."],
      ["carmen", "¿Tienes calentura?", "Do you have a fever?"],
      ["lupita", "Creo que sí. Estoy muy cansada.", "I think so. I'm very tired."],
      ["carmen", "Puede ser gripe. Vamos al médico.", "It could be the flu. Let's go to the doctor."]
    ] },
  { id: "17-3", t: "Emergencias", en: "Emergencies", bg: "calle", cast: ["diego", "sofia"], icon: "farmacia",
    words: [
      ["urgencias", "emergency room", "n.", "Lo llevaron a urgencias.", "They took him to the emergency room.", "farmacia"],
      ["la ambulancia", "ambulance", "n.", "¡Llamen una ambulancia!", "Call an ambulance!", ""],
      ["la Cruz Roja", "Red Cross", "n.", "La Cruz Roja llegó en cinco minutos.", "The Red Cross arrived in five minutes.", ""],
      ["el Seguro Social", "national health/social security system", "n.", "Voy a la clínica del Seguro Social.", "I go to the Social Security clinic.", "farmacia", "la Seguridad Social"],
      ["la medicina", "medicine", "n.", "Toma la medicina cada ocho horas.", "Take the medicine every eight hours.", "farmacia"],
      ["el medicamento", "medication", "n.", "Este medicamento es para la tos.", "This medication is for the cough.", "farmacia"],
      ["el teléfono de emergencia", "emergency number", "n.", "El teléfono de emergencia es el 911.", "The emergency number is 911.", "telefono"],
      ["¡socorro!", "help!", "interj.", "¡Socorro! ¡Ayúdenme!", "Help! Help me!", ""],
      ["llevar una vida sana", "to live a healthy life", "expr.", "Mi abuela lleva una vida muy sana.", "My grandmother lives a very healthy life.", "corazon"]
    ],
    gram: { t: "Commands with ustedes", rule: "To tell a group what to do, use the ustedes command: llamen, ayuden, esperen.",
      ex: [["¡Llamen a una ambulancia!", "Call an ambulance!"], ["Esperen aquí, por favor.", "Wait here, please."], ["Tomen la medicina.", "Take the medicine."]] },
    conv: [
      ["sofia", "¡Socorro! ¡Un señor se cayó!", "Help! A man fell!"],
      ["diego", "Voy a llamar al teléfono de emergencia.", "I'm going to call the emergency number."],
      ["sofia", "¿Viene la ambulancia?", "Is the ambulance coming?"],
      ["diego", "Sí, de la Cruz Roja. Lo llevan a urgencias.", "Yes, from the Red Cross. They're taking him to the ER."],
      ["sofia", "¡Qué bueno que llegaron rápido!", "Good thing they got here fast!"]
    ] },
  { id: "17-4", t: "El aspecto", en: "Appearance", bg: "plaza", cast: ["sofia", "lupita"], icon: "foto",
    words: [
      ["calvo / calva", "bald", "adj.", "Mi papá está calvo.", "My dad is bald.", ""],
      ["el pelo liso", "straight hair", "n.", "Tengo el pelo liso.", "I have straight hair.", ""],
      ["el pelo chino", "curly hair", "n.", "Mateo tiene el pelo chino.", "Mateo has curly hair.", "", "el pelo rizado"],
      ["llevar el pelo largo / corto", "to wear your hair long / short", "expr.", "Ahora llevo el pelo corto.", "Now I wear my hair short.", ""],
      ["la gorra", "cap", "n.", "Siempre lleva una gorra de béisbol.", "He always wears a baseball cap.", ""],
      ["el sombrero", "hat", "n.", "El mariachi lleva un sombrero grande.", "The mariachi wears a big hat.", ""],
      ["el pañuelo", "scarf, handkerchief", "n.", "La abuela lleva un pañuelo en la cabeza.", "Grandma wears a scarf on her head.", ""],
      ["llevar", "to wear", "v.", "¿Quién es la chica que lleva gorra?", "Who is the girl wearing a cap?", ""]
    ],
    gram: { t: "Ser vs estar calvo", rule: "Both work: es calvo (a trait) or está calvo (he has become bald).",
      ex: [["Mi tío es calvo.", "My uncle is bald."], ["Mi papá ya está calvo.", "My dad is bald now."], ["Lleva el pelo chino.", "She wears her hair curly."]] },
    conv: [
      ["lupita", "¿Quién es ese señor del sombrero?", "Who is that man in the hat?"],
      ["sofia", "Es mi tío Beto.", "That's my uncle Beto."],
      ["lupita", "¿El que tenía el pelo largo y chino?", "The one who used to have long curly hair?"],
      ["sofia", "¡Sí! Ahora está calvo. Por eso lleva sombrero.", "Yes! Now he's bald. That's why he wears a hat."]
    ] },
  { id: "17-5", t: "La higiene", en: "Hygiene", bg: "casa", cast: ["mateo", "carmen"], icon: "agua",
    words: [
      ["lavarse", "to wash (yourself)", "v.", "Me lavo la cara con agua fría.", "I wash my face with cold water.", "agua"],
      ["peinarse", "to comb your hair", "v.", "Péinate antes de salir.", "Comb your hair before going out.", ""],
      ["rasurarse", "to shave", "v.", "Mi papá se rasura todas las mañanas.", "My dad shaves every morning.", "", "afeitarse"],
      ["lavarse los dientes", "to brush your teeth", "expr.", "Me lavo los dientes tres veces al día.", "I brush my teeth three times a day.", "", "cepillarse los dientes"],
      ["la regadera / la tina", "shower / bathtub", "n.", "El departamento tiene regadera pero no tina.", "The apartment has a shower but no bathtub.", "", "la ducha / la bañera"],
      ["la toalla", "towel", "n.", "¿Me pasas una toalla?", "Can you pass me a towel?", ""],
      ["el champú / el gel", "shampoo / shower gel", "n.", "Se acabó el champú.", "We ran out of shampoo.", ""],
      ["la crema / la colonia", "lotion / cologne", "n.", "Me pongo crema en las manos.", "I put lotion on my hands.", ""],
      ["el desodorante", "deodorant", "n.", "No olvides el desodorante.", "Don't forget the deodorant.", ""],
      ["el cepillo de dientes", "toothbrush", "n.", "Compré un cepillo de dientes nuevo.", "I bought a new toothbrush.", ""],
      ["la pasta de dientes", "toothpaste", "n.", "No hay pasta de dientes.", "There's no toothpaste.", ""]
    ],
    gram: { t: "Reflexive verbs", rule: "With your own body, use me/te/se and the article, not a possessive: me lavo las manos (not mis manos).",
      ex: [["Me lavo las manos.", "I wash my hands."], ["¿Te rasuras todos los días?", "Do you shave every day?"], ["Se peina en el baño.", "She combs her hair in the bathroom."]] },
    conv: [
      ["carmen", "Mateo, ¡ya son las siete!", "Mateo, it's already seven!"],
      ["mateo", "Ya voy. Me estoy rasurando.", "Coming. I'm shaving."],
      ["carmen", "Hay toallas limpias en el clóset.", "There are clean towels in the closet."],
      ["mateo", "Gracias. ¿Hay pasta de dientes?", "Thanks. Is there toothpaste?"],
      ["carmen", "Sí, y compré champú nuevo.", "Yes, and I bought new shampoo."]
    ] }
]},
{ lv: "A2", t: "Emociones y carácter", en: "Feelings and character", lessons: [
  { id: "18-1", t: "El carácter", en: "Character", bg: "plaza", cast: ["sofia", "diego"], icon: "corazon",
    words: [
      ["el carácter", "personality, character", "n.", "Mi hermana tiene buen carácter.", "My sister has a good personality.", "corazon"],
      ["optimista", "optimistic", "adj.", "Soy muy optimista.", "I'm very optimistic.", "sol"],
      ["abierto / abierta", "open, outgoing", "adj.", "Es una persona muy abierta.", "She's a very open person.", ""],
      ["reservado / reservada", "reserved", "adj.", "Mi novio es un poco reservado.", "My boyfriend is a little reserved.", ""],
      ["tranquilo / tranquila", "calm", "adj.", "Mi papá es muy tranquilo.", "My dad is very calm.", ""],
      ["nervioso / nerviosa", "nervous, high-strung", "adj.", "Es una persona nerviosa.", "He's a nervous person.", ""],
      ["generoso / generosa", "generous", "adj.", "Mi abuela es muy generosa.", "My grandmother is very generous.", "corazon"],
      ["egoísta", "selfish", "adj.", "No seas egoísta, comparte.", "Don't be selfish, share.", ""],
      ["amable", "kind", "adj.", "La vecina es muy amable.", "The neighbor is very kind.", ""],
      ["agradable", "pleasant", "adj.", "Es un lugar muy agradable.", "It's a very pleasant place.", ""],
      ["tolerante", "tolerant", "adj.", "Hay que ser tolerante.", "You have to be tolerant.", ""],
      ["la educación", "manners, upbringing; education", "n.", "Ese niño no tiene educación.", "That kid has no manners.", ""]
    ],
    gram: { t: "Ser for character", rule: "Use ser for personality: es generoso. Adjectives in -ista and -e don't change for gender: optimista, amable.",
      ex: [["Ella es optimista y él también.", "She is optimistic and he is too."], ["Mis tíos son muy amables.", "My aunt and uncle are very kind."], ["Es un poco egoísta.", "He's a bit selfish."]] },
    conv: [
      ["sofia", "¿Cómo es tu nuevo compañero de trabajo?", "What is your new coworker like?"],
      ["diego", "Es amable, pero un poco reservado.", "He's kind, but a little reserved."],
      ["sofia", "¿Y tu jefa?", "And your boss?"],
      ["diego", "Muy tranquila y optimista. Es muy agradable trabajar con ella.", "Very calm and optimistic. It's very pleasant to work with her."]
    ] },
  { id: "18-2", t: "¿Cómo estás?", en: "How do you feel?", bg: "casa", cast: ["lupita", "mateo"], icon: "corazon",
    words: [
      ["estar triste", "to be sad", "expr.", "Estoy triste porque se fue mi amiga.", "I'm sad because my friend left.", ""],
      ["estar contento / contenta", "to be happy", "expr.", "Estamos muy contentos con la casa.", "We're very happy with the house.", "sol"],
      ["estar enojado / enojada", "to be angry", "expr.", "¿Por qué estás enojado?", "Why are you angry?", "", "estar enfadado"],
      ["estar nervioso / nerviosa", "to be nervous", "expr.", "Estoy nerviosa por el examen.", "I'm nervous about the exam.", ""],
      ["estar preocupado / preocupada", "to be worried", "expr.", "Mi mamá está preocupada.", "My mom is worried.", ""],
      ["tener miedo", "to be afraid", "expr.", "Tengo miedo a los perros grandes.", "I'm afraid of big dogs.", ""],
      ["tener calor / frío", "to be hot / cold", "expr.", "¿Tienes frío? Ponte un suéter.", "Are you cold? Put on a sweater.", "nieve"],
      ["tener sueño", "to be sleepy", "expr.", "Tengo mucho sueño.", "I'm really sleepy.", "cama"],
      ["tener hambre / tener sed", "to be hungry / thirsty", "expr.", "¿Tienes hambre? Hay tacos.", "Are you hungry? There are tacos.", "taco"],
      ["mirar", "to look at, to watch", "v.", "Mira, ahí está Sofía.", "Look, there's Sofía.", ""]
    ],
    gram: { t: "Ser or estar with feelings", rule: "Estar is for how you feel right now: está nervioso hoy. Ser is for what you're like: es nervioso.",
      ex: [["Hoy estoy nerviosa.", "Today I'm nervous."], ["Mi hermano es nervioso.", "My brother is a nervous person."], ["¿Estás contento?", "Are you happy?"]] },
    conv: [
      ["mateo", "Lupita, ¿estás bien? Te ves triste.", "Lupita, are you okay? You look sad."],
      ["lupita", "Estoy preocupada. Mañana tengo una entrevista.", "I'm worried. Tomorrow I have an interview."],
      ["mateo", "¿Tienes miedo?", "Are you scared?"],
      ["lupita", "Un poco. Estoy muy nerviosa.", "A little. I'm very nervous."],
      ["mateo", "¡Vas a estar bien! Eres muy inteligente.", "You'll be fine! You're very smart."]
    ] },
  { id: "18-3", t: "Me encanta", en: "I love it", bg: "parque", cast: ["sofia", "mateo"], icon: "corazon",
    words: [
      ["gustar", "to like (to be pleasing)", "v.", "Me gustan los tacos al pastor.", "I like tacos al pastor.", "taco"],
      ["encantar", "to love (a thing)", "v.", "Me encanta bailar.", "I love dancing.", "musica"],
      ["odiar", "to hate", "v.", "Odio levantarme temprano.", "I hate getting up early.", ""],
      ["interesar", "to interest", "v.", "Me interesa la historia de México.", "I'm interested in Mexican history.", "libro"],
      ["aburrido / aburrida", "boring; bored", "adj.", "La película es aburrida.", "The movie is boring.", "tele"],
      ["increíble", "incredible, amazing", "adj.", "¡El concierto fue increíble!", "The concert was amazing!", "musica"],
      ["impresionante", "impressive", "adj.", "Las pirámides son impresionantes.", "The pyramids are impressive.", ""],
      ["importante", "important", "adj.", "Es importante estudiar todos los días.", "It's important to study every day.", ""],
      ["útil", "useful", "adj.", "Esta aplicación es muy útil.", "This app is very useful.", "telefono"],
      ["normal / perfecto", "normal / perfect", "adj.", "Es normal estar nervioso. ¡Perfecto!", "It's normal to be nervous. Perfect!", ""]
    ],
    gram: { t: "Gustar, encantar, interesar", rule: "These verbs agree with the thing you like: me gusta el café, me gustan los perros. Ser aburrido = boring, estar aburrido = bored.",
      ex: [["Me encantan las películas mexicanas.", "I love Mexican movies."], ["¿Te interesa el arte?", "Are you interested in art?"], ["Estoy aburrida.", "I'm bored."]] },
    conv: [
      ["sofia", "¿Te gustó la película?", "Did you like the movie?"],
      ["mateo", "No mucho. Me pareció aburrida.", "Not really. I found it boring."],
      ["sofia", "¡A mí me encantó! La música es increíble.", "I loved it! The music is amazing."],
      ["mateo", "Bueno, a mí me interesan más los documentales.", "Well, I'm more interested in documentaries."]
    ] }
]},
{ lv: "A2", t: "Vida y relaciones", en: "Life and relationships", lessons: [
  { id: "19-1", t: "El ciclo de la vida", en: "Life cycle", bg: "casa", cast: ["carmen", "sofia"], icon: "pastel",
    words: [
      ["nacer", "to be born", "v.", "Nací en Chicago en 1991.", "I was born in Chicago in 1991.", "calendario"],
      ["crecer", "to grow up", "v.", "Crecí en el sur de la ciudad.", "I grew up on the south side of the city.", ""],
      ["tener un hijo", "to have a child", "expr.", "Quieren tener un hijo.", "They want to have a child.", "corazon"],
      ["morir", "to die", "v.", "Mi abuelo murió en 2010.", "My grandfather died in 2010.", ""],
      ["el bebé", "baby", "n.", "El bebé duerme mucho.", "The baby sleeps a lot.", "cama"],
      ["el adolescente / la adolescente", "teenager", "n.", "Mi sobrino es adolescente.", "My nephew is a teenager.", ""],
      ["el adulto / la adulta", "adult", "n.", "La entrada para adultos cuesta cien pesos.", "Admission for adults costs a hundred pesos.", "boleto"],
      ["la persona mayor", "older person, senior", "n.", "Hay descuento para personas mayores.", "There's a discount for seniors.", ""],
      ["mayor", "older", "adj.", "Mi hermano mayor vive en Texas.", "My older brother lives in Texas.", ""],
      ["casarse", "to get married", "v.", "Nos casamos el año que viene.", "We're getting married next year.", "corazon"],
      ["separarse / divorciarse", "to separate / to get divorced", "v.", "Mis tíos se divorciaron.", "My aunt and uncle got divorced.", ""],
      ["el sexo", "sex (male/female, on forms)", "n.", "Sexo: femenino.", "Sex: female.", ""]
    ],
    gram: { t: "Preterite of -ar, -er, -ir", rule: "Finished past actions: nací, naciste, nació (‑er/‑ir) and me casé, te casaste, se casó (‑ar).",
      ex: [["Nací en 1991.", "I was born in 1991."], ["Se casaron en Puebla.", "They got married in Puebla."], ["¿Dónde creciste?", "Where did you grow up?"]] },
    conv: [
      ["sofia", "Doña Carmen, ¿dónde nació usted?", "Doña Carmen, where were you born?"],
      ["carmen", "Nací en Michoacán y crecí en Guadalajara.", "I was born in Michoacán and grew up in Guadalajara."],
      ["sofia", "¿Y cuándo se casó?", "And when did you get married?"],
      ["carmen", "A los veinte años. Tuve mi primer bebé a los veintidós.", "At twenty. I had my first baby at twenty-two."],
      ["sofia", "¡Qué joven!", "So young!"]
    ] },
  { id: "19-2", t: "Mi familia", en: "My family", bg: "casa", cast: ["lupita", "diego"], icon: "foto",
    words: [
      ["papá / mamá", "dad / mom", "n.", "Mi mamá cocina muy rico.", "My mom cooks really well.", "foto"],
      ["el hijo único / la hija única", "only child", "n.", "Soy hija única.", "I'm an only child.", "foto"],
      ["los gemelos", "twins", "n.", "Mis primos son gemelos.", "My cousins are twins.", "foto"],
      ["el exesposo / la exesposa", "ex-husband / ex-wife", "n.", "Mi exesposo vive en otra ciudad.", "My ex-husband lives in another city.", "", "el ex marido / la ex mujer"],
      ["vivir juntos", "to live together", "expr.", "Mi novio y yo vivimos juntos.", "My boyfriend and I live together.", "casa"],
      ["vivir con la pareja", "to live with your partner", "expr.", "Vive con su pareja en el centro.", "He lives with his partner downtown.", "casa"],
      ["apellidarse", "to have the last name", "v.", "Me llamo Ana y me apellido Smith.", "My name is Ana and my last name is Smith.", ""],
      ["presentarse", "to introduce yourself", "v.", "Hola, me presento: soy Diego.", "Hi, let me introduce myself: I'm Diego.", "wave"],
      ["presentar", "to introduce (someone)", "v.", "Te presento a mi mamá.", "This is my mom (lit. I introduce you to my mom).", "wave"],
      ["la nacionalidad", "nationality, citizenship", "n.", "Tiene la nacionalidad mexicana.", "She has Mexican citizenship.", "pin"]
    ],
    gram: { t: "Possessives", rule: "Mi/tu/su go before the noun and add -s in the plural: mis papás, tus primos, su mamá.",
      ex: [["Mis papás viven en Chicago.", "My parents live in Chicago."], ["¿Cómo se llaman tus hermanos?", "What are your siblings' names?"], ["Su mamá es maestra.", "His mom is a teacher."]] },
    conv: [
      ["diego", "Lupita, te presento a mi mamá.", "Lupita, this is my mom."],
      ["lupita", "Mucho gusto, señora. ¿Cómo se apellida?", "Nice to meet you, ma'am. What's your last name?"],
      ["diego", "Se apellida Herrera, como yo.", "Her last name is Herrera, like mine."],
      ["lupita", "¿Tienes hermanos, Diego?", "Do you have siblings, Diego?"],
      ["diego", "No, soy hijo único. ¿Y tú?", "No, I'm an only child. And you?"],
      ["lupita", "Yo tengo dos hermanas gemelas.", "I have two twin sisters."]
    ] },
  { id: "19-3", t: "Vecinos y compañeros", en: "Neighbors and coworkers", bg: "calle", cast: ["sofia", "pepe"], icon: "wave",
    words: [
      ["el vecino / la vecina", "neighbor", "n.", "Mi vecina tiene tres perros.", "My neighbor has three dogs.", "casa"],
      ["el socio / la socia", "business partner; member", "n.", "Mi socio y yo tenemos un restaurante.", "My partner and I have a restaurant.", ""],
      ["el compañero de clase", "classmate", "n.", "Mis compañeros de clase son de varios países.", "My classmates are from several countries.", "escuela"],
      ["el compañero de trabajo", "coworker", "n.", "Como con mis compañeros de trabajo.", "I eat lunch with my coworkers.", "laptop"],
      ["el roomie", "roommate", "n.", "Mi roomie es de Monterrey.", "My roommate is from Monterrey.", "casa", "el compañero de piso"],
      ["la reunión", "meeting, get-together", "n.", "Tengo una reunión a las tres.", "I have a meeting at three.", "reloj:3"],
      ["la cita", "appointment; date", "n.", "Tengo cita con el dentista.", "I have a dentist appointment.", "calendario"],
      ["visitar", "to visit", "v.", "Visitamos a mis abuelos los domingos.", "We visit my grandparents on Sundays.", "casa"],
      ["invitar", "to invite; to treat", "v.", "Te invito a comer. Yo pago.", "I'll take you to lunch. My treat.", "taco"],
      ["quedar", "to arrange to meet", "v.", "Quedamos en vernos a las cinco.", "We agreed to meet at five.", "reloj:5"]
    ],
    gram: { t: "Personal a", rule: "Put a before a person who receives the action: visito a mi abuela, invito a Lupita.",
      ex: [["Visité a mis vecinos.", "I visited my neighbors."], ["Invitamos a todos.", "We invited everyone."], ["Conozco a tu socio.", "I know your business partner."]] },
    conv: [
      ["pepe", "Sofía, ¿quién es la chica de la foto?", "Sofía, who's the girl in the photo?"],
      ["sofia", "Es mi roomie, Andrea. Es de Monterrey.", "That's my roommate, Andrea. She's from Monterrey."],
      ["pepe", "¿Y el señor?", "And the man?"],
      ["sofia", "Es mi vecino. Ayer lo invité a la reunión del edificio.", "He's my neighbor. Yesterday I invited him to the building meeting."],
      ["pepe", "¡Qué buena vecina eres!", "What a good neighbor you are!"]
    ] },
  { id: "19-4", t: "Fiestas", en: "Celebrations", bg: "taqueria", cast: ["lupita", "mateo"], icon: "fiesta",
    words: [
      ["la fiesta de cumpleaños", "birthday party", "n.", "El sábado es la fiesta de cumpleaños de Mateo.", "Saturday is Mateo's birthday party.", "pastel"],
      ["el cumpleaños", "birthday", "n.", "¡Feliz cumpleaños!", "Happy birthday!", "pastel"],
      ["la fiesta de fin de curso", "end-of-year party", "n.", "La fiesta de fin de curso es en junio.", "The end-of-year party is in June.", "fiesta"],
      ["hacer una fiesta", "to throw a party", "expr.", "Vamos a hacer una fiesta en mi casa.", "We're going to have a party at my house.", "fiesta"],
      ["el regalo", "gift", "n.", "Este regalo es para ti.", "This gift is for you.", "fiesta"],
      ["regalar", "to give (as a gift)", "v.", "Le regalé un libro a mi papá.", "I gave my dad a book.", "libro"],
      ["la Navidad", "Christmas", "n.", "En Navidad comemos tamales.", "At Christmas we eat tamales.", "nieve"],
      ["la Semana Santa", "Holy Week, Easter week", "n.", "En Semana Santa vamos a la playa.", "During Holy Week we go to the beach.", "sol"],
      ["el Ramadán / el Sabbat", "Ramadan / Sabbath", "n.", "Mi compañera celebra el Ramadán.", "My coworker observes Ramadan.", "luna"],
      ["la iglesia", "church", "n.", "La boda es en la iglesia del pueblo.", "The wedding is at the town church.", ""],
      ["creer en Dios / en Alá", "to believe in God / in Allah", "expr.", "Mi vecina cree en Alá.", "My neighbor believes in Allah.", ""],
      ["la reencarnación", "reincarnation", "n.", "¿Crees en la reencarnación?", "Do you believe in reincarnation?", ""]
    ],
    gram: { t: "Le / les", rule: "Le (to him/her/you) and les (to them) say who receives: le regalé un libro a mi papá.",
      ex: [["Le compré flores a mi mamá.", "I bought my mom flowers."], ["¿Qué le vas a regalar?", "What are you going to give him?"], ["Les mandé una tarjeta.", "I sent them a card."]] },
    conv: [
      ["mateo", "Lupita, el sábado hago una fiesta de cumpleaños.", "Lupita, on Saturday I'm having a birthday party."],
      ["lupita", "¡Qué padre! ¿Es tu cumpleaños?", "Cool! Is it your birthday?"],
      ["mateo", "Sí, cumplo treinta.", "Yes, I'm turning thirty."],
      ["lupita", "¿Qué te regalo?", "What should I get you?"],
      ["mateo", "Nada, solo ven a la fiesta.", "Nothing, just come to the party."]
    ] }
]},
{ lv: "A2", t: "La comida", en: "Food", lessons: [
  { id: "20-1", t: "Frutas y verduras", en: "Fruit and vegetables", bg: "mercado", cast: ["carmen", "pepe"], icon: "fruta",
    words: [
      ["la lechuga", "lettuce", "n.", "Una lechuga, por favor.", "A head of lettuce, please.", "fruta"],
      ["el jitomate", "tomato", "n.", "El kilo de jitomate cuesta treinta pesos.", "A kilo of tomatoes costs thirty pesos.", "fruta", "el tomate"],
      ["la zanahoria", "carrot", "n.", "Las zanahorias están frescas.", "The carrots are fresh.", "fruta"],
      ["la papa", "potato", "n.", "Hago papas con chorizo.", "I make potatoes with chorizo.", "fruta", "la patata"],
      ["el ajo / la cebolla", "garlic / onion", "n.", "La salsa lleva ajo y cebolla.", "The salsa has garlic and onion.", "fruta"],
      ["el perejil", "parsley", "n.", "Le pongo perejil a la sopa.", "I put parsley in the soup.", "fruta"],
      ["el plátano", "banana", "n.", "Desayuno un plátano.", "I have a banana for breakfast.", "platano"],
      ["la manzana", "apple", "n.", "Las manzanas de Chihuahua son muy buenas.", "Apples from Chihuahua are very good.", "manzana"],
      ["la naranja", "orange", "n.", "Un kilo de naranjas para jugo.", "A kilo of oranges for juice.", "fruta"]
    ],
    gram: { t: "Lo / la / los / las", rule: "Use lo, la, los, las to avoid repeating a thing: ¿Las zanahorias? Las compro aquí.",
      ex: [["¿El jitomate? Lo compro en el mercado.", "Tomatoes? I buy them at the market."], ["Las manzanas las lavo primero.", "I wash the apples first."], ["¿La cebolla? La pico.", "The onion? I chop it."]] },
    conv: [
      ["pepe", "Buenos días, doña Carmen. ¿Qué le doy?", "Good morning, doña Carmen. What can I get you?"],
      ["carmen", "Un kilo de jitomate y medio de cebolla.", "A kilo of tomatoes and half a kilo of onion."],
      ["pepe", "¿Algo más?", "Anything else?"],
      ["carmen", "Unas papas, ajo y perejil.", "Some potatoes, garlic and parsley."],
      ["pepe", "Las papas están muy buenas hoy.", "The potatoes are very good today."]
    ] },
  { id: "20-2", t: "En el súper", en: "At the supermarket", bg: "mercado", cast: ["sofia", "diego"], icon: "bolsa",
    words: [
      ["el queso / el yogur", "cheese / yogurt", "n.", "Compra queso Oaxaca para las quesadillas.", "Buy Oaxaca cheese for the quesadillas.", "leche"],
      ["la mantequilla", "butter", "n.", "No hay mantequilla.", "There's no butter.", "leche"],
      ["la mayonesa / la salsa", "mayonnaise / sauce, salsa", "n.", "¿Quieres salsa verde o roja?", "Do you want green or red salsa?", "olla"],
      ["la pasta / el arroz", "pasta / rice", "n.", "Hoy hay arroz rojo.", "Today there's Mexican red rice.", "olla"],
      ["el chocolate", "chocolate", "n.", "En Oaxaca se toma chocolate caliente.", "In Oaxaca they drink hot chocolate.", "cafe"],
      ["las galletas", "cookies, crackers", "n.", "Los niños quieren galletas.", "The kids want cookies.", ""],
      ["los cereales", "cereal", "n.", "Desayuno cereales con leche.", "I have cereal with milk for breakfast.", "leche"],
      ["el azúcar / la sal", "sugar / salt", "n.", "Pásame la sal, por favor.", "Pass me the salt, please.", ""],
      ["la pimienta", "pepper (spice)", "n.", "Sal y pimienta al gusto.", "Salt and pepper to taste.", ""],
      ["el aceite", "oil", "n.", "Un poco de aceite en la sartén.", "A little oil in the pan.", "olla"],
      ["la harina", "flour", "n.", "Las tortillas de harina son del norte.", "Flour tortillas are from the north.", "pan"],
      ["la mermelada", "jam", "n.", "Pan con mantequilla y mermelada.", "Bread with butter and jam.", "pan"]
    ],
    gram: { t: "Hay / no hay", rule: "Hay = there is/are. To say there's none at all: no hay + noun with no article.",
      ex: [["No hay azúcar.", "There's no sugar."], ["¿Hay galletas?", "Are there any cookies?"], ["Hay mucho aceite.", "There's a lot of oil."]] },
    conv: [
      ["sofia", "¿Qué falta en la lista?", "What's left on the list?"],
      ["diego", "Queso, mantequilla y cereal.", "Cheese, butter and cereal."],
      ["sofia", "No hay azúcar en la casa tampoco.", "There's no sugar at home either."],
      ["diego", "Bueno, y galletas para los niños.", "Okay, and cookies for the kids."]
    ] },
  { id: "20-3", t: "Carne y pescado", en: "Meat and fish", bg: "mercado", cast: ["pepe", "lupita"], icon: "olla",
    words: [
      ["la carne de res", "beef", "n.", "Medio kilo de carne de res, por favor.", "Half a kilo of beef, please.", "", "la carne de ternera"],
      ["la carne de cerdo", "pork", "n.", "Los tacos al pastor son de cerdo.", "Tacos al pastor are pork.", "taco"],
      ["el cordero", "lamb", "n.", "La barbacoa puede ser de cordero.", "Barbacoa can be lamb.", "olla"],
      ["el pollo", "chicken", "n.", "Hoy comemos pollo con mole.", "Today we're having chicken with mole.", "olla"],
      ["el bistec", "steak", "n.", "Un bistec con papas.", "A steak with potatoes.", "", "el filete"],
      ["el jamón", "ham", "n.", "Una torta de jamón.", "A ham torta.", "pan"],
      ["la merluza / el salmón", "hake / salmon", "n.", "El salmón es caro.", "Salmon is expensive.", ""],
      ["la sardina / el atún", "sardine / tuna", "n.", "Hice ensalada de atún.", "I made tuna salad.", ""],
      ["los camarones", "shrimp", "n.", "Un cóctel de camarones, por favor.", "A shrimp cocktail, please.", "", "las gambas"]
    ],
    gram: { t: "De for what it's made of", rule: "Use de to say what food is made of: carne de res, tacos de pollo, cóctel de camarones.",
      ex: [["Quiero tacos de pollo.", "I want chicken tacos."], ["Una torta de jamón.", "A ham torta."], ["Sopa de pescado.", "Fish soup."]] },
    conv: [
      ["pepe", "¿Qué va a llevar, güera?", "What will you have, miss?"],
      ["lupita", "Un kilo de pollo y medio de carne de res.", "A kilo of chicken and half a kilo of beef."],
      ["pepe", "¿No quiere camarones? Están frescos.", "Don't you want shrimp? They're fresh."],
      ["lupita", "Hoy no. Mi novio no come mariscos.", "Not today. My boyfriend doesn't eat seafood."]
    ] },
  { id: "20-4", t: "Algo de tomar", en: "Something to drink", bg: "taqueria", cast: ["diego", "pepe"], icon: "agua",
    words: [
      ["la bebida", "drink", "n.", "¿Qué bebidas tienen?", "What drinks do you have?", "agua"],
      ["con alcohol / sin alcohol", "alcoholic / non-alcoholic", "expr.", "Una cerveza sin alcohol, por favor.", "A non-alcoholic beer, please.", ""],
      ["el hielo", "ice", "n.", "Agua sin hielo, por favor.", "Water without ice, please.", "agua"],
      ["el jugo", "juice", "n.", "Un jugo de naranja.", "An orange juice.", "fruta", "el zumo"],
      ["el té de hierbas", "herbal tea", "n.", "Un té de manzanilla.", "A chamomile tea.", "cafe", "la infusión"],
      ["el ron / la ginebra", "rum / gin", "n.", "¿Una cuba? Es ron con refresco.", "A cuba? It's rum and cola.", ""],
      ["el cava / el champán", "cava / champagne", "n.", "Brindamos con champán.", "We toasted with champagne.", "fiesta"],
      ["la botella / la lata", "bottle / can", "n.", "Una botella de agua y una lata de refresco.", "A bottle of water and a can of soda.", "agua"],
      ["la chela", "beer (slang)", "n.", "¿Vamos por unas chelas?", "Shall we go for some beers?", "", "la caña"],
      ["la copa", "glass (of wine), a drink", "n.", "¿Una copa de vino?", "A glass of wine?", ""],
      ["tomar algo", "to have something (to drink)", "expr.", "¿Vamos a tomar algo después del trabajo?", "Shall we get a drink after work?", "cafe"]
    ],
    conv: [
      ["pepe", "¿Algo de tomar?", "Something to drink?"],
      ["diego", "¿Qué bebidas sin alcohol tienen?", "What non-alcoholic drinks do you have?"],
      ["pepe", "Jugo de naranja, agua de jamaica y refrescos.", "Orange juice, hibiscus water and soft drinks."],
      ["diego", "Un agua de jamaica con hielo, por favor.", "A hibiscus water with ice, please."],
      ["pepe", "¿Grande o chica?", "Large or small?"],
      ["diego", "Grande. ¡Hace mucho calor!", "Large. It's really hot!"]
    ] },
  { id: "20-5", t: "En la cocina", en: "In the kitchen", bg: "casa", cast: ["carmen", "lupita"], icon: "olla",
    words: [
      ["la receta", "recipe", "n.", "¿Me das la receta del mole?", "Can you give me the mole recipe?", "libro"],
      ["el ingrediente", "ingredient", "n.", "El mole tiene muchos ingredientes.", "Mole has lots of ingredients.", "olla"],
      ["cocinar", "to cook", "v.", "Me gusta cocinar los domingos.", "I like to cook on Sundays.", "olla"],
      ["llevar", "to contain (food)", "v.", "¿Qué lleva el pozole?", "What's in pozole?", "olla"],
      ["el plato / el vaso", "plate / glass", "n.", "Pon los platos y los vasos en la mesa.", "Put the plates and glasses on the table.", ""],
      ["la taza", "cup, mug", "n.", "Una taza de café.", "A cup of coffee.", "cafe"],
      ["la servilleta", "napkin", "n.", "Pásame una servilleta.", "Pass me a napkin.", ""],
      ["el pastel", "cake", "n.", "Un pastel de chocolate para el cumpleaños.", "A chocolate cake for the birthday.", "pastel", "la tarta"],
      ["la crema", "cream", "n.", "Tacos dorados con crema.", "Fried tacos with cream.", "leche"],
      ["el helado de fresa / de vainilla", "strawberry / vanilla ice cream", "n.", "Un helado de fresa, por favor.", "A strawberry ice cream, please.", ""],
      ["vegetariano / vegetariana", "vegetarian", "adj.", "Soy vegetariana, no como carne.", "I'm vegetarian, I don't eat meat.", "fruta"],
      ["rico / rica", "tasty, delicious", "adj.", "¡Qué rico huele!", "It smells so good!", "olla"]
    ],
    gram: { t: "Commands with tú", rule: "Recipes and instructions to a friend use the tú command: corta, pon, mezcla, agrega. Pon is irregular (poner).",
      ex: [["Corta la cebolla.", "Cut the onion."], ["Pon el agua a hervir.", "Put the water on to boil."], ["Agrega sal y pimienta.", "Add salt and pepper."]] },
    conv: [
      ["lupita", "¡Qué rico huele! ¿Qué cocinas?", "It smells so good! What are you cooking?"],
      ["carmen", "Pozole, la receta de mi mamá.", "Pozole, my mom's recipe."],
      ["lupita", "¿Qué lleva?", "What's in it?"],
      ["carmen", "Maíz, carne de cerdo, chile y ajo. Hay una versión vegetariana también.", "Hominy, pork, chile and garlic. There's a vegetarian version too."],
      ["lupita", "Pon un plato para mí, por favor.", "Set a plate for me, please."]
    ] },
  { id: "20-6", t: "Comer fuera", en: "Eating out", bg: "taqueria", cast: ["sofia", "pepe"], icon: "taco",
    words: [
      ["la cafetería / la pizzería", "café / pizzeria", "n.", "Hay una cafetería en la esquina.", "There's a café on the corner.", "cafe"],
      ["el restaurante chino / italiano", "Chinese / Italian restaurant", "n.", "Vamos a un restaurante chino.", "Let's go to a Chinese restaurant.", "olla"],
      ["la comida rápida", "fast food", "n.", "No como comida rápida.", "I don't eat fast food.", ""],
      ["el cocinero / el chef", "cook / chef", "n.", "El cocinero es de Puebla.", "The cook is from Puebla.", "olla"],
      ["reservar una mesa", "to book a table", "expr.", "Quiero reservar una mesa para cuatro.", "I want to book a table for four.", "telefono"],
      ["la comida corrida", "set lunch menu (soup, main, dessert)", "n.", "La comida corrida cuesta noventa pesos.", "The set lunch costs ninety pesos.", "olla", "el menú del día / el plato del día"],
      ["la carta", "menu", "n.", "¿Nos trae la carta, por favor?", "Can you bring us the menu, please?", "libro"],
      ["la cuenta", "check, bill", "n.", "La cuenta, por favor.", "The check, please.", "dinero"],
      ["la propina", "tip", "n.", "Dejamos el quince por ciento de propina.", "We left a fifteen percent tip.", "dinero"],
      ["el IVA", "sales tax (VAT)", "n.", "¿El precio incluye IVA?", "Does the price include tax?", "dinero"],
      ["la botana", "snack, appetizer", "n.", "Con la cerveza te dan botana.", "They give you snacks with your beer.", "taco", "la tapa / el aperitivo"],
      ["el plato combinado", "combo plate (Spain)", "n.", "En España, un plato combinado trae carne, papas y huevo.", "In Spain, a combo plate has meat, fries and egg.", "olla"]
    ],
    gram: { t: "Pedir", rule: "Pedir (to order, to ask for) changes e to i: pido, pides, pide, pedimos, piden.",
      ex: [["Siempre pido tacos.", "I always order tacos."], ["¿Qué pides tú?", "What are you ordering?"], ["Pedimos la cuenta.", "We ask for the check."]] },
    conv: [
      ["pepe", "Buenas tardes. ¿Les traigo la carta?", "Good afternoon. Shall I bring you the menu?"],
      ["sofia", "¿Qué tiene la comida corrida hoy?", "What's on the set lunch today?"],
      ["pepe", "Sopa de fideo, pollo con arroz y gelatina.", "Noodle soup, chicken with rice and jello."],
      ["sofia", "Perfecto, la comida corrida, por favor.", "Perfect, the set lunch, please."],
      ["pepe", "Muy bien. ¿Algo de tomar?", "Very good. Anything to drink?"],
      ["sofia", "Agua de horchata. Y después la cuenta, por favor.", "Horchata. And the check afterwards, please."]
    ] }
]},
{ lv: "A2", t: "De compras", en: "Shopping", lessons: [
  { id: "21-1", t: "Las tiendas", en: "Stores", bg: "calle", cast: ["lupita", "diego"], icon: "tienda",
    words: [
      ["el centro comercial", "mall", "n.", "Vamos al centro comercial el domingo.", "Let's go to the mall on Sunday.", "tienda"],
      ["la papelería", "stationery store", "n.", "Compré cuadernos en la papelería.", "I bought notebooks at the stationery store.", "libro"],
      ["la tabaquería", "tobacco shop", "n.", "En España, los timbres se venden en el estanco.", "In Spain, stamps are sold at the tobacco shop.", "tienda", "el estanco"],
      ["la frutería / la carnicería", "fruit shop / butcher shop", "n.", "La carnicería abre a las ocho.", "The butcher shop opens at eight.", "fruta"],
      ["la panadería", "bakery", "n.", "Compro pan dulce en la panadería.", "I buy Mexican sweet bread at the bakery.", "pan"],
      ["la librería", "bookstore", "n.", "La librería tiene libros en español.", "The bookstore has books in Spanish.", "libro"],
      ["la peluquería", "hair salon", "n.", "Tengo cita en la peluquería.", "I have an appointment at the hair salon.", ""],
      ["la tienda de ropa / la tienda de deportes", "clothing / sporting goods store", "n.", "Necesito tenis. Vamos a la tienda de deportes.", "I need sneakers. Let's go to the sporting goods store.", "tienda"],
      ["la tienda de regalos / la tienda de decoración", "gift / home decor store", "n.", "Hay una tienda de regalos en el aeropuerto.", "There's a gift shop at the airport.", "fiesta"],
      ["la tienda de discos", "record store", "n.", "Mi papá compraba vinilos en la tienda de discos.", "My dad used to buy records at the record store.", "musica"],
      ["el puesto de periódicos", "newsstand", "n.", "Compro el periódico en el puesto de la esquina.", "I buy the paper at the newsstand on the corner.", "libro", "el quiosco"],
      ["la agencia de viajes", "travel agency", "n.", "Compramos el viaje en una agencia de viajes.", "We bought the trip at a travel agency.", "boleto"]
    ],
    gram: { t: "-ería = store", rule: "Many store names end in -ería: pan → panadería, papel → papelería, carne → carnicería.",
      ex: [["Voy a la panadería.", "I'm going to the bakery."], ["La papelería está cerrada.", "The stationery store is closed."], ["¿Hay una carnicería cerca?", "Is there a butcher shop nearby?"]] },
    conv: [
      ["diego", "¿Adónde vas?", "Where are you going?"],
      ["lupita", "A la papelería y luego a la panadería.", "To the stationery store and then the bakery."],
      ["diego", "¿Pasas por la librería? Necesito un diccionario.", "Will you stop by the bookstore? I need a dictionary."],
      ["lupita", "Está en el centro comercial. Vamos juntos.", "It's at the mall. Let's go together."]
    ] },
  { id: "21-2", t: "Comprar y pagar", en: "Buying and paying", bg: "mercado", cast: ["sofia", "pepe"], icon: "dinero",
    words: [
      ["el frutero / el carnicero", "fruit seller / butcher", "n.", "El carnicero me conoce desde niña.", "The butcher has known me since I was a girl.", ""],
      ["el panadero / la panadera", "baker", "n.", "El panadero empieza a las cuatro de la mañana.", "The baker starts at four in the morning.", "pan"],
      ["el dependiente / la dependienta", "store clerk", "n.", "La dependienta me ayudó mucho.", "The clerk helped me a lot.", "tienda"],
      ["el cliente / la clienta", "customer, client", "n.", "Es cliente de esta tienda desde hace años.", "She's been a customer of this store for years.", "bolsa"],
      ["devolver", "to return (an item)", "v.", "Quiero devolver estos zapatos.", "I want to return these shoes.", "bolsa"],
      ["cambiar", "to exchange", "v.", "¿Puedo cambiar la talla?", "Can I exchange the size?", "bolsa"],
      ["ir de tiendas / ir de compras", "to go shopping", "expr.", "Los sábados vamos de compras.", "On Saturdays we go shopping.", "bolsa"],
      ["hacer el súper", "to do the grocery shopping", "expr.", "Hago el súper los domingos.", "I do the grocery shopping on Sundays.", "bolsa", "hacer la compra"],
      ["pagar en efectivo", "to pay in cash", "expr.", "En el mercado pago en efectivo.", "At the market I pay cash.", "dinero"],
      ["el cajero automático", "ATM", "n.", "¿Hay un cajero automático cerca?", "Is there an ATM nearby?", "dinero"],
      ["la moneda / el billete", "coin / bill", "n.", "No tengo monedas, solo un billete de doscientos.", "I don't have coins, only a 200 bill.", "dinero"],
      ["el cheque", "check (bank)", "n.", "Ya casi nadie paga con cheque.", "Hardly anyone pays by check anymore.", "dinero"]
    ],
    gram: { t: "Devolver, o → ue", rule: "Devolver and volver change o to ue: devuelvo, devuelves, devuelve.",
      ex: [["Devuelvo la camisa mañana.", "I'm returning the shirt tomorrow."], ["¿Me devuelve el cambio?", "Can you give me my change?"], ["No devolvemos dinero.", "We don't give refunds."]] },
    conv: [
      ["sofia", "Buenas. Quiero devolver esta blusa.", "Hi. I want to return this blouse."],
      ["pepe", "¿Tiene el ticket?", "Do you have the receipt?"],
      ["sofia", "Sí, aquí está. Pagué en efectivo.", "Yes, here it is. I paid cash."],
      ["pepe", "No devolvemos dinero, pero la puede cambiar.", "We don't give refunds, but you can exchange it."],
      ["sofia", "Bueno, la cambio por una talla más grande.", "Okay, I'll exchange it for a bigger size."]
    ] },
  { id: "21-3", t: "¿Cuánto le doy?", en: "How much do you want?", bg: "mercado", cast: ["carmen", "pepe"], icon: "bolsa",
    words: [
      ["la docena", "dozen", "n.", "Una docena de huevos, por favor.", "A dozen eggs, please.", ""],
      ["el paquete", "package", "n.", "Un paquete de harina.", "A package of flour.", "bolsa"],
      ["la caja", "box", "n.", "Una caja de galletas.", "A box of cookies.", ""],
      ["el bote", "jar, tub", "n.", "Un bote de mermelada.", "A jar of jam.", ""],
      ["la lata", "can", "n.", "Dos latas de atún.", "Two cans of tuna.", ""],
      ["el litro", "liter", "n.", "Un litro de leche.", "A liter of milk.", "leche"],
      ["el kilo / medio kilo", "kilo / half a kilo", "n.", "Medio kilo de queso.", "Half a kilo of cheese.", ""],
      ["un cuarto de kilo", "a quarter kilo", "expr.", "Un cuarto de kilo de jamón.", "A quarter kilo of ham.", ""],
      ["los gramos", "grams", "n.", "Doscientos gramos de jamón, por favor.", "Two hundred grams of ham, please.", ""],
      ["pesar", "to weigh", "v.", "¿Me pesa estas manzanas?", "Can you weigh these apples for me?", "manzana"],
      ["la lista del súper", "shopping list", "n.", "Hago la lista del súper en el celular.", "I make my shopping list on my phone.", "telefono", "la lista de la compra"],
      ["un vaso de / una barra de", "a glass of / a loaf (stick) of", "expr.", "Un vaso de leche y una barra de pan.", "A glass of milk and a loaf of bread.", "pan"]
    ],
    conv: [
      ["pepe", "¿Qué le damos hoy, doña Carmen?", "What can we get you today, doña Carmen?"],
      ["carmen", "Una docena de huevos y un litro de leche.", "A dozen eggs and a liter of milk."],
      ["pepe", "¿Algo más?", "Anything else?"],
      ["carmen", "Un cuarto de kilo de jamón y dos latas de chiles.", "A quarter kilo of ham and two cans of chiles."],
      ["pepe", "Se lo peso. Son doscientos cincuenta gramos.", "Let me weigh it. It's two hundred fifty grams."]
    ] },
  { id: "21-4", t: "La ropa", en: "Clothes", bg: "mercado", cast: ["lupita", "sofia"], icon: "tienda",
    words: [
      ["la blusa", "blouse", "n.", "Esta blusa es de algodón.", "This blouse is cotton.", ""],
      ["la pijama", "pajamas", "n.", "Me pongo la pijama a las diez.", "I put my pajamas on at ten.", "cama", "el pijama"],
      ["la chamarra", "jacket", "n.", "Lleva chamarra, hace frío.", "Take a jacket, it's cold.", "nieve", "la cazadora"],
      ["el traje / la corbata", "suit / tie", "n.", "Para la boda llevo traje y corbata.", "For the wedding I'm wearing a suit and tie.", ""],
      ["el uniforme", "uniform", "n.", "En mi trabajo llevamos uniforme.", "At my job we wear a uniform.", ""],
      ["los guantes / la bufanda", "gloves / scarf", "n.", "En Chicago necesitas guantes y bufanda.", "In Chicago you need gloves and a scarf.", "nieve"],
      ["las botas", "boots", "n.", "Compré botas para la nieve.", "I bought snow boots.", "nieve"],
      ["las medias", "pantyhose, tights", "n.", "Con la falda llevo medias negras.", "With the skirt I wear black tights.", ""],
      ["los calcetines", "socks", "n.", "Necesito calcetines nuevos.", "I need new socks.", ""],
      ["la ropa de hombre / la ropa de mujer / la ropa de niño", "men's / women's / children's clothing", "n.", "La ropa de mujer está en el segundo piso.", "Women's clothing is on the second floor.", "tienda"]
    ],
    gram: { t: "Ponerse and quitarse", rule: "Ponerse (to put on) and quitarse (to take off) are reflexive: me pongo la chamarra, me quito los zapatos.",
      ex: [["Me pongo la bufanda.", "I put on my scarf."], ["Quítate los zapatos.", "Take off your shoes."], ["Se puso el uniforme.", "He put on his uniform."]] },
    conv: [
      ["sofia", "¿Qué te vas a poner para la entrevista?", "What are you going to wear for the interview?"],
      ["lupita", "Una blusa blanca y pantalón negro.", "A white blouse and black pants."],
      ["sofia", "¿Y si hace frío?", "And if it's cold?"],
      ["lupita", "Me pongo la chamarra gris y botas.", "I'll put on my gray jacket and boots."]
    ] },
  { id: "21-5", t: "¿Me lo pruebo?", en: "Can I try it on?", bg: "mercado", cast: ["sofia", "pepe"], icon: "bolsa",
    words: [
      ["probarse", "to try on", "v.", "¿Me puedo probar este vestido?", "Can I try on this dress?", ""],
      ["el probador", "fitting room", "n.", "Los probadores están al fondo.", "The fitting rooms are at the back.", ""],
      ["ponerse / quitarse", "to put on / to take off", "v.", "Me quito la chamarra para probarme el suéter.", "I take off my jacket to try on the sweater.", ""],
      ["la talla única", "one size fits all", "n.", "Este suéter es talla única.", "This sweater is one size.", "#M"],
      ["mediano / mediana", "medium", "adj.", "¿Lo tiene en mediano?", "Do you have it in medium?", "#M"],
      ["angosto / angosta", "narrow, tight", "adj.", "El pantalón está muy angosto.", "The pants are too tight.", "", "estrecho"],
      ["ancho / ancha", "wide, loose", "adj.", "Me gusta la ropa ancha.", "I like loose clothes.", ""],
      ["el brasier", "bra", "n.", "La ropa interior está aquí: brasieres y calzones.", "Underwear is here: bras and panties.", "", "el sujetador"],
      ["los calzones", "underwear, panties", "n.", "Compré calzones y calcetines.", "I bought underwear and socks.", "", "las bragas / los calzoncillos"],
      ["el traje de baño", "swimsuit", "n.", "Necesito un traje de baño para la playa.", "I need a swimsuit for the beach.", "sol", "el bañador"],
      ["el bikini", "bikini", "n.", "Este bikini está en oferta.", "This bikini is on sale.", "sol", "el biquini"]
    ],
    gram: { t: "Lo / la with probarse", rule: "Pronouns go before the verb or on the end of an infinitive: me lo pruebo / quiero probármelo.",
      ex: [["¿Me lo puedo probar?", "Can I try it on?"], ["Quiero probármela.", "I want to try it on."], ["Me los llevo.", "I'll take them."]] },
    conv: [
      ["sofia", "Disculpe, ¿dónde están los probadores?", "Excuse me, where are the fitting rooms?"],
      ["pepe", "Al fondo, a la derecha.", "At the back, on the right."],
      ["sofia", "Este pantalón me queda angosto. ¿Lo tiene en mediano?", "These pants are tight on me. Do you have them in medium?"],
      ["pepe", "Sí, aquí está. ¿Se lo prueba?", "Yes, here they are. Will you try them on?"],
      ["sofia", "Sí. Y también este traje de baño.", "Yes. And this swimsuit too."]
    ] }
]},
{ lv: "A2", t: "La vivienda", en: "Housing", lessons: [
  { id: "22-1", t: "Buscar departamento", en: "Looking for an apartment", bg: "calle", cast: ["diego", "pepe"], icon: "casa",
    words: [
      ["buscar departamento", "to look for an apartment", "expr.", "Estoy buscando departamento cerca del trabajo.", "I'm looking for an apartment near work.", "casa", "buscar piso"],
      ["el alojamiento", "lodging, accommodation", "n.", "La escuela te ayuda a buscar alojamiento.", "The school helps you find accommodation.", "casa"],
      ["compartir departamento", "to share an apartment", "expr.", "Comparto departamento con dos amigos.", "I share an apartment with two friends.", "casa", "compartir piso"],
      ["el departamento de estudiantes", "student apartment", "n.", "Viví en un departamento de estudiantes.", "I lived in a student apartment.", "casa", "el piso de estudiantes"],
      ["mudarse", "to move (house)", "v.", "Nos mudamos el mes pasado.", "We moved last month.", "casa", "cambiarse de casa"],
      ["el dueño / la dueña", "owner, landlord", "n.", "El dueño vive en el primer piso.", "The landlord lives on the first floor.", "", "el propietario"],
      ["amueblado / sin amueblar", "furnished / unfurnished", "adj.", "El departamento está amueblado.", "The apartment is furnished.", "cama"],
      ["en buen estado / en mal estado", "in good / bad condition", "expr.", "La casa está en buen estado.", "The house is in good condition.", "casa"],
      ["los metros cuadrados", "square meters", "n.", "Tiene ochenta metros cuadrados.", "It's eighty square meters.", ""],
      ["un departamento de dos recámaras", "a two-bedroom apartment", "expr.", "Busco un departamento de dos recámaras.", "I'm looking for a two-bedroom apartment.", "cama", "un piso de dos habitaciones"]
    ],
    gram: { t: "Estar + gerundio", rule: "Something happening now: estar + -ando / -iendo. Estoy buscando, estamos viviendo.",
      ex: [["Estoy buscando departamento.", "I'm looking for an apartment."], ["¿Qué estás haciendo?", "What are you doing?"], ["Estamos viviendo con mis papás.", "We're living with my parents."]] },
    conv: [
      ["diego", "Buenas tardes. Vi el anuncio del departamento.", "Good afternoon. I saw the ad for the apartment."],
      ["pepe", "Sí, soy el dueño. Tiene dos recámaras.", "Yes, I'm the owner. It has two bedrooms."],
      ["diego", "¿Está amueblado?", "Is it furnished?"],
      ["pepe", "No, está sin amueblar, pero está en muy buen estado.", "No, it's unfurnished, but it's in very good condition."],
      ["diego", "¿Cuántos metros cuadrados tiene?", "How many square meters is it?"],
      ["pepe", "Setenta. Es ideal para compartir departamento.", "Seventy. It's ideal for sharing."]
    ] },
  { id: "22-2", t: "Mi nueva casa", en: "My new home", bg: "casa", cast: ["sofia", "lupita"], icon: "casa",
    words: [
      ["el edificio", "building", "n.", "Vivo en un edificio de cinco pisos.", "I live in a five-story building.", "casa"],
      ["la casa sola", "detached house", "n.", "Mis papás viven en una casa sola con jardín.", "My parents live in a detached house with a yard.", "casa", "el chalé"],
      ["el pasillo", "hallway", "n.", "El baño está al final del pasillo.", "The bathroom is at the end of the hall.", ""],
      ["el piso", "floor", "n.", "El piso es de madera.", "The floor is wood.", "", "el suelo"],
      ["el techo / la pared", "ceiling, roof / wall", "n.", "Las paredes son blancas.", "The walls are white.", ""],
      ["el cuarto de visitas", "guest room", "n.", "Tenemos un cuarto de visitas.", "We have a guest room.", "cama", "el dormitorio de invitados"],
      ["la vista", "view", "n.", "Desde la terraza hay una vista muy bonita.", "From the terrace there's a very pretty view.", "sol", "las vistas"],
      ["la luz", "light", "n.", "La sala tiene mucha luz.", "The living room gets lots of light.", "sol"],
      ["el ruido", "noise", "n.", "En la noche hay mucho ruido en la calle.", "At night there's a lot of street noise.", ""],
      ["las afueras", "outskirts", "n.", "Vivimos en las afueras de la ciudad.", "We live on the outskirts of the city.", "mapa"]
    ],
    gram: { t: "Hay vs está", rule: "Hay introduces something new (hay un pasillo). Está locates something already known (el baño está al final).",
      ex: [["Hay mucha luz.", "There's a lot of light."], ["La cocina está a la derecha.", "The kitchen is on the right."], ["¿Hay cuarto de visitas?", "Is there a guest room?"]] },
    conv: [
      ["lupita", "¡Qué bonita tu casa nueva!", "Your new house is so pretty!"],
      ["sofia", "Gracias. Tiene mucha luz y una vista increíble.", "Thanks. It gets lots of light and has an amazing view."],
      ["lupita", "¿Y hay ruido?", "And is it noisy?"],
      ["sofia", "No, porque está en las afueras.", "No, because it's on the outskirts."],
      ["lupita", "¿Tienes cuarto de visitas?", "Do you have a guest room?"],
      ["sofia", "Sí, al final del pasillo. ¡Ven cuando quieras!", "Yes, at the end of the hall. Come whenever you want!"]
    ] },
  { id: "22-3", t: "Los quehaceres", en: "Chores", bg: "casa", cast: ["mateo", "carmen"], icon: "casa",
    words: [
      ["limpiar", "to clean", "v.", "Los sábados limpio la casa.", "On Saturdays I clean the house.", "casa"],
      ["limpio / sucio", "clean / dirty", "adj.", "La cocina está sucia.", "The kitchen is dirty.", ""],
      ["lavar los platos", "to wash the dishes", "expr.", "Yo cocino y tú lavas los platos.", "I cook and you wash the dishes.", ""],
      ["lavar la ropa", "to do the laundry", "expr.", "Lavo la ropa los domingos.", "I do laundry on Sundays.", ""],
      ["la estufa eléctrica / la estufa de gas", "electric / gas stove", "n.", "En México casi todas las estufas son de gas.", "In Mexico almost all stoves are gas.", "olla", "la cocina eléctrica / la cocina de gas"],
      ["el refrigerador", "refrigerator", "n.", "La leche está en el refrigerador.", "The milk is in the fridge.", "leche", "la nevera"],
      ["la lavadora", "washing machine", "n.", "La lavadora no funciona.", "The washing machine doesn't work.", ""],
      ["el lavatrastes", "dishwasher", "n.", "No tenemos lavatrastes.", "We don't have a dishwasher.", "", "el lavaplatos"],
      ["el microondas", "microwave", "n.", "Calienta la comida en el microondas.", "Heat the food in the microwave.", ""]
    ],
    gram: { t: "Tener que + infinitive", rule: "Tener que + verb = to have to: tengo que limpiar.",
      ex: [["Tengo que lavar la ropa.", "I have to do laundry."], ["Tienes que limpiar tu cuarto.", "You have to clean your room."], ["Tenemos que comprar un refrigerador.", "We have to buy a fridge."]] },
    conv: [
      ["carmen", "Mateo, la cocina está muy sucia.", "Mateo, the kitchen is very dirty."],
      ["mateo", "Ya sé, mamá. Ahorita lavo los platos.", "I know, Mom. I'll wash the dishes in a bit."],
      ["carmen", "Y tienes que lavar tu ropa.", "And you have to do your laundry."],
      ["mateo", "La lavadora no funciona otra vez.", "The washing machine isn't working again."],
      ["carmen", "¡Ay! Mañana llamo al técnico.", "Oh! Tomorrow I'll call the repairman."]
    ] }
]},
{ lv: "A2", t: "Los estudios", en: "Studies", lessons: [
  { id: "23-1", t: "Inscribirse", en: "Signing up", bg: "aula", cast: ["lupita", "carmen"], icon: "escuela",
    words: [
      ["la academia", "private school, academy", "n.", "Estudio inglés en una academia.", "I study English at an academy.", "escuela"],
      ["la escuela de idiomas", "language school", "n.", "Hay una escuela de idiomas en el centro.", "There's a language school downtown.", "escuela"],
      ["la biblioteca pública", "public library", "n.", "La biblioteca pública es gratis.", "The public library is free.", "libro"],
      ["el salón de clases", "classroom", "n.", "El salón de clases está en el segundo piso.", "The classroom is on the second floor.", "escuela", "el aula"],
      ["el alumno / la alumna", "student, pupil", "n.", "La maestra tiene veinte alumnos.", "The teacher has twenty students.", "escuela"],
      ["la preparatoria", "high school", "n.", "Mi sobrino está en la preparatoria.", "My nephew is in high school.", "escuela", "el instituto"],
      ["el programa del curso", "course syllabus", "n.", "Lean el programa del curso.", "Read the course syllabus.", "libro"],
      ["la inscripción", "registration, enrollment fee", "n.", "La inscripción cuesta quinientos pesos.", "Registration costs five hundred pesos.", "dinero", "la matrícula"],
      ["tomar un curso", "to take a course", "expr.", "Quiero tomar un curso de cocina.", "I want to take a cooking class.", "libro", "hacer un curso"],
      ["dar clases", "to teach (classes)", "expr.", "Mi tía da clases de piano.", "My aunt teaches piano lessons.", "musica"],
      ["la credencial de estudiante", "student ID card", "n.", "Con la credencial de estudiante hay descuento.", "With a student ID there's a discount.", "boleto", "la tarjeta de estudiante"],
      ["la credencial de la biblioteca", "library card", "n.", "Saqué mi credencial de la biblioteca.", "I got my library card.", "boleto", "la tarjeta de la biblioteca"]
    ],
    gram: { t: "Querer / poder + infinitive", rule: "Quiero, puedo, necesito + infinitive: quiero tomar un curso, ¿puedo pagar la inscripción aquí?",
      ex: [["Quiero inscribirme.", "I want to sign up."], ["¿Puedo pagar con tarjeta?", "Can I pay by card?"], ["Necesito sacar mi credencial.", "I need to get my ID."]] },
    conv: [
      ["lupita", "Buenas tardes. Quiero tomar un curso de francés.", "Good afternoon. I want to take a French course."],
      ["carmen", "Muy bien. ¿Ya tiene el programa del curso?", "Very good. Do you have the syllabus yet?"],
      ["lupita", "Sí. ¿Cuánto cuesta la inscripción?", "Yes. How much is registration?"],
      ["carmen", "Quinientos pesos. Con credencial de estudiante, cuatrocientos.", "Five hundred pesos. With a student ID, four hundred."],
      ["lupita", "Perfecto. ¿Y dónde es el salón de clases?", "Perfect. And where is the classroom?"]
    ] },
  { id: "23-2", t: "Materias y exámenes", en: "Subjects and exams", bg: "aula", cast: ["mateo", "lupita"], icon: "libro",
    words: [
      ["las matemáticas", "math", "n.", "Las matemáticas son difíciles para mí.", "Math is hard for me.", "#2+2"],
      ["la historia", "history", "n.", "Me encanta la historia de México.", "I love Mexican history.", "libro"],
      ["la medicina / el derecho", "medicine / law (field of study)", "n.", "Mi prima estudia derecho.", "My cousin studies law.", "libro"],
      ["la ciencia / la tecnología / el científico", "science / technology / scientist", "n.", "Mi hermana es científica: le interesan la ciencia y la tecnología.", "My sister is a scientist: she's interested in science and technology.", "laptop"],
      ["la computación", "computer science, IT", "n.", "Estudio computación en línea.", "I study computer science online.", "laptop", "la informática"],
      ["el diploma / el certificado", "diploma / certificate", "n.", "Al final del curso te dan un certificado.", "At the end of the course they give you a certificate.", "boleto"],
      ["pasar", "to pass (an exam)", "v.", "¡Pasé el examen!", "I passed the exam!", "boleto", "aprobar"],
      ["reprobar", "to fail (an exam)", "v.", "Reprobé matemáticas.", "I failed math.", "boleto", "suspender"]
    ],
    gram: { t: "Preterite: -ar verbs", rule: "Pasé, pasaste, pasó, pasamos, pasaron. Accent on the last syllable for yo and él/ella.",
      ex: [["Pasé el examen.", "I passed the exam."], ["¿Reprobaste?", "Did you fail?"], ["Estudiamos toda la noche.", "We studied all night."]] },
    conv: [
      ["lupita", "¿Cómo te fue en el examen de historia?", "How did your history exam go?"],
      ["mateo", "¡Pasé! Pero reprobé matemáticas.", "I passed! But I failed math."],
      ["lupita", "¡Ay, no! ¿Puedes repetir el examen?", "Oh no! Can you retake the exam?"],
      ["mateo", "Sí, en junio. Voy a estudiar mucho.", "Yes, in June. I'm going to study a lot."]
    ] },
  { id: "23-3", t: "En clase", en: "In class", bg: "aula", cast: ["carmen", "diego"], icon: "libro",
    words: [
      ["preguntar / contestar", "to ask / to answer", "v.", "Si no entiendes, pregunta.", "If you don't understand, ask.", "#¿?"],
      ["hacer una pregunta", "to ask a question", "expr.", "¿Puedo hacer una pregunta?", "Can I ask a question?", "#¿?"],
      ["la respuesta", "answer", "n.", "Escriban la respuesta correcta.", "Write the correct answer.", "#✓"],
      ["completar", "to complete, to fill in", "v.", "Completen las frases.", "Complete the sentences.", "libro"],
      ["dibujar / el dibujo", "to draw / drawing", "v.", "Dibujen su casa. Hagan un dibujo.", "Draw your house. Make a drawing.", "casa"],
      ["jugar / adivinar", "to play / to guess", "v.", "Vamos a jugar: adivinen la palabra.", "Let's play: guess the word.", ""],
      ["la redacción", "composition, essay", "n.", "Para mañana, una redacción sobre tu familia.", "For tomorrow, an essay about your family.", "libro"],
      ["memorizar", "to memorize", "v.", "Memoricen los verbos irregulares.", "Memorize the irregular verbs.", "libro"],
      ["la regla / la fórmula", "rule; ruler / formula", "n.", "Aprende la regla y usa la fórmula.", "Learn the rule and use the formula.", ""],
      ["repasar", "to review", "v.", "Hoy vamos a repasar la unidad cinco.", "Today we're going to review unit five.", "libro"],
      ["cometer un error", "to make a mistake", "expr.", "No pasa nada si cometes un error.", "It's fine if you make a mistake.", ""],
      ["la letra", "handwriting; letter", "n.", "Tienes muy buena letra.", "You have very nice handwriting.", "#Aa"],
      ["el cuaderno / la hoja", "notebook / sheet of paper", "n.", "Saquen una hoja del cuaderno.", "Take out a sheet from your notebook.", "libro"]
    ],
    gram: { t: "Ustedes commands in class", rule: "-ar verbs end in -en (completen, dibujen), -er/-ir verbs in -an (lean, escriban). Memorizar → memoricen.",
      ex: [["Completen el ejercicio.", "Complete the exercise."], ["Escriban una redacción.", "Write an essay."], ["Repasen la lección.", "Review the lesson."]] },
    conv: [
      ["carmen", "Hoy vamos a repasar la unidad cuatro.", "Today we're going to review unit four."],
      ["diego", "Maestra, ¿puedo hacer una pregunta?", "Teacher, can I ask a question?"],
      ["carmen", "Claro, Diego.", "Of course, Diego."],
      ["diego", "¿La redacción es para mañana?", "Is the essay due tomorrow?"],
      ["carmen", "No, para el lunes. Y memoricen los verbos.", "No, for Monday. And memorize the verbs."]
    ] }
]}
);
