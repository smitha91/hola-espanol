// Course content. Word: [spanish, english, part of speech, example es, example en, picture]
// Conversation line: [speaker, spanish, english]

const LEVELS = [
  ['A1', 'You can understand and use familiar everyday expressions and very basic phrases for concrete needs.'],
  ['A2', 'You can understand sentences and frequent expressions about things that matter most day to day.'],
  ['B1', 'You can understand the main points of clear standard input on familiar matters at work, school and leisure.'],
  ['B2', 'You can understand the main ideas of complex text on both concrete and abstract topics.'],
  ['C1', 'You can understand a wide range of demanding, longer texts and recognise implicit meaning.'],
  ['C2', 'You can understand with ease virtually everything heard or read.']
];

const UNITS = [
{ t: 'Saludos', en: 'Greetings', lessons: [
  { id: '1-1', t: '¡Hola!', en: 'Hello!', bg: 'plaza', cast: ['sofia', 'diego'], icon: 'wave',
    words: [
      ['hola', 'hello', 'interj.', '¡Hola, Diego!', 'Hi, Diego!', 'wave'],
      ['buenos días', 'good morning', 'expr.', 'Buenos días, señora.', "Good morning, ma'am.", 'sol'],
      ['buenas noches', 'good night', 'expr.', 'Buenas noches, mamá.', 'Good night, Mom.', 'luna'],
      ['adiós', 'goodbye', 'interj.', 'Adiós, hasta mañana.', 'Bye, see you tomorrow.', 'wave'],
      ['¿cómo estás?', 'how are you?', 'expr.', 'Hola, Sofía, ¿cómo estás?', 'Hi, Sofía, how are you?', '#¿?'],
      ['bien', 'well, fine', 'adv.', 'Estoy bien, gracias.', "I'm fine, thanks.", '#¡Bien!']
    ],
    gram: { t: 'Estar: ¿cómo estás?', rule: 'Use estar to say how you feel right now: yo estoy, tú estás, él/ella está.',
      ex: [['Estoy bien.', "I'm fine."], ['¿Cómo estás tú?', 'How are you?'], ['Sofía está muy bien.', 'Sofía is very well.']] },
    conv: [
      ['diego', '¡Hola, Sofía! Buenos días.', 'Hi, Sofía! Good morning.'],
      ['sofia', 'Buenos días, Diego. ¿Cómo estás?', 'Good morning, Diego. How are you?'],
      ['diego', 'Estoy bien, gracias. ¿Y tú?', "I'm fine, thanks. And you?"],
      ['sofia', 'Muy bien.', 'Very well.'],
      ['diego', 'Bueno, adiós. ¡Hasta luego!', 'Well, bye. See you later!'],
      ['sofia', '¡Adiós, Diego!', 'Bye, Diego!']
    ] },
  { id: '1-2', t: 'Me llamo…', en: 'My name is…', bg: 'plaza', cast: ['mateo', 'lupita'], icon: '#Hola',
    words: [
      ['me llamo', 'my name is', 'expr.', 'Me llamo Sofía.', 'My name is Sofía.', '#Sofía'],
      ['¿cómo te llamas?', "what's your name?", 'expr.', 'Hola, ¿cómo te llamas?', "Hi, what's your name?", '#¿?'],
      ['mucho gusto', 'nice to meet you', 'expr.', 'Mucho gusto, Mateo.', 'Nice to meet you, Mateo.', 'wave'],
      ['nombre', 'name', 'n.', 'Mi nombre es Diego.', 'My name is Diego.', '#Diego'],
      ['apellido', 'last name', 'n.', 'Mi apellido es García.', 'My last name is García.', '#García']
    ],
    gram: { t: 'Llamarse', rule: 'To give a name, use llamarse: (yo) me llamo, (tú) te llamas, (él/ella) se llama.',
      ex: [['Me llamo Lupita.', 'My name is Lupita.'], ['¿Cómo te llamas?', "What's your name?"], ['Él se llama Mateo.', 'His name is Mateo.']] },
    conv: [
      ['mateo', 'Hola, ¿cómo te llamas?', "Hi, what's your name?"],
      ['lupita', 'Me llamo Lupita. ¿Y tú?', 'My name is Lupita. And you?'],
      ['mateo', 'Me llamo Mateo. Mucho gusto.', 'My name is Mateo. Nice to meet you.'],
      ['lupita', 'Mucho gusto, Mateo.', 'Nice to meet you, Mateo.'],
      ['mateo', '¿Cuál es tu apellido?', "What's your last name?"],
      ['lupita', 'Mi apellido es Hernández.', 'My last name is Hernández.']
    ] },
  { id: '1-3', t: '¿De dónde eres?', en: 'Where are you from?', bg: 'plaza', cast: ['sofia', 'mateo'], icon: 'pin',
    words: [
      ['¿de dónde eres?', 'where are you from?', 'expr.', 'Diego, ¿de dónde eres?', 'Diego, where are you from?', 'pin'],
      ['soy de', "I'm from", 'expr.', 'Soy de Guadalajara.', "I'm from Guadalajara.", 'pin'],
      ['México', 'Mexico', 'n.', 'Lupita es de México.', 'Lupita is from Mexico.', '#México'],
      ['Estados Unidos', 'United States', 'n.', 'Vivo en Estados Unidos.', 'I live in the United States.', '#EE. UU.'],
      ['mexicano / mexicana', 'Mexican', 'adj.', 'Sofía es mexicana.', 'Sofía is Mexican.', '#MX'],
      ['vivir en', 'to live in', 'v.', 'Vivo en Chicago.', 'I live in Chicago.', 'casa']
    ],
    gram: { t: 'Ser + de', rule: 'Use ser to say where someone is from: yo soy, tú eres, él/ella es + de + place.',
      ex: [['Soy de Chicago.', "I'm from Chicago."], ['¿De dónde eres tú?', 'Where are you from?'], ['Diego es de Puebla.', 'Diego is from Puebla.']] },
    conv: [
      ['mateo', 'Sofía, ¿de dónde eres?', 'Sofía, where are you from?'],
      ['sofia', 'Soy de Monterrey, en México.', "I'm from Monterrey, in Mexico."],
      ['mateo', '¿Y dónde vives ahora?', 'And where do you live now?'],
      ['sofia', 'Vivo en Chicago. ¿Y tú?', 'I live in Chicago. And you?'],
      ['mateo', 'Soy de Chicago, pero mi familia es de Oaxaca.', "I'm from Chicago, but my family is from Oaxaca."],
      ['sofia', '¡Qué padre!', 'How cool!']
    ] }
]},
{ t: 'La familia y la casa', en: 'Family and home', lessons: [
  { id: '2-1', t: 'Mi familia', en: 'My family', bg: 'casa', cast: ['sofia', 'lupita'], icon: 'foto',
    words: [
      ['mamá', 'mom', 'n.', 'Mi mamá se llama Carmen.', "My mom's name is Carmen.", 'foto'],
      ['papá', 'dad', 'n.', 'Mi papá es de Puebla.', 'My dad is from Puebla.', 'foto'],
      ['hermano', 'brother', 'n.', 'Tengo un hermano.', 'I have a brother.', 'foto'],
      ['hermana', 'sister', 'n.', 'Mi hermana vive en Texas.', 'My sister lives in Texas.', 'foto'],
      ['hijo / hija', 'son / daughter', 'n.', 'Su hija se llama Ana.', "Her daughter's name is Ana.", 'foto'],
      ['abuela', 'grandmother', 'n.', 'Mi abuela hace tamales.', 'My grandmother makes tamales.', 'foto']
    ],
    gram: { t: 'Mi, tu, su', rule: 'Mi = my, tu = your, su = his/her/their. Add -s for more than one: mis hermanos.',
      ex: [['Mi mamá es maestra.', 'My mom is a teacher.'], ['¿Cómo se llama tu papá?', "What's your dad's name?"], ['Sus hermanos viven en Chicago.', 'Her brothers live in Chicago.']] },
    conv: [
      ['sofia', 'Mira, esta es una foto de mi familia.', 'Look, this is a photo of my family.'],
      ['lupita', '¡Qué bonita! ¿Quién es ella?', 'How nice! Who is she?'],
      ['sofia', 'Es mi mamá. Se llama Carmen.', "That's my mom. Her name is Carmen."],
      ['lupita', '¿Y él? ¿Es tu hermano?', 'And him? Is he your brother?'],
      ['sofia', 'Sí, es mi hermano Diego.', "Yes, he's my brother Diego."],
      ['lupita', '¿Tienes hermanas?', 'Do you have sisters?'],
      ['sofia', 'No, solo tengo un hermano.', 'No, I only have one brother.']
    ] },
  { id: '2-2', t: '¿Cuántos años tienes?', en: 'How old are you?', bg: 'casa', cast: ['carmen', 'diego'], icon: 'pastel',
    words: [
      ['uno, dos, tres', 'one, two, three', 'num.', 'Tengo tres hermanos.', 'I have three siblings.', '#1 2 3'],
      ['cuatro, cinco', 'four, five', 'num.', 'Mi hijo tiene cinco años.', 'My son is five years old.', '#4 5'],
      ['diez', 'ten', 'num.', 'Son diez pesos.', "It's ten pesos.", '#10'],
      ['veinte', 'twenty', 'num.', 'Mi hermana tiene veinte años.', 'My sister is twenty.', '#20'],
      ['treinta y cinco', 'thirty-five', 'num.', 'Tengo treinta y cinco años.', "I'm thirty-five.", '#35'],
      ['años', 'years (old)', 'n.', '¿Cuántos años tienes?', 'How old are you?', 'pastel']
    ],
    gram: { t: 'Tener + años', rule: 'Spanish uses tener (to have) for age: tengo, tienes, tiene + number + años.',
      ex: [['Tengo treinta años.', "I'm thirty."], ['¿Cuántos años tienes?', 'How old are you?'], ['Su hijo tiene diez años.', 'Her son is ten.']] },
    conv: [
      ['carmen', 'Diego, ¿cuántos años tienes?', 'Diego, how old are you?'],
      ['diego', 'Tengo veintiocho años. ¿Y usted?', "I'm twenty-eight. And you?"],
      ['carmen', '¡Ay, tengo sesenta!', "Oh, I'm sixty!"],
      ['diego', '¿Y su nieta?', 'And your granddaughter?'],
      ['carmen', 'Mi nieta Ana tiene cinco años.', 'My granddaughter Ana is five.'],
      ['diego', '¡Qué bonito!', 'How lovely!']
    ] },
  { id: '2-3', t: 'Mi casa', en: 'My home', bg: 'casa', cast: ['sofia', 'mateo'], icon: 'casa',
    words: [
      ['casa', 'house', 'n.', 'Mi casa es pequeña.', 'My house is small.', 'casa'],
      ['cocina', 'kitchen', 'n.', 'La cocina es muy bonita.', 'The kitchen is very pretty.', 'olla'],
      ['cuarto', 'bedroom, room', 'n.', 'Mi cuarto tiene una ventana.', 'My room has a window.', 'cama'],
      ['baño', 'bathroom', 'n.', '¿Dónde está el baño?', 'Where is the bathroom?', '#WC'],
      ['grande', 'big', 'adj.', 'La sala es grande.', 'The living room is big.', 'casa'],
      ['pequeño / pequeña', 'small', 'adj.', 'El baño es pequeño.', 'The bathroom is small.', 'casa']
    ],
    gram: { t: 'Hay', rule: 'Hay means there is or there are. It never changes.',
      ex: [['Hay una cocina.', 'There is a kitchen.'], ['Hay dos cuartos.', 'There are two bedrooms.'], ['¿Hay un baño aquí?', 'Is there a bathroom here?']] },
    conv: [
      ['sofia', 'Bienvenido a mi casa, Mateo.', 'Welcome to my house, Mateo.'],
      ['mateo', '¡Gracias! Es muy bonita.', "Thanks! It's very nice."],
      ['sofia', 'Aquí está la cocina, y allá está la sala.', "Here's the kitchen, and over there is the living room."],
      ['mateo', '¿Cuántos cuartos hay?', 'How many bedrooms are there?'],
      ['sofia', 'Hay dos cuartos y un baño.', 'There are two bedrooms and one bathroom.'],
      ['mateo', '¿Dónde está el baño, por favor?', "Where's the bathroom, please?"],
      ['sofia', 'Está al lado de la cocina.', "It's next to the kitchen."]
    ] }
]},
{ t: 'La comida', en: 'Food', lessons: [
  { id: '3-1', t: 'En la taquería', en: 'At the taco stand', bg: 'taqueria', cast: ['pepe', 'diego'], icon: 'taco',
    words: [
      ['taco', 'taco', 'n.', 'Quiero dos tacos, por favor.', 'I want two tacos, please.', 'taco'],
      ['agua', 'water', 'n.', 'Un agua de horchata, por favor.', 'A horchata, please.', 'agua'],
      ['quiero', 'I want', 'v.', 'Quiero un taco de pollo.', 'I want a chicken taco.', 'taco'],
      ['por favor', 'please', 'expr.', 'Una quesadilla, por favor.', 'A quesadilla, please.', 'taco'],
      ['gracias', 'thank you', 'expr.', 'Muchas gracias, señor.', 'Thank you very much, sir.', 'wave'],
      ['la cuenta', 'the check', 'n.', 'La cuenta, por favor.', 'The check, please.', 'dinero']
    ],
    gram: { t: 'Querer', rule: 'To order, use querer: quiero (I want), quieres (you want), quiere (he/she wants).',
      ex: [['Quiero agua.', 'I want water.'], ['¿Qué quieres?', 'What do you want?'], ['Diego quiere tres tacos.', 'Diego wants three tacos.']] },
    conv: [
      ['pepe', '¡Buenas tardes, joven! ¿Qué va a querer?', 'Good afternoon, young man! What will you have?'],
      ['diego', 'Quiero tres tacos al pastor, por favor.', 'I want three al pastor tacos, please.'],
      ['pepe', '¿Con todo?', 'With everything?'],
      ['diego', 'Sí, con cebolla y cilantro.', 'Yes, with onion and cilantro.'],
      ['pepe', '¿Y de tomar?', 'And to drink?'],
      ['diego', 'Un agua de jamaica.', 'A hibiscus water.'],
      ['pepe', '¡Ahorita se los traigo!', "I'll bring them right away!"]
    ] },
  { id: '3-2', t: 'En el mercado', en: 'At the market', bg: 'mercado', cast: ['sofia', 'pepe'], icon: 'fruta',
    words: [
      ['fruta', 'fruit', 'n.', 'La fruta está fresca.', 'The fruit is fresh.', 'fruta'],
      ['manzana', 'apple', 'n.', 'Quiero un kilo de manzanas.', 'I want a kilo of apples.', 'manzana'],
      ['plátano', 'banana', 'n.', 'Los plátanos están baratos.', 'The bananas are cheap.', 'platano'],
      ['¿cuánto cuesta?', 'how much is it?', 'expr.', '¿Cuánto cuesta el mango?', 'How much is the mango?', 'dinero'],
      ['peso', 'peso', 'n.', 'Cuesta veinte pesos.', 'It costs twenty pesos.', 'dinero'],
      ['kilo', 'kilo', 'n.', 'Un kilo de jitomate, por favor.', 'A kilo of tomatoes, please.', '#1 kg']
    ],
    gram: { t: 'Cuesta / cuestan', rule: 'Use cuesta for one thing and cuestan for more than one.',
      ex: [['El mango cuesta diez pesos.', 'The mango costs ten pesos.'], ['Las manzanas cuestan treinta pesos.', 'The apples cost thirty pesos.'], ['¿Cuánto cuestan los plátanos?', 'How much are the bananas?']] },
    conv: [
      ['sofia', 'Buenos días, don Pepe. ¿Cuánto cuestan las manzanas?', 'Good morning, don Pepe. How much are the apples?'],
      ['pepe', 'Cuestan cuarenta pesos el kilo.', 'They cost forty pesos a kilo.'],
      ['sofia', 'Un kilo, por favor. ¿Y los plátanos?', 'One kilo, please. And the bananas?'],
      ['pepe', 'Veinte pesos el kilo. Están muy buenos.', "Twenty pesos a kilo. They're very good."],
      ['sofia', 'Medio kilo de plátanos también.', 'Half a kilo of bananas too.'],
      ['pepe', 'Son cincuenta pesos, señorita.', "That's fifty pesos, miss."],
      ['sofia', 'Aquí tiene. ¡Gracias!', 'Here you go. Thanks!']
    ] },
  { id: '3-3', t: 'Me gusta', en: 'I like it', bg: 'taqueria', cast: ['lupita', 'mateo'], icon: 'cafe',
    words: [
      ['me gusta', 'I like', 'expr.', 'Me gusta el café.', 'I like coffee.', 'corazon'],
      ['no me gusta', "I don't like", 'expr.', 'No me gusta la cebolla.', "I don't like onion.", '#No'],
      ['café', 'coffee', 'n.', 'Tomo café en la mañana.', 'I drink coffee in the morning.', 'cafe'],
      ['pan dulce', 'sweet bread', 'n.', 'Me gusta el pan dulce.', 'I like sweet bread.', 'pan'],
      ['pollo', 'chicken', 'n.', 'El pollo con mole está rico.', 'The chicken with mole is delicious.', 'olla'],
      ['rico / rica', 'delicious', 'adj.', '¡Qué rica está la sopa!', 'The soup is so tasty!', 'olla']
    ],
    gram: { t: 'Gustar', rule: 'Me gusta + one thing. Me gustan + more than one thing. Put no before me to say you don’t like it.',
      ex: [['Me gusta el chocolate.', 'I like chocolate.'], ['Me gustan los tacos.', 'I like tacos.'], ['No me gusta el té.', "I don't like tea."]] },
    conv: [
      ['lupita', '¿Te gusta el café de olla?', 'Do you like café de olla?'],
      ['mateo', '¡Sí, me gusta mucho! ¿Y a ti?', 'Yes, I like it a lot! And you?'],
      ['lupita', 'A mí también. Y me gusta el pan dulce.', 'Me too. And I like sweet bread.'],
      ['mateo', '¿Te gustan las conchas?', 'Do you like conchas?'],
      ['lupita', 'Sí, pero no me gusta el chocolate.', "Yes, but I don't like chocolate."],
      ['mateo', 'Entonces, una concha de vainilla para ti.', 'Then a vanilla concha for you.']
    ] }
]},
{ t: 'La ciudad', en: 'Around town', lessons: [
  { id: '4-1', t: '¿Dónde está?', en: 'Where is it?', bg: 'calle', cast: ['sofia', 'carmen'], icon: 'mapa',
    words: [
      ['¿dónde está?', 'where is?', 'expr.', '¿Dónde está la farmacia?', 'Where is the pharmacy?', 'pin'],
      ['farmacia', 'pharmacy', 'n.', 'La farmacia está cerca.', 'The pharmacy is close.', 'farmacia'],
      ['escuela', 'school', 'n.', 'La escuela está en la calle Juárez.', 'The school is on Juárez Street.', 'escuela'],
      ['al lado de', 'next to', 'expr.', 'El banco está al lado de la escuela.', 'The bank is next to the school.', 'mapa'],
      ['cerca / lejos', 'near / far', 'adv.', 'El parque está lejos.', 'The park is far.', 'mapa'],
      ['calle', 'street', 'n.', 'Vivo en esta calle.', 'I live on this street.', '#Calle 18']
    ],
    gram: { t: 'Estar for places', rule: 'Use estar to say where something is: está (it is), están (they are).',
      ex: [['La farmacia está aquí.', 'The pharmacy is here.'], ['Las tiendas están cerca.', 'The stores are close.'], ['¿Dónde está el baño?', 'Where is the bathroom?']] },
    conv: [
      ['sofia', 'Disculpe, señora. ¿Dónde está la farmacia?', "Excuse me, ma'am. Where is the pharmacy?"],
      ['carmen', 'Está en la calle Morelos.', "It's on Morelos Street."],
      ['sofia', '¿Está lejos?', 'Is it far?'],
      ['carmen', 'No, está cerca. Al lado de la escuela.', "No, it's close. Next to the school."],
      ['sofia', 'Muchas gracias.', 'Thank you very much.'],
      ['carmen', 'De nada, mija.', "You're welcome, dear."]
    ] },
  { id: '4-2', t: 'El transporte', en: 'Getting around', bg: 'calle', cast: ['mateo', 'diego'], icon: 'camion',
    words: [
      ['camión', 'bus', 'n.', 'Tomo el camión a las ocho.', 'I take the bus at eight.', 'camion'],
      ['metro', 'subway', 'n.', 'El metro es muy rápido.', 'The subway is very fast.', 'metro'],
      ['taxi', 'taxi', 'n.', 'Vamos en taxi.', "Let's go by taxi.", 'taxi'],
      ['a pie', 'on foot', 'expr.', 'Voy a la escuela a pie.', 'I walk to school.', 'pin'],
      ['boleto', 'ticket', 'n.', 'Un boleto, por favor.', 'One ticket, please.', 'boleto'],
      ['ir', 'to go', 'v.', '¿Vas al centro?', 'Are you going downtown?', 'camion']
    ],
    gram: { t: 'Ir a + place', rule: 'Ir means to go: voy, vas, va. Use a + place, and a + el becomes al.',
      ex: [['Voy al trabajo.', 'I go to work.'], ['¿Vas a la escuela?', 'Are you going to school?'], ['Diego va al mercado en camión.', 'Diego goes to the market by bus.']] },
    conv: [
      ['mateo', '¿Cómo vas al trabajo?', 'How do you get to work?'],
      ['diego', 'Voy en metro. Es rápido.', "I go by subway. It's fast."],
      ['mateo', 'Yo voy en camión.', 'I go by bus.'],
      ['diego', '¿Cuánto cuesta el boleto?', 'How much is the ticket?'],
      ['mateo', 'Cuesta diez pesos.', 'It costs ten pesos.'],
      ['diego', '¡Qué barato!', 'How cheap!']
    ] },
  { id: '4-3', t: 'Las tiendas', en: 'Shops', bg: 'calle', cast: ['lupita', 'pepe'], icon: 'tienda',
    words: [
      ['tienda', 'store', 'n.', 'La tienda está en la esquina.', 'The store is on the corner.', 'tienda'],
      ['abierto / abierta', 'open', 'adj.', 'La tienda está abierta.', 'The store is open.', '#ABIERTO'],
      ['cerrado / cerrada', 'closed', 'adj.', 'El banco está cerrado.', 'The bank is closed.', '#CERRADO'],
      ['comprar', 'to buy', 'v.', 'Quiero comprar leche.', 'I want to buy milk.', 'bolsa'],
      ['leche', 'milk', 'n.', 'Compro leche y pan.', 'I buy milk and bread.', 'leche'],
      ['hoy', 'today', 'adv.', 'Hoy la tienda abre a las nueve.', 'Today the store opens at nine.', 'calendario']
    ],
    gram: { t: '-ar verbs', rule: 'Regular -ar verbs change their ending: compr-o (I), compr-as (you), compr-a (he/she).',
      ex: [['Compro tortillas.', 'I buy tortillas.'], ['¿Qué compras?', 'What are you buying?'], ['Lupita compra leche.', 'Lupita buys milk.']] },
    conv: [
      ['lupita', 'Buenas tardes. ¿Está abierta la tienda?', 'Good afternoon. Is the store open?'],
      ['pepe', 'Sí, pásele. ¿Qué busca?', 'Yes, come in. What are you looking for?'],
      ['lupita', 'Quiero comprar leche y tortillas.', 'I want to buy milk and tortillas.'],
      ['pepe', 'La leche está allá. Las tortillas, aquí.', 'The milk is over there. The tortillas, here.'],
      ['lupita', '¿A qué hora cierra hoy?', 'What time do you close today?'],
      ['pepe', 'Cerramos a las diez de la noche.', 'We close at ten at night.']
    ] }
]},
{ t: 'Mi día', en: 'My day', lessons: [
  { id: '5-1', t: '¿Qué hora es?', en: 'What time is it?', bg: 'casa', cast: ['diego', 'sofia'], icon: 'reloj:3',
    words: [
      ['¿qué hora es?', 'what time is it?', 'expr.', 'Disculpa, ¿qué hora es?', 'Excuse me, what time is it?', 'reloj:3'],
      ['es la una', "it's one o'clock", 'expr.', 'Es la una de la tarde.', "It's one in the afternoon.", 'reloj:1'],
      ['son las dos', "it's two o'clock", 'expr.', 'Son las dos y media.', "It's two thirty.", 'reloj:2'],
      ['y media', 'thirty, half past', 'expr.', 'Son las ocho y media.', "It's eight thirty.", 'reloj:8:30'],
      ['de la mañana', 'in the morning', 'expr.', 'Son las siete de la mañana.', "It's seven in the morning.", 'sol'],
      ['de la noche', 'at night', 'expr.', 'Llego a casa a las once de la noche.', 'I get home at eleven at night.', 'luna']
    ],
    gram: { t: 'Telling time', rule: 'Use es la una for 1:00 and son las + number for other hours. Add y media for :30.',
      ex: [['Es la una.', "It's one o'clock."], ['Son las tres.', "It's three o'clock."], ['Son las cuatro y media.', "It's four thirty."]] },
    conv: [
      ['diego', 'Sofía, ¿qué hora es?', 'Sofía, what time is it?'],
      ['sofia', 'Son las dos y media.', "It's two thirty."],
      ['diego', '¡Ay, tengo trabajo a las tres!', 'Oh, I have work at three!'],
      ['sofia', '¿A qué hora sales?', 'What time do you get off?'],
      ['diego', 'Salgo a las once y media de la noche.', 'I get off at eleven thirty at night.'],
      ['sofia', '¡Qué tarde!', 'So late!']
    ] },
  { id: '5-2', t: 'Mi rutina', en: 'My routine', bg: 'casa', cast: ['lupita', 'mateo'], icon: 'laptop',
    words: [
      ['trabajar', 'to work', 'v.', 'Trabajo en una oficina.', 'I work in an office.', 'laptop'],
      ['comer', 'to eat', 'v.', 'Como a las dos.', 'I eat at two.', 'olla'],
      ['dormir', 'to sleep', 'v.', 'Duermo ocho horas.', 'I sleep eight hours.', 'cama'],
      ['en la mañana', 'in the morning', 'expr.', 'En la mañana tomo café.', 'In the morning I drink coffee.', 'sol'],
      ['en la tarde', 'in the afternoon', 'expr.', 'En la tarde voy al trabajo.', 'In the afternoon I go to work.', 'reloj:4'],
      ['siempre', 'always', 'adv.', 'Siempre como con mi familia.', 'I always eat with my family.', 'calendario']
    ],
    gram: { t: '-er and -ir verbs', rule: 'For -er and -ir verbs: com-o (I), com-es (you), com-e (he/she). Viv-o, viv-es, viv-e.',
      ex: [['Como tacos.', 'I eat tacos.'], ['¿Dónde vives?', 'Where do you live?'], ['Ella come en casa.', 'She eats at home.']] },
    conv: [
      ['mateo', 'Lupita, ¿a qué hora trabajas?', 'Lupita, what time do you work?'],
      ['lupita', 'Trabajo en la mañana, de ocho a cuatro.', 'I work in the morning, from eight to four.'],
      ['mateo', '¿Y dónde comes?', 'And where do you eat?'],
      ['lupita', 'Siempre como en casa con mi mamá.', 'I always eat at home with my mom.'],
      ['mateo', 'Yo como en el trabajo.', 'I eat at work.'],
      ['lupita', '¿Y a qué hora duermes?', 'And what time do you sleep?'],
      ['mateo', 'Duermo a las once.', 'I go to sleep at eleven.']
    ] },
  { id: '5-3', t: 'La semana', en: 'The week', bg: 'plaza', cast: ['diego', 'lupita'], icon: 'calendario',
    words: [
      ['lunes', 'Monday', 'n.', 'El lunes trabajo.', 'On Monday I work.', '#LUN'],
      ['viernes', 'Friday', 'n.', 'El viernes voy al cine.', 'On Friday I go to the movies.', '#VIE'],
      ['sábado', 'Saturday', 'n.', 'El sábado como con mi familia.', 'On Saturday I eat with my family.', '#SÁB'],
      ['domingo', 'Sunday', 'n.', 'Los domingos voy al mercado.', 'On Sundays I go to the market.', '#DOM'],
      ['semana', 'week', 'n.', 'Trabajo cinco días a la semana.', 'I work five days a week.', 'calendario'],
      ['fin de semana', 'weekend', 'n.', '¿Qué haces el fin de semana?', 'What do you do on the weekend?', 'sol']
    ],
    gram: { t: 'El lunes / los lunes', rule: 'Days are not capitalized. El lunes = on Monday (one time). Los lunes = on Mondays (every week).',
      ex: [['El viernes hay fiesta.', "On Friday there's a party."], ['Los sábados no trabajo.', "On Saturdays I don't work."], ['Hoy es domingo.', 'Today is Sunday.']] },
    conv: [
      ['diego', 'Lupita, ¿qué día es hoy?', 'Lupita, what day is today?'],
      ['lupita', 'Hoy es viernes. ¡Por fin!', 'Today is Friday. Finally!'],
      ['diego', '¿Trabajas el fin de semana?', 'Do you work on the weekend?'],
      ['lupita', 'No, los sábados y domingos descanso.', 'No, on Saturdays and Sundays I rest.'],
      ['diego', '¿Vamos al mercado el domingo?', 'Shall we go to the market on Sunday?'],
      ['lupita', '¡Sí, vamos!', "Yes, let's go!"]
    ] }
]},
{ t: 'Tiempo libre', en: 'Free time', lessons: [
  { id: '6-1', t: 'El clima', en: 'The weather', bg: 'parque', cast: ['sofia', 'mateo'], icon: 'sol',
    words: [
      ['hace calor', "it's hot", 'expr.', 'Hoy hace mucho calor.', "It's very hot today.", 'sol'],
      ['hace frío', "it's cold", 'expr.', 'En Chicago hace frío en enero.', "It's cold in Chicago in January.", 'nieve'],
      ['llueve', "it's raining", 'v.', 'Llueve mucho en julio.', 'It rains a lot in July.', 'lluvia'],
      ['hace sol', "it's sunny", 'expr.', 'Hace sol en la playa.', "It's sunny at the beach.", 'sol'],
      ['nublado', 'cloudy', 'adj.', 'Hoy está nublado.', "It's cloudy today.", 'nube'],
      ['el clima', 'the weather', 'n.', '¿Cómo está el clima?', "How's the weather?", 'nube']
    ],
    gram: { t: 'Hacer for weather', rule: 'Use hace with calor, frío, sol and viento. Use está with nublado.',
      ex: [['Hace calor.', "It's hot."], ['Hace mucho viento.', "It's very windy."], ['Está nublado.', "It's cloudy."]] },
    conv: [
      ['sofia', '¡Uf, hoy hace mucho calor!', "Phew, it's really hot today!"],
      ['mateo', 'Sí. ¿Quieres un agua fresca?', 'Yes. Do you want an agua fresca?'],
      ['sofia', '¡Sí, de limón, por favor!', 'Yes, lime, please!'],
      ['mateo', 'Mira, está nublado allá.', "Look, it's cloudy over there."],
      ['sofia', 'Creo que en la tarde llueve.', "I think it'll rain this afternoon."],
      ['mateo', 'Entonces vamos a casa temprano.', "Then let's go home early."]
    ] },
  { id: '6-2', t: 'Pasatiempos', en: 'Hobbies', bg: 'parque', cast: ['diego', 'lupita'], icon: 'musica',
    words: [
      ['leer', 'to read', 'v.', 'Me gusta leer en el parque.', 'I like to read in the park.', 'libro'],
      ['escuchar música', 'to listen to music', 'expr.', 'Escucho música en el camión.', 'I listen to music on the bus.', 'musica'],
      ['jugar fútbol', 'to play soccer', 'expr.', 'Juego fútbol los domingos.', 'I play soccer on Sundays.', 'balon'],
      ['bailar', 'to dance', 'v.', '¿Te gusta bailar cumbia?', 'Do you like dancing cumbia?', 'musica'],
      ['cocinar', 'to cook', 'v.', 'Mi abuela cocina mole.', 'My grandmother cooks mole.', 'olla'],
      ['ver la tele', 'to watch TV', 'expr.', 'En la noche veo la tele.', 'At night I watch TV.', 'tele']
    ],
    gram: { t: 'Me gusta + verb', rule: 'Me gusta + a verb ending in -ar, -er or -ir says what you like doing.',
      ex: [['Me gusta cocinar.', 'I like to cook.'], ['¿Te gusta bailar?', 'Do you like to dance?'], ['No me gusta ver la tele.', "I don't like watching TV."]] },
    conv: [
      ['diego', '¿Qué te gusta hacer en tu tiempo libre?', 'What do you like to do in your free time?'],
      ['lupita', 'Me gusta leer y escuchar música. ¿Y a ti?', 'I like reading and listening to music. And you?'],
      ['diego', 'Me gusta jugar fútbol.', 'I like playing soccer.'],
      ['lupita', '¿Te gusta bailar?', 'Do you like to dance?'],
      ['diego', '¡Sí! Me encanta bailar cumbia.', 'Yes! I love dancing cumbia.'],
      ['lupita', '¡A mí también!', 'Me too!']
    ] },
  { id: '6-3', t: 'Planes', en: 'Plans', bg: 'parque', cast: ['sofia', 'diego'], icon: 'fiesta',
    words: [
      ['voy a', "I'm going to", 'expr.', 'Voy a cocinar hoy.', "I'm going to cook today.", 'calendario'],
      ['mañana', 'tomorrow', 'adv.', 'Mañana voy a trabajar.', "Tomorrow I'm going to work.", 'calendario'],
      ['la fiesta', 'the party', 'n.', 'La fiesta es el sábado.', 'The party is on Saturday.', 'fiesta'],
      ['el cine', 'the movie theater', 'n.', '¿Vamos al cine?', 'Shall we go to the movies?', 'tele'],
      ['con', 'with', 'prep.', 'Voy con mi familia.', "I'm going with my family.", 'foto'],
      ['¡vamos!', "let's go!", 'expr.', '¡Vamos a la fiesta!', "Let's go to the party!", 'wave']
    ],
    gram: { t: 'Ir a + verb', rule: 'For plans: voy a / vas a / va a + a verb ending in -ar, -er or -ir.',
      ex: [['Voy a bailar.', "I'm going to dance."], ['¿Vas a ir a la fiesta?', 'Are you going to go to the party?'], ['Sofía va a cocinar.', 'Sofía is going to cook.']] },
    conv: [
      ['sofia', 'Diego, ¿qué vas a hacer el sábado?', 'Diego, what are you going to do on Saturday?'],
      ['diego', 'Voy a ir al cine con Mateo. ¿Y tú?', "I'm going to the movies with Mateo. And you?"],
      ['sofia', 'Voy a una fiesta. Es el cumpleaños de Lupita.', "I'm going to a party. It's Lupita's birthday."],
      ['diego', '¡Qué padre! ¿Va a haber baile?', 'Cool! Is there going to be dancing?'],
      ['sofia', 'Sí, y comida rica. ¿Quieres venir?', 'Yes, and delicious food. Do you want to come?'],
      ['diego', '¡Claro! ¡Vamos!', "Of course! Let's go!"]
    ] }
]}
];
