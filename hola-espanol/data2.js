// A1 lessons 7–16: together with data.js these cover every word in the Instituto Cervantes Plan Curricular A1 inventory.
// Word: [Mexican Spanish, English, part of speech, example es, example en, picture, Spain form if different]
UNITS.push(
{ t: "Números y colores", en: "Numbers and colors", lessons: [
  { id: "7-1", t: "Del cero al veinte", en: "Zero to twenty", bg: "plaza", cast: ["mateo", "lupita"], icon: "#0–20",
    words: [
      ["cero", "zero", "num.", "El código es cero, cinco, dos.", "The code is zero, five, two.", "#0"],
      ["seis, siete", "six, seven", "num.", "Tengo seis primos.", "I have six cousins.", "#6 7"],
      ["ocho, nueve", "eight, nine", "num.", "La clase es a las ocho.", "Class is at eight.", "#8 9"],
      ["once, doce", "eleven, twelve", "num.", "Mi sobrino tiene doce años.", "My nephew is twelve.", "#11 12"],
      ["trece, catorce, quince", "13, 14, 15", "num.", "Son quince pesos.", "It's fifteen pesos.", "#15"],
      ["dieciséis… diecinueve", "16 … 19", "num.", "Hay dieciocho estudiantes.", "There are eighteen students.", "#18"],
      ["el número", "number", "n.", "¿Cuál es tu número?", "What is your number?", "telefono"]
    ],
    conv: [
      ["mateo", "Lupita, ¿cuál es tu número de teléfono?", "Lupita, what is your phone number?"],
      ["lupita", "Cinco, cinco, doce, quince, cero, ocho.", "Five, five, twelve, fifteen, zero, eight."],
      ["mateo", "¿Doce o trece?", "Twelve or thirteen?"],
      ["lupita", "Doce. Uno, dos: doce.", "Twelve. One, two: twelve."],
      ["mateo", "Perfecto, gracias.", "Perfect, thanks."]
    ] },
  { id: "7-2", t: "Números grandes", en: "Big numbers", bg: "mercado", cast: ["sofia", "pepe"], icon: "#100",
    words: [
      ["treinta, cuarenta", "thirty, forty", "num.", "Mi tío tiene cuarenta años.", "My uncle is forty.", "#40"],
      ["cincuenta, sesenta", "fifty, sixty", "num.", "Cuesta cincuenta pesos.", "It costs fifty pesos.", "dinero"],
      ["setenta, ochenta, noventa", "70, 80, 90", "num.", "Mi abuelo tiene ochenta años.", "My grandfather is eighty.", "#80"],
      ["cien", "one hundred", "num.", "Hay cien personas en la fiesta.", "There are a hundred people at the party.", "#100"],
      ["ciento, doscientos", "one hundred and…, two hundred", "num.", "La maleta cuesta doscientos pesos.", "The suitcase costs two hundred pesos.", "#200"],
      ["mil", "one thousand", "num.", "Mi pueblo tiene mil habitantes.", "My town has a thousand inhabitants.", "#1000"],
      ["más o menos", "more or less, about", "expr.", "Tiene más o menos treinta años.", "He's about thirty.", "#±"],
      ["el metro / el kilómetro", "meter / kilometer", "n.", "La playa está a dos kilómetros.", "The beach is two kilometers away.", "mapa"]
    ],
    gram: { t: "Numbers 16–99", rule: "From 16 to 29 numbers are one word: dieciséis, veintidós. From 31 on, use y: treinta y uno, cuarenta y cinco.",
      ex: [["Mi hermana tiene veintidós años.", "My sister is twenty-two."], ["Son cuarenta y cinco pesos.", "It's forty-five pesos."], ["Hay noventa y nueve libros.", "There are ninety-nine books."]] },
    conv: [
      ["sofia", "¿Cuánto cuesta la maleta?", "How much is the suitcase?"],
      ["pepe", "Cuesta quinientos pesos.", "It costs five hundred pesos."],
      ["sofia", "¡Es muy cara! ¿Y la pequeña?", "That's very expensive! And the small one?"],
      ["pepe", "La pequeña cuesta trescientos.", "The small one costs three hundred."],
      ["sofia", "Bueno, la pequeña, por favor.", "Okay, the small one, please."]
    ] },
  { id: "7-3", t: "Primero, segundo", en: "First, second", bg: "calle", cast: ["diego", "carmen"], icon: "#1.º",
    words: [
      ["primero / primera", "first", "adj.", "Vivo en el primer piso.", "I live on the first floor.", "#1.º"],
      ["segundo / segunda", "second", "adj.", "Es la segunda calle a la derecha.", "It's the second street on the right.", "#2.º"],
      ["tercero / tercera", "third", "adj.", "La tercera calle es Juárez.", "The third street is Juárez.", "#3.º"],
      ["cuarto / quinto", "fourth / fifth", "adj.", "Vivimos en el cuarto piso.", "We live on the fourth floor.", "#4.º"],
      ["sexto, séptimo", "sixth, seventh", "adj.", "La oficina está en el sexto piso.", "The office is on the sixth floor.", "#6.º"],
      ["octavo, noveno, décimo", "eighth, ninth, tenth", "adj.", "Es mi décimo día en Chicago.", "It's my tenth day in Chicago.", "#10.º"],
      ["antes / después", "before / after", "adv.", "Primero desayuno y después trabajo.", "First I have breakfast and then I work.", "reloj:8"]
    ],
    gram: { t: "Primer, tercer", rule: "Primero and tercero drop the -o before a masculine noun: el primer piso, el tercer día.",
      ex: [["Es el primer día de clase.", "It's the first day of class."], ["Vivo en el tercer piso.", "I live on the third floor."], ["Es la primera vez.", "It's the first time."]] },
    conv: [
      ["diego", "Disculpe, ¿dónde está la oficina de turismo?", "Excuse me, where is the tourist office?"],
      ["carmen", "Es la segunda calle a la izquierda.", "It's the second street on the left."],
      ["diego", "¿En qué piso está?", "What floor is it on?"],
      ["carmen", "En el tercer piso del edificio azul.", "On the third floor of the blue building."],
      ["diego", "Muchas gracias, señora.", "Thank you very much, ma'am."]
    ] },
  { id: "7-4", t: "Los colores", en: "Colors", bg: "mercado", cast: ["lupita", "pepe"], icon: "%E84A8A",
    words: [
      ["rojo / roja", "red", "adj.", "Mi carro es rojo.", "My car is red.", "%E8505B"],
      ["amarillo / amarilla", "yellow", "adj.", "El taxi es amarillo.", "The taxi is yellow.", "%F6C453"],
      ["azul", "blue", "adj.", "La casa es azul.", "The house is blue.", "%3A8FD8"],
      ["verde", "green", "adj.", "Me gusta la salsa verde.", "I like green salsa.", "%3DBB63"],
      ["naranja", "orange (color)", "adj.", "La camisa es naranja.", "The shirt is orange.", "%F28C28"],
      ["café / marrón", "brown", "adj.", "Tengo los ojos cafés.", "I have brown eyes.", "%7A4A2A"],
      ["blanco / blanca", "white", "adj.", "El vino blanco está frío.", "The white wine is cold.", "%F5F0E8"],
      ["negro / negra", "black", "adj.", "Mi bolsa es negra.", "My purse is black.", "%2B2B2B"],
      ["gris", "gray", "adj.", "Hoy el cielo está gris.", "Today the sky is gray.", "%9AA3AE"],
      ["claro / oscuro", "light / dark", "adj.", "Tiene el pelo oscuro.", "She has dark hair.", "%5A3A26"]
    ],
    gram: { t: "Adjectives match", rule: "Adjectives match the noun: -o for masculine, -a for feminine, -s for plural. Verde, azul and gris only change for plural.",
      ex: [["un carro rojo", "a red car"], ["una casa roja", "a red house"], ["dos camisas azules", "two blue shirts"]] },
    conv: [
      ["lupita", "Quiero una camisa, por favor.", "I want a shirt, please."],
      ["pepe", "¿De qué color?", "What color?"],
      ["lupita", "Azul o verde.", "Blue or green."],
      ["pepe", "Tengo esta camisa azul y esta verde.", "I have this blue shirt and this green one."],
      ["lupita", "Me gusta la verde. ¿Cuánto es?", "I like the green one. How much is it?"],
      ["pepe", "Doscientos pesos.", "Two hundred pesos."]
    ] }
]},
{ t: "Las personas", en: "People", lessons: [
  { id: "8-1", t: "¿Cómo es?", en: "What does he look like?", bg: "plaza", cast: ["sofia", "lupita"], icon: "foto",
    words: [
      ["el pelo", "hair", "n.", "Tengo el pelo largo.", "I have long hair.", ""],
      ["el ojo / los ojos", "eye / eyes", "n.", "Tiene los ojos verdes.", "He has green eyes.", ""],
      ["la nariz", "nose", "n.", "Mi hijo tiene la nariz pequeña.", "My son has a small nose.", ""],
      ["alto / bajo", "tall / short", "adj.", "Diego es alto.", "Diego is tall.", ""],
      ["gordo / delgado", "fat / thin", "adj.", "Mi gato es gordo.", "My cat is fat.", ""],
      ["guapo / feo", "good-looking / ugly", "adj.", "Tu novio es muy guapo.", "Your boyfriend is very handsome.", ""],
      ["güero / moreno", "blond, fair / dark-haired, dark", "adj.", "Mi hermana es güera.", "My sister is blonde.", "", "rubio / moreno"],
      ["la barba / el bigote", "beard / mustache", "n.", "Don Pepe tiene bigote.", "Don Pepe has a mustache.", ""],
      ["los lentes", "glasses", "n.", "Mi abuela usa lentes.", "My grandmother wears glasses.", "", "las gafas"],
      ["largo / corto", "long / short", "adj.", "Tiene el pelo corto.", "She has short hair.", ""]
    ],
    gram: { t: "Ser and tener for looks", rule: "Use ser + adjective (es alto) and tener + body part (tiene el pelo largo).",
      ex: [["Diego es alto y delgado.", "Diego is tall and thin."], ["Tiene los ojos cafés.", "He has brown eyes."], ["Lleva lentes.", "He wears glasses."]] },
    conv: [
      ["lupita", "¿Cómo es tu hermano?", "What does your brother look like?"],
      ["sofia", "Es alto y delgado. Tiene el pelo corto.", "He's tall and thin. He has short hair."],
      ["lupita", "¿Tiene barba?", "Does he have a beard?"],
      ["sofia", "No, pero tiene bigote y usa lentes.", "No, but he has a mustache and wears glasses."],
      ["lupita", "¡Ah, ya sé quién es!", "Oh, I know who he is!"]
    ] },
  { id: "8-2", t: "La personalidad", en: "Personality", bg: "casa", cast: ["carmen", "mateo"], icon: "corazon",
    words: [
      ["simpático / simpática", "nice, friendly", "adj.", "Mi jefa es muy simpática.", "My boss is very nice.", ""],
      ["antipático / antipática", "unfriendly", "adj.", "El vecino es un poco antipático.", "The neighbor is a bit unfriendly.", ""],
      ["inteligente", "smart", "adj.", "Tu hija es muy inteligente.", "Your daughter is very smart.", ""],
      ["trabajador / trabajadora", "hard-working", "adj.", "Lupita es muy trabajadora.", "Lupita is very hard-working.", ""],
      ["alegre", "cheerful", "adj.", "Mi abuela es muy alegre.", "My grandmother is very cheerful.", ""],
      ["serio / seria", "serious", "adj.", "El profesor es serio.", "The teacher is serious.", ""],
      ["tímido / tímida", "shy", "adj.", "Soy un poco tímido.", "I'm a little shy.", ""],
      ["sociable", "outgoing", "adj.", "Mateo es muy sociable.", "Mateo is very outgoing.", ""],
      ["joven / viejo", "young / old", "adj.", "Mi perro es viejo.", "My dog is old.", ""]
    ],
    gram: { t: "Muy and un poco", rule: "Muy (very) goes before an adjective: muy alegre. Un poco (a bit) softens it: un poco tímido.",
      ex: [["Es muy simpática.", "She's very nice."], ["Soy un poco serio.", "I'm a bit serious."], ["No es muy sociable.", "He isn't very outgoing."]] },
    conv: [
      ["carmen", "Mateo, ¿cómo es tu nueva jefa?", "Mateo, what is your new boss like?"],
      ["mateo", "Es muy simpática y trabajadora.", "She's very nice and hard-working."],
      ["carmen", "¿Y tus compañeros?", "And your coworkers?"],
      ["mateo", "Son jóvenes y alegres. Uno es un poco tímido.", "They're young and cheerful. One is a little shy."],
      ["carmen", "¡Qué bien, mijo!", "That's great, son!"]
    ] },
  { id: "8-3", t: "Datos personales", en: "Personal details", bg: "calle", cast: ["pepe", "sofia"], icon: "boleto",
    words: [
      ["la dirección", "address", "n.", "¿Cuál es tu dirección?", "What is your address?", "casa"],
      ["el correo electrónico", "email", "n.", "Mi correo electrónico es ana@correo.mx.", "My email is ana@correo.mx.", "laptop"],
      ["el celular", "cell phone", "n.", "Mi celular es nuevo.", "My cell phone is new.", "telefono", "el móvil"],
      ["el número de teléfono", "phone number", "n.", "Mi número de teléfono es el 55 1234 5678.", "My phone number is 55 1234 5678.", "telefono"],
      ["la fecha de nacimiento", "date of birth", "n.", "Escriba su fecha de nacimiento.", "Write your date of birth.", "calendario"],
      ["el lugar de nacimiento", "place of birth", "n.", "Mi lugar de nacimiento es Puebla.", "My place of birth is Puebla.", "pin"],
      ["la nacionalidad", "nationality", "n.", "¿Cuál es su nacionalidad?", "What is your nationality?", "pin"],
      ["extranjero / extranjera", "foreigner; foreign", "n.", "Soy extranjera, soy de Estados Unidos.", "I'm a foreigner, I'm from the United States.", "pin"],
      ["la edad", "age", "n.", "Edad: treinta y cinco años.", "Age: thirty-five.", "pastel"],
      ["firmar", "to sign", "v.", "Firme aquí, por favor.", "Sign here, please.", "boleto"],
      ["señor / señora", "Mr. / Mrs., sir / ma'am", "n.", "Buenos días, señora López.", "Good morning, Mrs. López.", "wave"]
    ],
    gram: { t: "Usted", rule: "Use usted (formal you) with strangers and older people. Its verb is the same as for él/ella, and su means your.",
      ex: [["¿Cuál es su dirección?", "What is your address? (formal)"], ["¿Cómo se llama usted?", "What is your name? (formal)"], ["Firme aquí, por favor.", "Sign here, please."]] },
    conv: [
      ["pepe", "Buenos días. ¿Su nombre, por favor?", "Good morning. Your name, please?"],
      ["sofia", "Sofía Ramírez.", "Sofía Ramírez."],
      ["pepe", "¿Fecha de nacimiento?", "Date of birth?"],
      ["sofia", "El doce de mayo de mil novecientos noventa.", "May twelfth, nineteen ninety."],
      ["pepe", "¿Y su número de celular?", "And your cell number?"],
      ["sofia", "Cincuenta y cinco, doce, treinta y cuatro.", "Fifty-five, twelve, thirty-four."],
      ["pepe", "Muy bien. Firme aquí, por favor.", "Very good. Sign here, please."]
    ] },
  { id: "8-4", t: "Estado civil", en: "Marital status", bg: "plaza", cast: ["lupita", "diego"], icon: "corazon",
    words: [
      ["el hombre / la mujer", "man / woman", "n.", "Hay un hombre y una mujer en la foto.", "There's a man and a woman in the photo.", "foto"],
      ["el niño / la niña", "boy / girl (child)", "n.", "La niña tiene seis años.", "The girl is six.", "pastel"],
      ["el chico / la chica", "guy / girl (young person)", "n.", "El chico de la tienda es simpático.", "The guy at the store is nice.", ""],
      ["soltero / soltera", "single", "adj.", "Mi hermano es soltero.", "My brother is single.", ""],
      ["casado / casada", "married", "adj.", "Mis papás están casados.", "My parents are married.", "corazon"],
      ["divorciado / separado", "divorced / separated", "adj.", "Mi tía está divorciada.", "My aunt is divorced.", ""],
      ["viudo / viuda", "widowed", "adj.", "Mi abuelo es viudo.", "My grandfather is a widower.", ""],
      ["el esposo / la esposa", "husband / wife", "n.", "Mi esposo se llama Luis.", "My husband's name is Luis.", "corazon", "el marido / la mujer"],
      ["el novio / la novia", "boyfriend / girlfriend, fiancé(e)", "n.", "Mi novio vive en Chicago.", "My boyfriend lives in Chicago.", "corazon"],
      ["la pareja", "partner, couple", "n.", "Vivo con mi pareja.", "I live with my partner.", "corazon"],
      ["el estado civil", "marital status", "n.", "Estado civil: soltera.", "Marital status: single.", ""]
    ],
    gram: { t: "El, la, los, las", rule: "Nouns are masculine (el niño) or feminine (la niña). In the plural: los niños, las niñas.",
      ex: [["el hombre, los hombres", "the man, the men"], ["la mujer, las mujeres", "the woman, the women"], ["la pareja, las parejas", "the couple, the couples"]] },
    conv: [
      ["lupita", "Diego, ¿estás casado?", "Diego, are you married?"],
      ["diego", "No, soy soltero. ¿Y tú?", "No, I'm single. And you?"],
      ["lupita", "Yo tengo novio. Se llama Andrés.", "I have a boyfriend. His name is Andrés."],
      ["diego", "¿Viven juntos?", "Do you live together?"],
      ["lupita", "No, él vive con sus papás.", "No, he lives with his parents."]
    ] },
  { id: "8-5", t: "Más familia", en: "More family", bg: "casa", cast: ["sofia", "carmen"], icon: "foto",
    words: [
      ["la familia", "family", "n.", "Mi familia es grande.", "My family is big.", "foto"],
      ["los padres", "parents", "n.", "Mis padres viven en Oaxaca.", "My parents live in Oaxaca.", "foto"],
      ["el padre / la madre", "father / mother", "n.", "Mi madre es enfermera.", "My mother is a nurse.", "foto"],
      ["el tío / la tía", "uncle / aunt", "n.", "Mi tía tiene una tienda.", "My aunt has a store.", "foto"],
      ["el primo / la prima", "cousin", "n.", "Mi primo juega fútbol.", "My cousin plays soccer.", "balon"],
      ["el sobrino / la sobrina", "nephew / niece", "n.", "Mi sobrina tiene dos gatos.", "My niece has two cats.", "foto"],
      ["el abuelo", "grandfather", "n.", "Mi abuelo tiene ochenta años.", "My grandfather is eighty.", "foto"],
      ["el nieto / la nieta", "grandson / granddaughter", "n.", "La abuela juega con su nieto.", "Grandma plays with her grandson.", "foto"],
      ["el amigo / la amiga", "friend", "n.", "Lupita es mi amiga.", "Lupita is my friend.", "wave"],
      ["el compañero / la compañera", "classmate, coworker", "n.", "Mi compañero de trabajo es de Puebla.", "My coworker is from Puebla.", "laptop"],
      ["el jefe / la jefa", "boss", "n.", "Mi jefe es muy serio.", "My boss is very serious.", "laptop"]
    ],
    conv: [
      ["carmen", "¿Quién viene a la fiesta el sábado?", "Who is coming to the party on Saturday?"],
      ["sofia", "Mis tíos, mis primos y unos amigos.", "My aunt and uncle, my cousins and some friends."],
      ["carmen", "¿Y tu jefe?", "And your boss?"],
      ["sofia", "¡No! Solo la familia y los amigos.", "No! Only family and friends."],
      ["carmen", "¿Viene tu abuelo?", "Is your grandfather coming?"],
      ["sofia", "Sí, con mi abuela y sus nietos.", "Yes, with my grandmother and their grandchildren."]
    ] },
  { id: "8-6", t: "Mis cosas", en: "My things", bg: "casa", cast: ["diego", "sofia"], icon: "bolsa",
    words: [
      ["las llaves", "keys", "n.", "¿Dónde están mis llaves?", "Where are my keys?", ""],
      ["la cartera", "wallet", "n.", "La cartera está en la bolsa.", "The wallet is in the purse.", "dinero"],
      ["la bolsa", "purse, bag", "n.", "Mi bolsa es negra.", "My purse is black.", "bolsa", "el bolso"],
      ["la maleta", "suitcase", "n.", "Mi maleta es muy grande.", "My suitcase is very big.", ""],
      ["el reloj", "watch, clock", "n.", "Mi reloj es nuevo.", "My watch is new.", "reloj:10:10"],
      ["la tarjeta de crédito", "credit card", "n.", "¿Puedo pagar con tarjeta de crédito?", "Can I pay by credit card?", "boleto"],
      ["el pasaporte", "passport", "n.", "Necesito mi pasaporte para viajar.", "I need my passport to travel.", "libro"],
      ["la identificación", "ID card", "n.", "¿Tiene una identificación?", "Do you have an ID?", "boleto", "el carné de identidad"],
      ["la licencia de manejo", "driver's license", "n.", "Tengo licencia de manejo.", "I have a driver's license.", "taxi", "el carné de conducir"],
      ["la computadora", "computer", "n.", "Trabajo con la computadora.", "I work on the computer.", "laptop", "el ordenador"]
    ],
    gram: { t: "Este, esta", rule: "Este (masculine) and esta (feminine) mean this. Plural: estos, estas.",
      ex: [["Esta maleta es grande.", "This suitcase is big."], ["Este reloj es nuevo.", "This watch is new."], ["Estas llaves son de Diego.", "These keys are Diego's."]] },
    conv: [
      ["diego", "¡No encuentro mis llaves!", "I can't find my keys!"],
      ["sofia", "¿Están en tu bolsa?", "Are they in your bag?"],
      ["diego", "No. Aquí están mi cartera y mi celular.", "No. Here are my wallet and my phone."],
      ["sofia", "Mira, están al lado de la computadora.", "Look, they're next to the computer."],
      ["diego", "¡Ay, gracias!", "Oh, thank you!"]
    ] },
  { id: "8-7", t: "Nacionalidades", en: "Nationalities", bg: "plaza", cast: ["mateo", "lupita"], icon: "pin",
    words: [
      ["español / española", "Spanish", "adj.", "Mi profesora es española.", "My teacher is Spanish.", "pin"],
      ["estadounidense", "American (US)", "adj.", "Soy estadounidense.", "I'm American.", "#EE. UU."],
      ["alemán / alemana", "German", "adj.", "Mi vecino es alemán.", "My neighbor is German.", "pin"],
      ["japonés / japonesa", "Japanese", "adj.", "Me gusta la comida japonesa.", "I like Japanese food.", "pin"],
      ["marroquí", "Moroccan", "adj.", "Mi compañera es marroquí.", "My coworker is Moroccan.", "pin"],
      ["inglés / inglesa", "English", "adj.", "Hablo inglés.", "I speak English.", "pin"],
      ["el idioma", "language", "n.", "¿Qué idiomas hablas?", "What languages do you speak?", "#ABC"],
      ["ser de + país", "to be from + country", "expr.", "Ella es de Japón.", "She is from Japan.", "mapa"]
    ],
    gram: { t: "Nationalities", rule: "Nationalities ending in a consonant add -a for women: alemán → alemana, español → española. Ones ending in -e or -í don't change: estadounidense, marroquí.",
      ex: [["Él es japonés y ella es japonesa.", "He is Japanese and she is Japanese."], ["Mi amiga es alemana.", "My friend is German."], ["Somos estadounidenses.", "We are American."]] },
    conv: [
      ["mateo", "¿De dónde es tu profesora?", "Where is your teacher from?"],
      ["lupita", "Es española, de Madrid.", "She's Spanish, from Madrid."],
      ["mateo", "¿Y tus compañeros?", "And your classmates?"],
      ["lupita", "Hay una chica japonesa y un chico alemán.", "There's a Japanese girl and a German guy."],
      ["mateo", "¡Qué internacional!", "How international!"]
    ] }
]},
{ t: "Comer y beber", en: "Eating and drinking", lessons: [
  { id: "9-1", t: "Las comidas del día", en: "Meals of the day", bg: "casa", cast: ["carmen", "mateo"], icon: "olla",
    words: [
      ["el desayuno", "breakfast", "n.", "El desayuno es a las siete.", "Breakfast is at seven.", "cafe"],
      ["desayunar", "to have breakfast", "v.", "Desayuno huevos con frijoles.", "I have eggs with beans for breakfast.", "cafe"],
      ["la comida", "lunch; food", "n.", "La comida es a las dos.", "Lunch is at two.", "olla"],
      ["comer", "to eat; to have lunch", "v.", "¿Dónde comes hoy?", "Where are you having lunch today?", "olla"],
      ["la merienda", "afternoon snack", "n.", "De merienda tomo café con pan.", "For my afternoon snack I have coffee and bread.", "pan"],
      ["merendar", "to have an afternoon snack", "v.", "Los niños meriendan a las cinco.", "The kids have a snack at five.", "pan"],
      ["la cena", "dinner", "n.", "La cena está lista.", "Dinner is ready.", "olla"],
      ["cenar", "to have dinner", "v.", "Cenamos a las nueve.", "We have dinner at nine.", "luna"],
      ["beber / tomar", "to drink", "v.", "Bebo mucha agua.", "I drink a lot of water.", "agua"]
    ],
    gram: { t: "e → ie verbs", rule: "Some verbs change e to ie except with nosotros: merendar → meriendo, quieres, empieza.",
      ex: [["Meriendo a las cinco.", "I have a snack at five."], ["¿Quieres café?", "Do you want coffee?"], ["La clase empieza a las ocho.", "Class starts at eight."]] },
    conv: [
      ["carmen", "Mateo, ¿quieres desayunar?", "Mateo, do you want breakfast?"],
      ["mateo", "Sí, por favor. ¿Qué hay?", "Yes, please. What is there?"],
      ["carmen", "Hay huevos, pan y café.", "There are eggs, bread and coffee."],
      ["mateo", "Huevos con pan, gracias.", "Eggs with bread, thanks."],
      ["carmen", "¿Y vienes a cenar en la noche?", "And are you coming to dinner tonight?"],
      ["mateo", "Sí, ceno aquí a las nueve.", "Yes, I'll have dinner here at nine."]
    ] },
  { id: "9-2", t: "Las bebidas", en: "Drinks", bg: "taqueria", cast: ["pepe", "lupita"], icon: "agua",
    words: [
      ["el agua mineral", "mineral water", "n.", "Un agua mineral, por favor.", "A mineral water, please.", "agua"],
      ["con gas / sin gas", "sparkling / still", "expr.", "¿El agua con gas o sin gas?", "Sparkling or still water?", "agua"],
      ["el té", "tea", "n.", "Tomo té en la tarde.", "I drink tea in the afternoon.", "cafe"],
      ["el café con leche", "coffee with milk", "n.", "Un café con leche, por favor.", "A coffee with milk, please.", "cafe"],
      ["el café negro", "black coffee", "n.", "Me gusta el café negro.", "I like black coffee.", "cafe", "el café solo"],
      ["el cortado", "coffee with a little milk", "n.", "Un cortado, por favor.", "A cortado, please.", "cafe"],
      ["la cerveza", "beer", "n.", "Una cerveza fría, por favor.", "A cold beer, please.", ""],
      ["el vino tinto / blanco", "red / white wine", "n.", "¿Vino tinto o blanco?", "Red or white wine?", ""]
    ],
    gram: { t: "Un, una", rule: "Un goes with masculine nouns (un café), una with feminine (una cerveza). Agua is feminine but takes el and un: el agua, un agua.",
      ex: [["Un té, por favor.", "A tea, please."], ["Una cerveza, por favor.", "A beer, please."], ["El agua está fría.", "The water is cold."]] },
    conv: [
      ["pepe", "¿Qué va a tomar?", "What will you have to drink?"],
      ["lupita", "Un agua mineral, por favor.", "A mineral water, please."],
      ["pepe", "¿Con gas o sin gas?", "Sparkling or still?"],
      ["lupita", "Con gas. Y un café con leche.", "Sparkling. And a coffee with milk."],
      ["pepe", "Muy bien. ¿Algo más?", "Very good. Anything else?"],
      ["lupita", "No, gracias.", "No, thanks."]
    ] },
  { id: "9-3", t: "Los alimentos", en: "Food", bg: "mercado", cast: ["sofia", "pepe"], icon: "pan",
    words: [
      ["la carne", "meat", "n.", "No como carne.", "I don't eat meat.", ""],
      ["el pescado", "fish (food)", "n.", "Los viernes comemos pescado.", "On Fridays we eat fish.", ""],
      ["la verdura", "vegetables", "n.", "Compro verdura en el mercado.", "I buy vegetables at the market.", "fruta"],
      ["el huevo", "egg", "n.", "Quiero dos huevos, por favor.", "I want two eggs, please.", ""],
      ["el pan", "bread", "n.", "El pan está caliente.", "The bread is hot.", "pan"],
      ["la torta", "sandwich on a roll", "n.", "Una torta de jamón, por favor.", "A ham torta, please.", "pan", "el bocadillo"],
      ["el sándwich", "sandwich", "n.", "Como un sándwich en la oficina.", "I eat a sandwich at the office.", "pan"],
      ["la hamburguesa", "hamburger", "n.", "Los niños quieren hamburguesas.", "The kids want hamburgers.", ""]
    ],
    gram: { t: "Plurals", rule: "Add -s after a vowel (huevo → huevos) and -es after a consonant (pan → panes).",
      ex: [["un huevo, dos huevos", "one egg, two eggs"], ["un pan, dos panes", "one roll, two rolls"], ["una hamburguesa, tres hamburguesas", "one hamburger, three hamburgers"]] },
    conv: [
      ["sofia", "¿Tiene pescado hoy?", "Do you have fish today?"],
      ["pepe", "No, hoy solo tengo carne y pollo.", "No, today I only have meat and chicken."],
      ["sofia", "Entonces medio kilo de carne y doce huevos.", "Then half a kilo of meat and twelve eggs."],
      ["pepe", "¿Algo de verdura?", "Any vegetables?"],
      ["sofia", "Sí, jitomate y cebolla.", "Yes, tomato and onion."]
    ] },
  { id: "9-4", t: "En el restaurante", en: "At the restaurant", bg: "taqueria", cast: ["pepe", "diego"], icon: "olla",
    words: [
      ["el restaurante", "restaurant", "n.", "Este restaurante es muy bueno.", "This restaurant is very good.", "olla"],
      ["el bar", "bar", "n.", "Vamos a un bar el viernes.", "Let's go to a bar on Friday.", ""],
      ["el mesero / la mesera", "waiter / waitress", "n.", "El mesero es muy simpático.", "The waiter is very nice.", "", "el camarero"],
      ["la mesa", "table", "n.", "Una mesa para dos, por favor.", "A table for two, please.", ""],
      ["el menú", "menu", "n.", "¿Me trae el menú, por favor?", "Can you bring me the menu, please?", "libro"],
      ["el primer plato", "first course", "n.", "De primer plato, sopa.", "For the first course, soup.", "olla"],
      ["el segundo plato", "main course", "n.", "De segundo plato, pollo con arroz.", "For the main course, chicken with rice.", "olla"],
      ["el postre", "dessert", "n.", "De postre, flan.", "For dessert, flan.", "pastel"],
      ["la sopa / la ensalada", "soup / salad", "n.", "La sopa está muy caliente.", "The soup is very hot.", "olla"],
      ["la paella / la tortilla", "paella / Spanish omelette; in Mexico tortilla also means corn tortilla", "n.", "La paella es un plato de España.", "Paella is a dish from Spain.", "olla"]
    ],
    gram: { t: "Ordering politely", rule: "To ask politely: ¿Me trae…? (Will you bring me…?) or ¿Me da…? (Can I have…?) + por favor.",
      ex: [["¿Me trae la cuenta, por favor?", "Can you bring me the check, please?"], ["¿Me da un café?", "Can I have a coffee?"], ["Para mí, la sopa.", "For me, the soup."]] },
    conv: [
      ["pepe", "Buenas noches. ¿Una mesa para uno?", "Good evening. A table for one?"],
      ["diego", "Sí, gracias. ¿Me trae el menú?", "Yes, thanks. Can you bring me the menu?"],
      ["pepe", "Claro. De primer plato hay sopa o ensalada.", "Of course. For the first course there's soup or salad."],
      ["diego", "La sopa. Y de segundo, pescado.", "The soup. And for the main course, fish."],
      ["pepe", "¿Y de postre?", "And for dessert?"],
      ["diego", "Un flan, por favor. Y después la cuenta.", "A flan, please. And then the check."]
    ] }
]},
{ t: "Estudiar y trabajar", en: "School and work", lessons: [
  { id: "10-1", t: "La escuela", en: "School", bg: "aula", cast: ["mateo", "lupita"], icon: "escuela",
    words: [
      ["la escuela / el colegio", "school", "n.", "Mi hija va a la escuela.", "My daughter goes to school.", "escuela"],
      ["la preparatoria", "high school", "n.", "Mi sobrino estudia en la preparatoria.", "My nephew is in high school.", "escuela", "el instituto"],
      ["la universidad", "university", "n.", "Estudio en una universidad en línea.", "I study at an online university.", "escuela"],
      ["la clase", "class", "n.", "La clase de español es los lunes.", "Spanish class is on Mondays.", "libro"],
      ["la biblioteca", "library", "n.", "Estudio en la biblioteca.", "I study at the library.", "libro"],
      ["el profesor / la profesora", "teacher", "n.", "Mi profesora es de Guadalajara.", "My teacher is from Guadalajara.", "libro"],
      ["el estudiante / la estudiante", "student", "n.", "Hay veinte estudiantes en la clase.", "There are twenty students in the class.", ""],
      ["el director / la directora", "principal, director", "n.", "La directora de la escuela es muy simpática.", "The school principal is very nice.", ""],
      ["el horario", "schedule", "n.", "¿Cuál es tu horario?", "What is your schedule?", "calendario"],
      ["el examen", "exam", "n.", "Mañana tengo un examen.", "Tomorrow I have an exam.", "boleto"]
    ],
    gram: { t: "Question words", rule: "Question words carry an accent: qué, cuál, dónde, cuándo, cómo, quién, cuánto.",
      ex: [["¿Dónde estudias?", "Where do you study?"], ["¿Cuándo es el examen?", "When is the exam?"], ["¿Quién es tu profesor?", "Who is your teacher?"]] },
    conv: [
      ["mateo", "¿Qué estudias, Lupita?", "What do you study, Lupita?"],
      ["lupita", "Estudio inglés en la universidad.", "I study English at the university."],
      ["mateo", "¿Cuándo son tus clases?", "When are your classes?"],
      ["lupita", "Los martes y jueves en la noche.", "Tuesdays and Thursdays at night."],
      ["mateo", "¿Y cuándo es el examen?", "And when is the exam?"],
      ["lupita", "¡El viernes! Hoy voy a la biblioteca.", "On Friday! Today I'm going to the library."]
    ] },
  { id: "10-2", t: "En el salón", en: "In the classroom", bg: "aula", cast: ["carmen", "diego"], icon: "libro",
    words: [
      ["el ejercicio", "exercise", "n.", "Hagan el ejercicio dos.", "Do exercise two.", "libro"],
      ["la actividad", "activity", "n.", "Esta actividad es fácil.", "This activity is easy.", "libro"],
      ["la lección / la unidad", "lesson / unit", "n.", "Hoy empezamos la unidad tres.", "Today we start unit three.", "libro"],
      ["la página", "page", "n.", "Abran el libro en la página diez.", "Open the book to page ten.", "libro"],
      ["la pregunta", "question", "n.", "Tengo una pregunta.", "I have a question.", "#¿?"],
      ["en parejas / en grupos", "in pairs / in groups", "expr.", "Trabajen en parejas.", "Work in pairs.", ""],
      ["la tarea", "homework", "n.", "Hago la tarea en la noche.", "I do my homework at night.", "libro", "los deberes"],
      ["aprender / estudiar", "to learn / to study", "v.", "Quiero aprender español.", "I want to learn Spanish.", "libro"],
      ["practicar / repetir", "to practice / to repeat", "v.", "¿Puede repetir, por favor?", "Can you repeat that, please?", "#¿?"],
      ["entender / comprender", "to understand", "v.", "No entiendo. Más despacio, por favor.", "I don't understand. Slower, please.", "#¿?"],
      ["ir a clase", "to go to class", "expr.", "Voy a clase los lunes.", "I go to class on Mondays.", "escuela"]
    ],
    gram: { t: "Classroom commands", rule: "Teachers give instructions to the group with the ustedes command: escuchen, lean, escriban, repitan, trabajen.",
      ex: [["Escuchen y repitan.", "Listen and repeat."], ["Lean el texto.", "Read the text."], ["Escriban las respuestas.", "Write the answers."]] },
    conv: [
      ["carmen", "Buenos días. Abran el libro en la página veinte.", "Good morning. Open your books to page twenty."],
      ["diego", "Perdón, ¿en qué página?", "Sorry, what page?"],
      ["carmen", "Veinte. Hagan el ejercicio uno en parejas.", "Twenty. Do exercise one in pairs."],
      ["diego", "No entiendo la pregunta tres.", "I don't understand question three."],
      ["carmen", "No hay problema. Te explico.", "No problem. I'll explain."]
    ] },
  { id: "10-3", t: "Los útiles", en: "School supplies", bg: "aula", cast: ["mateo", "lupita"], icon: "libro",
    words: [
      ["el libro", "book", "n.", "Mi libro de español es nuevo.", "My Spanish book is new.", "libro"],
      ["el diccionario", "dictionary", "n.", "Busco la palabra en el diccionario.", "I look up the word in the dictionary.", "libro"],
      ["el papel", "paper", "n.", "¿Tienes papel?", "Do you have paper?", ""],
      ["la pluma", "pen", "n.", "¿Me prestas una pluma?", "Can I borrow a pen?", "", "el bolígrafo"],
      ["el lápiz", "pencil", "n.", "Escribo con lápiz.", "I write in pencil.", ""],
      ["la goma", "eraser", "n.", "Necesito una goma.", "I need an eraser.", ""],
      ["la copia", "photocopy", "n.", "Hay una copia para cada estudiante.", "There's a copy for each student.", "", "la fotocopia"],
      ["la silla", "chair", "n.", "Hay veinte sillas en el salón.", "There are twenty chairs in the classroom.", ""],
      ["el librero", "bookshelf", "n.", "El diccionario está en el librero.", "The dictionary is on the bookshelf.", "libro", "la estantería"],
      ["el clóset / el armario", "closet, cabinet", "n.", "La ropa está en el clóset.", "The clothes are in the closet.", ""],
      ["el pizarrón", "board (classroom)", "n.", "La maestra escribe en el pizarrón.", "The teacher writes on the board.", "", "la pizarra"],
      ["el mapa", "map", "n.", "Hay un mapa de México en la pared.", "There's a map of Mexico on the wall.", "mapa"],
      ["internet", "internet", "n.", "Busco información en internet.", "I look for information online.", "laptop"]
    ],
    conv: [
      ["mateo", "Lupita, ¿me prestas una pluma?", "Lupita, can I borrow a pen?"],
      ["lupita", "Solo tengo lápiz. ¿Está bien?", "I only have a pencil. Is that okay?"],
      ["mateo", "Sí, gracias. ¿Y una goma?", "Yes, thanks. And an eraser?"],
      ["lupita", "Aquí está. El diccionario está en el librero.", "Here it is. The dictionary is on the bookshelf."],
      ["mateo", "¡Perfecto!", "Perfect!"]
    ] },
  { id: "10-4", t: "Las profesiones", en: "Jobs", bg: "plaza", cast: ["sofia", "diego"], icon: "laptop",
    words: [
      ["el abogado / la abogada", "lawyer", "n.", "Mi prima es abogada.", "My cousin is a lawyer.", ""],
      ["el médico / la médica", "doctor", "n.", "El médico trabaja en el hospital.", "The doctor works at the hospital.", "farmacia"],
      ["el enfermero / la enfermera", "nurse", "n.", "Mi mamá es enfermera.", "My mom is a nurse.", "farmacia"],
      ["el ingeniero / la ingeniera", "engineer", "n.", "Mi papá es ingeniero.", "My dad is an engineer.", "laptop"],
      ["el taxista", "taxi driver", "n.", "El taxista es muy simpático.", "The taxi driver is very nice.", "taxi"],
      ["el conductor / la conductora", "driver", "n.", "El conductor del camión es mi tío.", "The bus driver is my uncle.", "camion"],
      ["el ama de casa", "homemaker", "n.", "Mi abuela es ama de casa.", "My grandmother is a homemaker.", "casa"],
      ["el policía / la policía", "police officer; the police", "n.", "El policía está en la esquina.", "The police officer is on the corner.", ""],
      ["el bombero / la bombera", "firefighter", "n.", "Mi vecino es bombero.", "My neighbor is a firefighter.", ""],
      ["el cantante / la cantante", "singer", "n.", "Mi hermana es cantante.", "My sister is a singer.", "musica"],
      ["el actor / la actriz", "actor / actress", "n.", "La actriz es mexicana.", "The actress is Mexican.", "tele"]
    ],
    gram: { t: "Jobs without un/una", rule: "After ser, don't put un or una before a job: soy abogada (not soy una abogada).",
      ex: [["Soy enfermera.", "I'm a nurse."], ["Mi papá es taxista.", "My dad is a taxi driver."], ["¿Eres ingeniero?", "Are you an engineer?"]] },
    conv: [
      ["sofia", "Diego, ¿a qué te dedicas?", "Diego, what do you do for a living?"],
      ["diego", "Soy ingeniero. Trabajo en una empresa.", "I'm an engineer. I work at a company."],
      ["sofia", "¡Qué interesante! Yo soy enfermera.", "How interesting! I'm a nurse."],
      ["diego", "¿Trabajas en un hospital?", "Do you work in a hospital?"],
      ["sofia", "Sí, en el hospital del centro.", "Yes, in the hospital downtown."]
    ] },
  { id: "10-5", t: "El trabajo", en: "Work", bg: "calle", cast: ["mateo", "diego"], icon: "laptop",
    words: [
      ["el trabajo", "job, work", "n.", "Mi trabajo está en el centro.", "My job is downtown.", "laptop"],
      ["la profesión", "profession", "n.", "Profesión: ingeniera.", "Profession: engineer.", ""],
      ["dedicarse a", "to do for a living", "v.", "¿A qué te dedicas?", "What do you do for a living?", ""],
      ["la empresa", "company", "n.", "Trabajo en una empresa grande.", "I work at a big company.", ""],
      ["la oficina", "office", "n.", "La oficina abre a las nueve.", "The office opens at nine.", "laptop"],
      ["el teléfono / el fax", "phone / fax", "n.", "El teléfono de la oficina no funciona.", "The office phone doesn't work.", "telefono"],
      ["vender", "to sell", "v.", "Mi tía vende ropa.", "My aunt sells clothes.", "tienda"],
      ["estar sin trabajo", "to be unemployed", "expr.", "Mi hermano está sin trabajo.", "My brother is unemployed.", "", "estar en paro"],
      ["tener trabajo", "to have a job", "expr.", "Ahora tengo trabajo nuevo.", "Now I have a new job.", "laptop"],
      ["las vacaciones", "vacation", "n.", "En agosto tengo vacaciones.", "In August I have vacation.", "sol"]
    ],
    gram: { t: "Tener", rule: "Tener is irregular: tengo, tienes, tiene, tenemos, tienen.",
      ex: [["Tengo trabajo.", "I have a job."], ["¿Tienes vacaciones?", "Do you have vacation?"], ["Tenemos una oficina en el centro.", "We have an office downtown."]] },
    conv: [
      ["mateo", "¿Tienes trabajo ahora?", "Do you have a job now?"],
      ["diego", "Sí, trabajo en una empresa de computadoras.", "Yes, I work at a computer company."],
      ["mateo", "¿Y qué haces?", "And what do you do?"],
      ["diego", "Vendo computadoras por teléfono.", "I sell computers by phone."],
      ["mateo", "¿Tienes vacaciones en diciembre?", "Do you have vacation in December?"],
      ["diego", "Sí, dos semanas.", "Yes, two weeks."]
    ] }
]},
{ t: "Ocio y comunicación", en: "Leisure and communication", lessons: [
  { id: "11-1", t: "¿Qué hacemos?", en: "What shall we do?", bg: "parque", cast: ["sofia", "lupita"], icon: "tele",
    words: [
      ["el museo", "museum", "n.", "El museo es gratis los domingos.", "The museum is free on Sundays.", ""],
      ["el teatro", "theater", "n.", "Vamos al teatro el sábado.", "We're going to the theater on Saturday.", "tele"],
      ["el parque", "park", "n.", "Hay muchos árboles en el parque.", "There are lots of trees in the park.", ""],
      ["el concierto", "concert", "n.", "El concierto empieza a las ocho.", "The concert starts at eight.", "musica"],
      ["la película", "movie", "n.", "Es una película mexicana.", "It's a Mexican movie.", "tele"],
      ["el antro / la discoteca", "nightclub", "n.", "Los viernes vamos al antro.", "On Fridays we go to the club.", "musica"],
      ["el circo", "circus", "n.", "Los niños van al circo.", "The kids are going to the circus.", "fiesta"],
      ["la exposición", "exhibition", "n.", "Hay una exposición de fotos en el museo.", "There's a photo exhibition at the museum.", "foto"],
      ["la foto", "photo", "n.", "Mira esta foto de mi familia.", "Look at this photo of my family.", "foto"],
      ["el turista / la turista", "tourist", "n.", "Hay muchos turistas en el centro.", "There are lots of tourists downtown.", "pin"],
      ["viajar", "to travel", "v.", "Me gusta viajar.", "I like to travel.", "boleto"]
    ],
    gram: { t: "Preferir", rule: "Preferir (to prefer) changes e to ie: prefiero, prefieres, prefiere.",
      ex: [["Prefiero el cine.", "I prefer the movies."], ["¿Prefieres el museo o el parque?", "Do you prefer the museum or the park?"], ["Ella prefiere viajar.", "She prefers to travel."]] },
    conv: [
      ["sofia", "¿Qué hacemos el domingo?", "What should we do on Sunday?"],
      ["lupita", "¿Vamos al museo? Hay una exposición de fotos.", "Shall we go to the museum? There's a photo exhibition."],
      ["sofia", "Prefiero ir al parque. Hace sol.", "I'd rather go to the park. It's sunny."],
      ["lupita", "Bueno, al parque en la mañana y al concierto en la noche.", "Okay, the park in the morning and the concert at night."],
      ["sofia", "¡Perfecto!", "Perfect!"]
    ] },
  { id: "11-2", t: "Los deportes", en: "Sports", bg: "parque", cast: ["mateo", "diego"], icon: "balon",
    words: [
      ["hacer deporte", "to play sports", "expr.", "Hago deporte los fines de semana.", "I play sports on weekends.", "balon"],
      ["hacer ejercicio", "to exercise", "expr.", "Hago ejercicio en la mañana.", "I exercise in the morning.", ""],
      ["correr", "to run", "v.", "Corro en el parque.", "I run in the park.", ""],
      ["nadar", "to swim", "v.", "Me gusta nadar en el mar.", "I like swimming in the sea.", ""],
      ["esquiar", "to ski", "v.", "No sé esquiar.", "I don't know how to ski.", "nieve"],
      ["el básquetbol", "basketball", "n.", "Juego básquetbol con mis amigos.", "I play basketball with my friends.", "balon", "el baloncesto"],
      ["el tenis", "tennis", "n.", "Mi hermana juega tenis.", "My sister plays tennis.", "balon"],
      ["la gimnasia", "gymnastics", "n.", "Mi hija hace gimnasia.", "My daughter does gymnastics.", ""],
      ["el juego", "game", "n.", "Es un juego muy divertido.", "It's a really fun game.", ""],
      ["saber + verbo", "to know how to", "expr.", "¿Sabes nadar?", "Do you know how to swim?", ""]
    ],
    gram: { t: "Saber + verb", rule: "Use saber + a verb for skills: sé nadar, sabes esquiar. Saber is irregular only in the yo form: sé.",
      ex: [["Sé nadar.", "I know how to swim."], ["¿Sabes jugar tenis?", "Do you know how to play tennis?"], ["No sabemos esquiar.", "We don't know how to ski."]] },
    conv: [
      ["mateo", "¿Haces deporte?", "Do you play sports?"],
      ["diego", "Sí, juego básquetbol los martes. ¿Y tú?", "Yes, I play basketball on Tuesdays. And you?"],
      ["mateo", "Yo corro y nado.", "I run and swim."],
      ["diego", "¿Sabes jugar tenis?", "Do you know how to play tennis?"],
      ["mateo", "No, pero quiero aprender.", "No, but I want to learn."]
    ] },
  { id: "11-3", t: "Tele, radio y prensa", en: "TV, radio and press", bg: "casa", cast: ["carmen", "diego"], icon: "tele",
    words: [
      ["la televisión", "television", "n.", "No me gusta ver la televisión.", "I don't like watching TV.", "tele"],
      ["la radio", "radio", "n.", "Escucho la radio en el carro.", "I listen to the radio in the car.", "musica"],
      ["el periódico", "newspaper", "n.", "Mi papá lee el periódico.", "My dad reads the newspaper.", "libro"],
      ["la revista", "magazine", "n.", "Compro una revista.", "I buy a magazine.", "libro"],
      ["el puesto de periódicos", "newsstand", "n.", "El puesto de periódicos está en la esquina.", "The newsstand is on the corner.", "tienda", "el quiosco"],
      ["la canción", "song", "n.", "Me encanta esta canción.", "I love this song.", "musica"],
      ["cantar", "to sing", "v.", "Mi abuela canta muy bien.", "My grandmother sings very well.", "musica"],
      ["la música", "music", "n.", "Escucho música en el camión.", "I listen to music on the bus.", "musica"]
    ],
    conv: [
      ["carmen", "¿Qué haces, mijo?", "What are you doing, son?"],
      ["diego", "Leo el periódico. ¿Y tú?", "I'm reading the newspaper. And you?"],
      ["carmen", "Escucho la radio. ¡Me encanta esta canción!", "I'm listening to the radio. I love this song!"],
      ["diego", "¿Cantamos?", "Shall we sing?"],
      ["carmen", "¡Sí!", "Yes!"]
    ] },
  { id: "11-4", t: "Cartas e internet", en: "Letters and internet", bg: "casa", cast: ["lupita", "mateo"], icon: "laptop",
    words: [
      ["la carta", "letter", "n.", "Escribo una carta a mi abuela.", "I write a letter to my grandmother.", ""],
      ["la postal", "postcard", "n.", "Te mando una postal de Cancún.", "I'm sending you a postcard from Cancún.", ""],
      ["el sobre", "envelope", "n.", "La carta está en el sobre.", "The letter is in the envelope.", ""],
      ["la estampilla", "stamp", "n.", "Necesito una estampilla.", "I need a stamp.", "", "el sello"],
      ["el código postal", "zip code", "n.", "Mi código postal es 06700.", "My zip code is 06700.", "casa"],
      ["el mensaje", "message", "n.", "Te escribo un mensaje.", "I'll send you a message.", "telefono"],
      ["la página web", "website", "n.", "La página web de la escuela es nueva.", "The school's website is new.", "laptop"],
      ["arroba, punto", "at (@), dot", "n.", "ana arroba correo punto mx", "ana at correo dot mx", "#@"],
      ["guion, guion bajo", "hyphen, underscore", "n.", "ana guion bajo lopez", "ana underscore lopez", "#_"],
      ["el teléfono fijo", "landline", "n.", "Mis abuelos solo tienen teléfono fijo.", "My grandparents only have a landline.", "telefono"]
    ],
    conv: [
      ["mateo", "¿Cuál es tu correo electrónico?", "What's your email?"],
      ["lupita", "Lupita, guion bajo, ramos, arroba, correo, punto, mx.", "Lupita underscore ramos at correo dot mx."],
      ["mateo", "¿Guion o guion bajo?", "Hyphen or underscore?"],
      ["lupita", "Guion bajo. Te escribo un mensaje.", "Underscore. I'll send you a message."],
      ["mateo", "¡Gracias!", "Thanks!"]
    ] }
]},
{ t: "La vivienda", en: "Housing", lessons: [
  { id: "12-1", t: "Busco departamento", en: "Apartment hunting", bg: "casa", cast: ["sofia", "pepe"], icon: "casa",
    words: [
      ["el departamento", "apartment", "n.", "Vivo en un departamento pequeño.", "I live in a small apartment.", "casa", "el piso / el apartamento"],
      ["el estudio", "studio apartment", "n.", "Rento un estudio en el centro.", "I rent a studio downtown.", "casa"],
      ["rentar", "to rent", "v.", "Quiero rentar un departamento.", "I want to rent an apartment.", "dinero", "alquilar"],
      ["nuevo / viejo", "new / old", "adj.", "El edificio es viejo.", "The building is old.", "casa"],
      ["céntrico / céntrica", "central", "adj.", "El departamento es muy céntrico.", "The apartment is very central.", "pin"],
      ["exterior / interior", "facing the street / facing inside", "adj.", "Es un departamento exterior, con mucha luz.", "It's an apartment facing the street, with lots of light.", ""],
      ["bien comunicado", "well connected by transit", "expr.", "La casa está bien comunicada: hay metro.", "The house is well connected: there's a subway.", "metro"],
      ["el aire acondicionado", "air conditioning", "n.", "El departamento tiene aire acondicionado.", "The apartment has air conditioning.", ""],
      ["la calefacción", "heating", "n.", "En Chicago necesitas calefacción.", "In Chicago you need heating.", "nieve"]
    ],
    gram: { t: "Ser or estar for homes", rule: "Ser describes the home (es grande, es nuevo). Estar gives its location (está en el centro).",
      ex: [["El departamento es pequeño.", "The apartment is small."], ["Está en la calle Morelos.", "It's on Morelos Street."], ["Es viejo, pero está cerca del metro.", "It's old, but it's near the subway."]] },
    conv: [
      ["sofia", "Buenos días. ¿Se renta el departamento?", "Good morning. Is the apartment for rent?"],
      ["pepe", "Sí. Tiene dos cuartos y es muy céntrico.", "Yes. It has two bedrooms and it's very central."],
      ["sofia", "¿Tiene aire acondicionado?", "Does it have air conditioning?"],
      ["pepe", "No, pero tiene calefacción.", "No, but it has heating."],
      ["sofia", "¿Y está bien comunicado?", "And is it well connected?"],
      ["pepe", "Sí, el metro está a dos calles.", "Yes, the subway is two blocks away."]
    ] },
  { id: "12-2", t: "Las partes de la casa", en: "Parts of the house", bg: "casa", cast: ["carmen", "lupita"], icon: "casa",
    words: [
      ["el elevador", "elevator", "n.", "El edificio no tiene elevador.", "The building doesn't have an elevator.", "", "el ascensor"],
      ["la escalera", "stairs", "n.", "Subo por la escalera.", "I go up the stairs.", ""],
      ["la terraza", "terrace, balcony", "n.", "Comemos en la terraza.", "We eat on the terrace.", "sol"],
      ["el jardín", "yard, garden", "n.", "El perro está en el jardín.", "The dog is in the yard.", ""],
      ["la ventana", "window", "n.", "Abre la ventana, por favor.", "Open the window, please.", ""],
      ["la puerta", "door", "n.", "Cierra la puerta, por favor.", "Close the door, please.", ""],
      ["la sala", "living room", "n.", "La tele está en la sala.", "The TV is in the living room.", "tele", "el salón / la sala de estar"],
      ["la recámara", "bedroom", "n.", "Mi recámara es pequeña.", "My bedroom is small.", "cama", "el dormitorio"],
      ["el garaje", "garage", "n.", "El carro está en el garaje.", "The car is in the garage.", "taxi"],
      ["la habitación", "room", "n.", "La casa tiene cinco habitaciones.", "The house has five rooms.", "casa"]
    ],
    gram: { t: "Asking a friend to do something", rule: "To tell a friend (tú) to do something, use the él/ella form of the verb: abre, cierra, sube, pasa.",
      ex: [["Abre la puerta, por favor.", "Open the door, please."], ["Cierra la ventana.", "Close the window."], ["Pasa a la sala.", "Come into the living room."]] },
    conv: [
      ["carmen", "Pasa, Lupita. Esta es la sala.", "Come in, Lupita. This is the living room."],
      ["lupita", "¡Qué bonita! ¿Y la recámara?", "How pretty! And the bedroom?"],
      ["carmen", "Arriba. Sube por la escalera.", "Upstairs. Go up the stairs."],
      ["lupita", "¿Tienen jardín?", "Do you have a yard?"],
      ["carmen", "Sí, y una terraza con flores.", "Yes, and a terrace with flowers."]
    ] },
  { id: "12-3", t: "Los muebles", en: "Furniture", bg: "casa", cast: ["mateo", "sofia"], icon: "cama",
    words: [
      ["el sofá", "sofa", "n.", "El gato duerme en el sofá.", "The cat sleeps on the sofa.", ""],
      ["el sillón", "armchair", "n.", "Mi abuelo lee en su sillón.", "My grandfather reads in his armchair.", ""],
      ["la cama", "bed", "n.", "La cama es grande.", "The bed is big.", "cama"],
      ["la regadera", "shower", "n.", "La regadera está en el baño.", "The shower is in the bathroom.", "", "la ducha"],
      ["el lavabo", "bathroom sink", "n.", "El jabón está en el lavabo.", "The soap is on the sink.", ""],
      ["el cuarto de baño", "bathroom", "n.", "El cuarto de baño es pequeño.", "The bathroom is small.", "#WC"],
      ["la tele", "TV", "n.", "La tele está en la sala.", "The TV is in the living room.", "tele"],
      ["el DVD / el video", "DVD / video", "n.", "Tengo muchas películas en DVD.", "I have lots of movies on DVD.", "tele", "el vídeo"]
    ],
    gram: { t: "En, entre, al lado de", rule: "En = in or on, entre = between, al lado de = next to.",
      ex: [["El control está en el sofá.", "The remote is on the sofa."], ["La mesa está entre el sofá y la tele.", "The table is between the sofa and the TV."], ["El sillón está al lado de la ventana.", "The armchair is next to the window."]] },
    conv: [
      ["mateo", "¿Dónde pongo el sillón?", "Where do I put the armchair?"],
      ["sofia", "Al lado de la ventana, por favor.", "Next to the window, please."],
      ["mateo", "¿Y la mesa?", "And the table?"],
      ["sofia", "Entre el sofá y la tele.", "Between the sofa and the TV."],
      ["mateo", "¡Listo! La sala está muy bonita.", "Done! The living room looks great."]
    ] }
]},
{ t: "Servicios y compras", en: "Services and shopping", lessons: [
  { id: "13-1", t: "El banco y el correo", en: "Bank and post office", bg: "calle", cast: ["diego", "carmen"], icon: "dinero",
    words: [
      ["el banco", "bank", "n.", "El banco cierra a las cuatro.", "The bank closes at four.", "dinero"],
      ["el dinero", "money", "n.", "No tengo dinero.", "I don't have money.", "dinero"],
      ["el peso / el euro", "peso / euro", "n.", "En México pagan con pesos y en España con euros.", "In Mexico they pay in pesos and in Spain in euros.", "dinero"],
      ["el centavo", "cent", "n.", "Cuesta diez pesos con cincuenta centavos.", "It costs ten pesos and fifty cents.", "dinero", "el céntimo"],
      ["el billete", "bill (money); ticket", "n.", "Tengo un billete de quinientos pesos.", "I have a five-hundred-peso bill.", "dinero"],
      ["cambiar dinero", "to exchange money", "expr.", "Quiero cambiar dólares a pesos.", "I want to change dollars into pesos.", "dinero"],
      ["pagar con tarjeta", "to pay by card", "expr.", "¿Puedo pagar con tarjeta?", "Can I pay by card?", "boleto"],
      ["el precio", "price", "n.", "¿Cuál es el precio?", "What is the price?", "dinero"],
      ["la oficina de correos", "post office", "n.", "La oficina de correos está en la plaza.", "The post office is in the square.", "casa"]
    ],
    gram: { t: "Poder", rule: "¿Puedo…? asks permission. Poder changes o to ue: puedo, puedes, puede.",
      ex: [["¿Puedo pagar con tarjeta?", "Can I pay by card?"], ["¿Puedes cambiar un billete?", "Can you change a bill?"], ["¿Puede repetir, por favor?", "Can you repeat that, please?"]] },
    conv: [
      ["diego", "Buenas tardes. Quiero cambiar dinero.", "Good afternoon. I want to exchange money."],
      ["carmen", "¿Dólares a pesos?", "Dollars to pesos?"],
      ["diego", "Sí, cien dólares.", "Yes, a hundred dollars."],
      ["carmen", "Muy bien. ¿Billetes de quinientos?", "Very good. Five-hundred-peso bills?"],
      ["diego", "Mejor de cien, por favor.", "Hundreds would be better, please."]
    ] },
  { id: "13-2", t: "De compras", en: "Shopping", bg: "mercado", cast: ["lupita", "pepe"], icon: "bolsa",
    words: [
      ["el mercado / el supermercado", "market / supermarket", "n.", "Compro leche en el supermercado.", "I buy milk at the supermarket.", "bolsa"],
      ["el centro comercial", "mall", "n.", "Vamos al centro comercial.", "Let's go to the mall.", "tienda"],
      ["el vendedor / la vendedora", "salesperson", "n.", "La vendedora es muy simpática.", "The saleswoman is very nice.", "tienda"],
      ["el comprador / la compradora", "shopper, buyer", "n.", "Hay muchos compradores hoy.", "There are lots of shoppers today.", "bolsa"],
      ["la entrada / la salida", "entrance / exit", "n.", "La salida está a la derecha.", "The exit is on the right.", "#SALIDA"],
      ["la información", "information (desk)", "n.", "Pregunte en información.", "Ask at the information desk.", "#i"],
      ["caro / barato", "expensive / cheap", "adj.", "Este suéter es muy caro.", "This sweater is very expensive.", "dinero"],
      ["¿cuánto es?", "how much is it?", "expr.", "¿Cuánto es todo?", "How much is everything?", "dinero"],
      ["costar", "to cost", "v.", "¿Cuánto cuesta?", "How much does it cost?", "dinero"],
      ["pagar", "to pay", "v.", "Pago en efectivo.", "I pay in cash.", "dinero"]
    ],
    gram: { t: "Ese, esa", rule: "Ese / esa mean that, for things near the other person. Plural: esos, esas.",
      ex: [["¿Cuánto cuesta ese suéter?", "How much is that sweater?"], ["Esa falda es barata.", "That skirt is cheap."], ["Quiero esos zapatos.", "I want those shoes."]] },
    conv: [
      ["lupita", "Disculpe, ¿dónde está la salida?", "Excuse me, where is the exit?"],
      ["pepe", "Al final, a la izquierda.", "At the end, on the left."],
      ["lupita", "Gracias. ¿Y cuánto cuesta esa bolsa?", "Thanks. And how much is that bag?"],
      ["pepe", "Trescientos pesos. Es muy barata.", "Three hundred pesos. It's very cheap."],
      ["lupita", "Bueno, me la llevo.", "Okay, I'll take it."]
    ] },
  { id: "13-3", t: "La ropa", en: "Clothes", bg: "mercado", cast: ["sofia", "pepe"], icon: "tienda",
    words: [
      ["los pantalones", "pants", "n.", "Necesito unos pantalones negros.", "I need some black pants.", ""],
      ["los jeans", "jeans", "n.", "Siempre llevo jeans.", "I always wear jeans.", "", "los (pantalones) vaqueros"],
      ["la falda", "skirt", "n.", "La falda es muy bonita.", "The skirt is very pretty.", ""],
      ["la camisa", "shirt", "n.", "Mi camisa favorita es azul.", "My favorite shirt is blue.", ""],
      ["el suéter", "sweater", "n.", "Hace frío. Llevo un suéter.", "It's cold. I'm wearing a sweater.", "nieve", "el jersey"],
      ["los zapatos", "shoes", "n.", "Estos zapatos son caros.", "These shoes are expensive.", ""],
      ["llevar", "to wear", "v.", "Hoy llevo una falda.", "Today I'm wearing a skirt.", ""],
      ["la talla", "size", "n.", "¿Qué talla es?", "What size is it?", "#M"]
    ],
    conv: [
      ["sofia", "Busco un suéter.", "I'm looking for a sweater."],
      ["pepe", "¿Qué talla?", "What size?"],
      ["sofia", "Mediana. ¿Lo tiene en gris?", "Medium. Do you have it in gray?"],
      ["pepe", "Sí, aquí está. Y estos jeans están en oferta.", "Yes, here it is. And these jeans are on sale."],
      ["sofia", "Solo el suéter, gracias.", "Just the sweater, thanks."]
    ] },
  { id: "13-4", t: "La salud", en: "Health", bg: "casa", cast: ["lupita", "carmen"], icon: "farmacia",
    words: [
      ["estar enfermo / enferma", "to be sick", "expr.", "Hoy estoy enferma.", "Today I'm sick.", "farmacia"],
      ["estar malo / mala", "to be unwell", "expr.", "Mi hijo está malo.", "My son isn't well.", "farmacia"],
      ["el hospital", "hospital", "n.", "El hospital está cerca.", "The hospital is nearby.", "farmacia"],
      ["ir al médico", "to go to the doctor", "expr.", "Mañana voy al médico.", "Tomorrow I'm going to the doctor.", "farmacia"],
      ["el jabón", "soap", "n.", "No hay jabón en el baño.", "There's no soap in the bathroom.", ""],
      ["lavarse las manos", "to wash your hands", "expr.", "Me lavo las manos antes de comer.", "I wash my hands before eating.", ""],
      ["lavarse los dientes", "to brush your teeth", "expr.", "Me lavo los dientes en la noche.", "I brush my teeth at night.", ""],
      ["la cara", "face", "n.", "Me lavo la cara con agua fría.", "I wash my face with cold water.", ""],
      ["bañarse / ducharse", "to bathe / to shower", "v.", "Me baño en la mañana.", "I shower in the morning.", ""],
      ["levantarse", "to get up", "v.", "Me levanto a las seis.", "I get up at six.", "sol"]
    ],
    gram: { t: "Me, te, se verbs", rule: "Some verbs take me, te or se: me levanto, te bañas, se lava.",
      ex: [["Me levanto temprano.", "I get up early."], ["¿A qué hora te bañas?", "What time do you shower?"], ["Ella se lava los dientes.", "She brushes her teeth."]] },
    conv: [
      ["carmen", "Lupita, ¿qué tienes?", "Lupita, what's wrong?"],
      ["lupita", "Estoy enferma. No voy a trabajar.", "I'm sick. I'm not going to work."],
      ["carmen", "¿Vas al médico?", "Are you going to the doctor?"],
      ["lupita", "Sí, a las diez. Después voy a la farmacia.", "Yes, at ten. Then I'm going to the pharmacy."],
      ["carmen", "Bueno, mija. Lávate las manos y descansa.", "Okay, dear. Wash your hands and rest."]
    ] },
  { id: "13-5", t: "Lugares de la ciudad", en: "Places in town", bg: "calle", cast: ["diego", "lupita"], icon: "mapa",
    words: [
      ["el centro", "downtown", "n.", "Trabajo en el centro.", "I work downtown.", "pin"],
      ["la avenida", "avenue", "n.", "La tienda está en la avenida Reforma.", "The store is on Reforma Avenue.", "mapa"],
      ["el paseo", "promenade, boulevard", "n.", "Caminamos por el paseo.", "We walk along the boulevard.", ""],
      ["la plaza", "square, plaza", "n.", "Hay música en la plaza.", "There's music in the square.", ""],
      ["el edificio", "building", "n.", "Vivo en ese edificio.", "I live in that building.", "casa"],
      ["el monumento", "monument", "n.", "El monumento está en la avenida.", "The monument is on the avenue.", ""],
      ["la catedral / la iglesia", "cathedral / church", "n.", "La catedral está en el centro.", "The cathedral is downtown.", ""],
      ["la mezquita / la sinagoga", "mosque / synagogue", "n.", "Hay una mezquita y una sinagoga en mi barrio.", "There's a mosque and a synagogue in my neighborhood.", ""],
      ["la religión", "religion", "n.", "En mi familia hay varias religiones.", "In my family there are several religions.", ""],
      ["cristiano, judío, musulmán, budista", "Christian, Jewish, Muslim, Buddhist", "adj.", "Mi vecina es budista.", "My neighbor is Buddhist.", ""],
      ["el lugar", "place", "n.", "Es un lugar muy bonito.", "It's a very pretty place.", "pin"]
    ],
    conv: [
      ["diego", "¿Qué lugares hay en el centro?", "What places are there downtown?"],
      ["lupita", "Hay una catedral, una plaza y muchos edificios viejos.", "There's a cathedral, a square and lots of old buildings."],
      ["diego", "¿Y el monumento?", "And the monument?"],
      ["lupita", "Está en la avenida, al final del paseo.", "It's on the avenue, at the end of the boulevard."],
      ["diego", "¡Vamos el sábado!", "Let's go on Saturday!"]
    ] }
]},
{ t: "Viajes", en: "Travel", lessons: [
  { id: "14-1", t: "Un viaje", en: "A trip", bg: "calle", cast: ["sofia", "pepe"], icon: "boleto",
    words: [
      ["el plano", "city map", "n.", "Necesito un plano de la ciudad.", "I need a map of the city.", "mapa"],
      ["la publicidad", "advertising", "n.", "Hay mucha publicidad en la calle.", "There's a lot of advertising on the street.", ""],
      ["el boleto de ida", "one-way ticket", "n.", "Un boleto de ida a Puebla.", "A one-way ticket to Puebla.", "boleto", "el billete de ida"],
      ["de ida y vuelta", "round-trip", "expr.", "Quiero un boleto de ida y vuelta.", "I want a round-trip ticket.", "boleto"],
      ["la playa", "beach", "n.", "En verano vamos a la playa.", "In summer we go to the beach.", "sol"],
      ["la montaña", "mountain", "n.", "Me gusta ir a la montaña.", "I like going to the mountains.", ""],
      ["el campo", "countryside", "n.", "Mis abuelos viven en el campo.", "My grandparents live in the countryside.", ""],
      ["la oficina de turismo", "tourist office", "n.", "Pregunte en la oficina de turismo.", "Ask at the tourist office.", "#i"],
      ["el pueblo", "town, village", "n.", "Mi papá es de un pueblo de Jalisco.", "My dad is from a town in Jalisco.", "casa"]
    ],
    gram: { t: "Querer + verb", rule: "Quiero + a verb says what you want to do: quiero viajar, quieres ir.",
      ex: [["Quiero ir a la playa.", "I want to go to the beach."], ["¿Quieres viajar en tren?", "Do you want to travel by train?"], ["Queremos un boleto de ida y vuelta.", "We want a round-trip ticket."]] },
    conv: [
      ["sofia", "Buenas tardes. Un boleto a Oaxaca, por favor.", "Good afternoon. A ticket to Oaxaca, please."],
      ["pepe", "¿De ida o de ida y vuelta?", "One-way or round-trip?"],
      ["sofia", "De ida y vuelta.", "Round-trip."],
      ["pepe", "¿Para hoy?", "For today?"],
      ["sofia", "No, para el viernes en la mañana.", "No, for Friday morning."],
      ["pepe", "Son ochocientos pesos.", "That's eight hundred pesos."]
    ] },
  { id: "14-2", t: "En el hotel", en: "At the hotel", bg: "casa", cast: ["pepe", "diego"], icon: "cama",
    words: [
      ["el hotel", "hotel", "n.", "El hotel está cerca de la playa.", "The hotel is near the beach.", "casa"],
      ["la habitación doble", "double room", "n.", "Una habitación doble, por favor.", "A double room, please.", "cama"],
      ["la habitación individual", "single room", "n.", "¿Tiene una habitación individual?", "Do you have a single room?", "cama"],
      ["con baño", "with a bathroom", "expr.", "Quiero una habitación con baño.", "I want a room with a bathroom.", "#WC"],
      ["el campamento", "campsite", "n.", "Dormimos en un campamento.", "We sleep at a campsite.", "", "el campin"],
      ["la noche", "night", "n.", "¿Cuánto cuesta la noche?", "How much is it per night?", "luna"]
    ],
    conv: [
      ["pepe", "Bienvenido al hotel. ¿En qué le puedo ayudar?", "Welcome to the hotel. How can I help you?"],
      ["diego", "¿Tiene una habitación individual?", "Do you have a single room?"],
      ["pepe", "Sí, con baño y aire acondicionado.", "Yes, with a bathroom and air conditioning."],
      ["diego", "¿Cuánto cuesta la noche?", "How much is it per night?"],
      ["pepe", "Novecientos pesos.", "Nine hundred pesos."],
      ["diego", "Perfecto, dos noches, por favor.", "Perfect, two nights, please."]
    ] },
  { id: "14-3", t: "El transporte", en: "Transportation", bg: "calle", cast: ["mateo", "sofia"], icon: "camion",
    words: [
      ["el carro / el coche", "car", "n.", "Voy al trabajo en carro.", "I go to work by car.", "taxi"],
      ["el autobús", "bus", "n.", "El autobús a Puebla sale a las ocho.", "The bus to Puebla leaves at eight.", "camion"],
      ["el tren", "train", "n.", "Prefiero viajar en tren.", "I prefer to travel by train.", "metro"],
      ["el avión", "airplane", "n.", "El avión llega a las tres.", "The plane arrives at three.", ""],
      ["el barco", "boat, ship", "n.", "Vamos a Cozumel en barco.", "We're going to Cozumel by boat.", ""],
      ["el aeropuerto", "airport", "n.", "El aeropuerto está lejos.", "The airport is far.", ""],
      ["el puerto", "port", "n.", "Veracruz tiene un puerto grande.", "Veracruz has a big port.", ""],
      ["la estación", "station", "n.", "La estación de tren está en el centro.", "The train station is downtown.", "metro"],
      ["la parada", "stop", "n.", "La parada del camión está aquí.", "The bus stop is here.", "camion"],
      ["el estacionamiento", "parking lot", "n.", "No hay estacionamiento.", "There's no parking.", "taxi", "el aparcamiento"],
      ["la carretera", "highway, road", "n.", "La carretera a Toluca es buena.", "The road to Toluca is good.", ""],
      ["caminando", "walking, on foot", "adv.", "Voy caminando a la tienda.", "I walk to the store.", "pin", "andando"]
    ],
    gram: { t: "Salgo, vengo, vuelvo", rule: "Salir and venir are irregular in the yo form: salgo, vengo. Volver changes o to ue: vuelvo.",
      ex: [["Salgo de casa a las siete.", "I leave home at seven."], ["Vengo en metro.", "I come by subway."], ["Vuelvo a las diez.", "I come back at ten."]] },
    conv: [
      ["mateo", "¿Cómo vas al aeropuerto?", "How are you getting to the airport?"],
      ["sofia", "En tren. La estación está cerca.", "By train. The station is close."],
      ["mateo", "¿A qué hora sale el avión?", "What time does the plane leave?"],
      ["sofia", "A las seis. Vuelvo el domingo.", "At six. I come back on Sunday."],
      ["mateo", "¡Buen viaje!", "Have a good trip!"]
    ] },
  { id: "14-4", t: "¿Por dónde?", en: "Which way?", bg: "calle", cast: ["diego", "carmen"], icon: "mapa",
    words: [
      ["a la derecha", "to the right", "expr.", "El baño está a la derecha.", "The bathroom is on the right.", "mapa"],
      ["a la izquierda", "to the left", "expr.", "Gire a la izquierda.", "Turn left.", "mapa"],
      ["todo derecho", "straight ahead", "expr.", "Siga todo derecho.", "Go straight ahead.", "mapa", "todo recto"],
      ["al final de", "at the end of", "expr.", "La farmacia está al final de la calle.", "The pharmacy is at the end of the street.", "mapa"],
      ["entre", "between", "prep.", "El banco está entre la farmacia y la tienda.", "The bank is between the pharmacy and the store.", "mapa"],
      ["norte, sur, este, oeste", "north, south, east, west", "n.", "Monterrey está en el norte de México.", "Monterrey is in the north of Mexico.", "mapa"],
      ["aquí / acá", "here", "adv.", "Ven acá.", "Come here.", "pin"],
      ["allí / allá", "there", "adv.", "La tienda está allá.", "The store is over there.", "pin"],
      ["entrar / salir", "to go in / to go out", "v.", "Entramos por esta puerta.", "We go in through this door.", "#SALIDA"]
    ],
    conv: [
      ["diego", "Disculpe, ¿dónde está el hotel Central?", "Excuse me, where is the Hotel Central?"],
      ["carmen", "Siga todo derecho y en la segunda calle, a la derecha.", "Go straight ahead and turn right at the second street."],
      ["diego", "¿Está lejos?", "Is it far?"],
      ["carmen", "No, está allá, entre el banco y la iglesia.", "No, it's over there, between the bank and the church."],
      ["diego", "Muchas gracias.", "Thank you very much."]
    ] }
]},
{ t: "El tiempo", en: "Time and weather", lessons: [
  { id: "15-1", t: "Días y meses", en: "Days and months", bg: "plaza", cast: ["lupita", "sofia"], icon: "calendario",
    words: [
      ["el día", "day", "n.", "¿Qué día es hoy?", "What day is today?", "calendario"],
      ["martes, miércoles", "Tuesday, Wednesday", "n.", "Los martes tengo clase.", "On Tuesdays I have class.", "#MAR"],
      ["jueves", "Thursday", "n.", "El jueves voy al teatro.", "On Thursday I'm going to the theater.", "#JUE"],
      ["enero, febrero, marzo", "January, February, March", "n.", "Mi cumpleaños es en marzo.", "My birthday is in March.", "calendario"],
      ["abril, mayo, junio", "April, May, June", "n.", "En mayo hace mucho calor.", "In May it's very hot.", "sol"],
      ["julio, agosto, septiembre", "July, August, September", "n.", "En agosto tengo vacaciones.", "In August I have vacation.", "sol"],
      ["octubre, noviembre, diciembre", "October, November, December", "n.", "Navidad es en diciembre.", "Christmas is in December.", "nieve"],
      ["el mes", "month", "n.", "Pago la renta cada mes.", "I pay rent every month.", "calendario"],
      ["el año", "year", "n.", "El año tiene doce meses.", "The year has twelve months.", "calendario"]
    ],
    gram: { t: "Dates", rule: "Dates go el + number + de + month: el doce de mayo. Days and months are written in lowercase.",
      ex: [["Hoy es el cinco de abril.", "Today is April fifth."], ["Mi cumpleaños es el veinte de julio.", "My birthday is July twentieth."], ["¿Qué fecha es hoy?", "What's the date today?"]] },
    conv: [
      ["sofia", "¿Cuándo es tu cumpleaños?", "When is your birthday?"],
      ["lupita", "Es el quince de octubre. ¿Y el tuyo?", "It's October fifteenth. And yours?"],
      ["sofia", "El tres de marzo.", "March third."],
      ["lupita", "¿Qué día es hoy?", "What day is today?"],
      ["sofia", "Hoy es jueves, veinte de febrero.", "Today is Thursday, February twentieth."]
    ] },
  { id: "15-2", t: "La hora exacta", en: "Exact time", bg: "casa", cast: ["mateo", "carmen"], icon: "reloj:9:15",
    words: [
      ["la hora", "hour; time", "n.", "¿A qué hora es la clase?", "What time is class?", "reloj:10"],
      ["el minuto", "minute", "n.", "Espera un minuto.", "Wait a minute.", "reloj:12:5"],
      ["el momento", "moment", "n.", "Un momento, por favor.", "One moment, please.", "reloj:9"],
      ["y cuarto", "quarter past", "expr.", "Son las nueve y cuarto.", "It's quarter past nine.", "reloj:9:15"],
      ["cuarto para / menos cuarto", "quarter to", "expr.", "Son cuarto para las diez.", "It's quarter to ten.", "reloj:9:45"],
      ["veinte para las diez", "twenty to ten", "expr.", "Son veinte para las diez.", "It's twenty to ten.", "reloj:9:40"],
      ["a mediodía", "at noon", "expr.", "Comemos a mediodía.", "We eat at noon.", "reloj:12"],
      ["temprano / tarde", "early / late", "adv.", "Los domingos me levanto tarde.", "On Sundays I get up late.", "sol"],
      ["pronto", "soon; early", "adv.", "Llego pronto a la oficina.", "I get to the office early.", "reloj:7"],
      ["¿cuándo?", "when?", "adv.", "¿Cuándo vuelves?", "When are you coming back?", "#¿?"]
    ],
    conv: [
      ["mateo", "Mamá, ¿qué hora es?", "Mom, what time is it?"],
      ["carmen", "Son veinte para las ocho.", "It's twenty to eight."],
      ["mateo", "¡Es tarde! La clase empieza a las ocho.", "It's late! Class starts at eight."],
      ["carmen", "¿Cuándo vuelves?", "When are you coming back?"],
      ["mateo", "A mediodía. ¡Adiós!", "At noon. Bye!"]
    ] },
  { id: "15-3", t: "¿Con qué frecuencia?", en: "How often?", bg: "plaza", cast: ["diego", "sofia"], icon: "calendario",
    words: [
      ["ayer", "yesterday", "adv.", "Ayer fue lunes.", "Yesterday was Monday.", "calendario"],
      ["ahora", "now", "adv.", "Ahora vivo en Chicago.", "Now I live in Chicago.", "reloj:3"],
      ["todos los días", "every day", "expr.", "Estudio español todos los días.", "I study Spanish every day.", "calendario"],
      ["normalmente", "usually", "adv.", "Normalmente voy a pie al trabajo.", "I usually walk to work.", ""],
      ["nunca", "never", "adv.", "Nunca como pescado.", "I never eat fish.", ""],
      ["a veces", "sometimes", "expr.", "A veces me levanto tarde.", "Sometimes I get up late.", ""],
      ["empezar", "to start", "v.", "La película empieza a las siete.", "The movie starts at seven.", "tele"],
      ["terminar", "to finish", "v.", "La clase termina a la una.", "Class ends at one.", "reloj:1"],
      ["cambiar", "to change", "v.", "Quiero cambiar de trabajo.", "I want to change jobs.", ""],
      ["mucho tiempo / poco tiempo", "a long time / a short time", "expr.", "Tengo poco tiempo hoy.", "I have little time today.", "reloj:5"]
    ],
    gram: { t: "Where frequency words go", rule: "Siempre, nunca, normalmente and a veces usually go before the verb: nunca como, a veces voy.",
      ex: [["Siempre desayuno.", "I always have breakfast."], ["Nunca llego tarde.", "I'm never late."], ["A veces voy al cine.", "Sometimes I go to the movies."]] },
    conv: [
      ["sofia", "¿Estudias español todos los días?", "Do you study Spanish every day?"],
      ["diego", "Normalmente sí, pero ayer no.", "Usually yes, but not yesterday."],
      ["sofia", "¿Cuándo estudias?", "When do you study?"],
      ["diego", "A veces en la mañana, a veces en el camión.", "Sometimes in the morning, sometimes on the bus."],
      ["sofia", "¡Yo nunca tengo tiempo!", "I never have time!"]
    ] },
  { id: "15-4", t: "Las estaciones", en: "Seasons", bg: "parque", cast: ["mateo", "lupita"], icon: "nieve",
    words: [
      ["la primavera", "spring", "n.", "En primavera hay muchas flores.", "In spring there are lots of flowers.", ""],
      ["el verano", "summer", "n.", "En verano hace mucho calor.", "In summer it's very hot.", "sol"],
      ["el otoño", "fall, autumn", "n.", "En otoño los árboles cambian de color.", "In fall the trees change color.", ""],
      ["el invierno", "winter", "n.", "En invierno nieva en Chicago.", "In winter it snows in Chicago.", "nieve"],
      ["nevar", "to snow", "v.", "¿Nieva en tu ciudad?", "Does it snow in your city?", "nieve"],
      ["llover", "to rain", "v.", "Va a llover.", "It's going to rain.", "lluvia"],
      ["hace viento", "it's windy", "expr.", "Hoy hace mucho viento.", "It's very windy today.", "nube"],
      ["hace buen tiempo / mal tiempo", "the weather is nice / bad", "expr.", "Hoy hace buen tiempo.", "The weather is nice today.", "sol"],
      ["caliente / frío", "hot / cold (things)", "adj.", "El café está frío.", "The coffee is cold.", "cafe"],
      ["el sol", "sun", "n.", "No hay sol hoy.", "There's no sun today.", "sol"]
    ],
    conv: [
      ["lupita", "¿Qué estación te gusta más?", "Which season do you like best?"],
      ["mateo", "El verano. Hace buen tiempo y vamos a la playa.", "Summer. The weather is nice and we go to the beach."],
      ["lupita", "A mí me gusta el otoño.", "I like fall."],
      ["mateo", "¿Y el invierno?", "And winter?"],
      ["lupita", "¡No! Hace mucho frío y nieva.", "No! It's very cold and it snows."]
    ] },
  { id: "15-5", t: "La naturaleza", en: "Nature", bg: "parque", cast: ["sofia", "diego"], icon: "pin",
    words: [
      ["el país", "country", "n.", "México es un país muy grande.", "Mexico is a very big country.", "mapa"],
      ["la capital", "capital", "n.", "La capital de México es la Ciudad de México.", "The capital of Mexico is Mexico City.", "pin"],
      ["la ciudad", "city", "n.", "Chicago es una ciudad grande.", "Chicago is a big city.", ""],
      ["el mar", "sea", "n.", "Me gusta nadar en el mar.", "I like swimming in the sea.", ""],
      ["el río", "river", "n.", "El río está cerca del pueblo.", "The river is near the town.", ""],
      ["el animal", "animal", "n.", "¿Te gustan los animales?", "Do you like animals?", ""],
      ["la planta / la flor", "plant / flower", "n.", "Mi mamá tiene muchas plantas.", "My mom has lots of plants.", ""],
      ["el árbol", "tree", "n.", "Hay un árbol grande en el jardín.", "There's a big tree in the yard.", ""],
      ["el presidente / la presidenta", "president", "n.", "El presidente vive en la capital.", "The president lives in the capital.", ""],
      ["el rey / la reina", "king / queen", "n.", "España tiene rey.", "Spain has a king.", ""]
    ],
    conv: [
      ["diego", "¿Cómo es tu pueblo?", "What is your town like?"],
      ["sofia", "Es pequeño, con un río y muchos árboles.", "It's small, with a river and lots of trees."],
      ["diego", "¿Está cerca del mar?", "Is it near the sea?"],
      ["sofia", "No, está en las montañas, al norte de la capital.", "No, it's in the mountains, north of the capital."],
      ["diego", "¡Qué bonito!", "How beautiful!"]
    ] }
]},
{ t: "Palabras útiles", en: "Useful words", lessons: [
  { id: "16-1", t: "¿Qué opinas?", en: "What do you think?", bg: "plaza", cast: ["lupita", "mateo"], icon: "corazon",
    words: [
      ["bueno / malo", "good / bad", "adj.", "Este libro es muy bueno.", "This book is very good.", ""],
      ["bien / mal", "well / badly", "adv.", "Hablo español un poco mal.", "I speak Spanish a little badly.", ""],
      ["regular", "so-so", "adj.", "¿Cómo estás? Regular.", "How are you? So-so.", ""],
      ["interesante", "interesting", "adj.", "La película es muy interesante.", "The movie is very interesting.", "tele"],
      ["fácil / difícil", "easy / difficult", "adj.", "El español no es difícil.", "Spanish isn't difficult.", ""],
      ["bonito / feo", "pretty / ugly", "adj.", "Tu casa es muy bonita.", "Your house is very pretty.", "casa"],
      ["lindo / hermoso", "lovely / beautiful", "adj.", "¡Qué lindo día!", "What a lovely day!", "sol"],
      ["de acuerdo / okay", "agreed / okay", "expr.", "De acuerdo, nos vemos a las cinco.", "Okay, see you at five.", ""],
      ["sí / no", "yes / no", "adv.", "Sí, por favor. No, gracias.", "Yes, please. No, thank you.", ""],
      ["creer", "to believe, to think", "v.", "Creo que va a llover.", "I think it's going to rain.", "nube"]
    ],
    gram: { t: "Creo que", rule: "Creo que + a sentence gives your opinion. Creo que sí = I think so. No creo = I don't think so.",
      ex: [["Creo que es difícil.", "I think it's difficult."], ["Creo que sí.", "I think so."], ["No creo.", "I don't think so."]] },
    conv: [
      ["mateo", "¿Qué tal la película?", "How's the movie?"],
      ["lupita", "Regular. Es un poco larga.", "So-so. It's a bit long."],
      ["mateo", "Yo creo que es muy interesante.", "I think it's very interesting."],
      ["lupita", "¿Vamos a cenar?", "Shall we go have dinner?"],
      ["mateo", "¡De acuerdo!", "Okay!"]
    ] },
  { id: "16-2", t: "Cantidades", en: "Amounts", bg: "mercado", cast: ["sofia", "pepe"], icon: "dinero",
    words: [
      ["muy", "very", "adv.", "Es muy fácil.", "It's very easy.", ""],
      ["mucho / poco", "a lot / a little", "adv.", "Trabajo mucho.", "I work a lot.", ""],
      ["bastante", "quite, enough", "adv.", "Tengo bastante dinero.", "I have enough money.", "dinero"],
      ["más / menos", "more / less", "adv.", "Más pan, por favor.", "More bread, please.", "pan"],
      ["la gente", "people", "n.", "Hay mucha gente en la calle.", "There are lots of people in the street.", ""],
      ["con / sin", "with / without", "prep.", "Café sin azúcar, por favor.", "Coffee without sugar, please.", "cafe"],
      ["es posible", "it's possible", "expr.", "Es posible, no sé.", "It's possible, I don't know.", ""],
      ["quizás", "maybe", "adv.", "Quizás voy a la fiesta.", "Maybe I'll go to the party.", ""],
      ["rápido / lento", "fast / slow", "adj.", "El metro es rápido.", "The subway is fast.", "metro"],
      ["despacio", "slowly", "adv.", "Más despacio, por favor.", "Slower, please.", ""]
    ],
    gram: { t: "Muy or mucho", rule: "Muy goes with adjectives (muy rápido). Mucho goes with verbs and nouns, and matches the noun: mucha gente, muchos libros.",
      ex: [["Trabajo mucho.", "I work a lot."], ["Hay mucha gente.", "There are lots of people."], ["Es muy fácil.", "It's very easy."]] },
    conv: [
      ["sofia", "¿Hay mucha gente hoy en el mercado?", "Are there lots of people at the market today?"],
      ["pepe", "Sí, bastante. Es domingo.", "Yes, quite a lot. It's Sunday."],
      ["sofia", "¿Me da más tortillas, por favor?", "Can I have more tortillas, please?"],
      ["pepe", "Claro. ¿Con o sin salsa?", "Of course. With or without salsa?"],
      ["sofia", "Con salsa, por favor. Gracias.", "With salsa, please. Thanks."]
    ] },
  { id: "16-3", t: "Verbos útiles", en: "Useful verbs", bg: "casa", cast: ["diego", "sofia"], icon: "telefono",
    words: [
      ["hay", "there is / there are", "v.", "Hay dos farmacias en mi barrio.", "There are two pharmacies in my neighborhood.", "farmacia"],
      ["estar / ser", "to be", "v.", "Soy de Chicago y estoy en casa.", "I'm from Chicago and I'm at home.", "casa"],
      ["hablar", "to speak", "v.", "Hablo inglés y un poco de español.", "I speak English and a little Spanish.", ""],
      ["escribir", "to write", "v.", "Escribo un correo a mi jefe.", "I write an email to my boss.", "laptop"],
      ["ver", "to see; to watch", "v.", "No veo bien sin lentes.", "I don't see well without glasses.", ""],
      ["escuchar", "to listen", "v.", "Escucho la radio en el tren.", "I listen to the radio on the train.", "musica"],
      ["saber", "to know (facts, skills)", "v.", "No sé dónde está.", "I don't know where it is.", ""],
      ["abrir / cerrar", "to open / to close", "v.", "La tienda abre a las nueve y cierra a las ocho.", "The store opens at nine and closes at eight.", "tienda"],
      ["venir", "to come", "v.", "¿Vienes a la fiesta?", "Are you coming to the party?", "fiesta"],
      ["volver", "to come back", "v.", "Vuelvo en un momento.", "I'll be back in a moment.", ""],
      ["llegar", "to arrive", "v.", "El tren llega a las diez.", "The train arrives at ten.", "metro"]
    ],
    gram: { t: "Ser or estar", rule: "Ser: who or what something is, origin, time (soy Ana, es de México, son las dos). Estar: location and how you feel (está en casa, estoy bien).",
      ex: [["Soy de Chicago.", "I'm from Chicago."], ["Estoy en el trabajo.", "I'm at work."], ["La tienda está cerrada.", "The store is closed."]] },
    conv: [
      ["diego", "¡Hola, Sofía! ¿Dónde estás?", "Hi, Sofía! Where are you?"],
      ["sofia", "Estoy en el trabajo. Llego a casa a las seis.", "I'm at work. I get home at six."],
      ["diego", "¿Vienes a cenar?", "Are you coming to dinner?"],
      ["sofia", "Sí, pero no sé a qué hora.", "Yes, but I don't know what time."],
      ["diego", "Bueno, escríbeme un mensaje.", "Okay, send me a message."]
    ] }
]}
);
