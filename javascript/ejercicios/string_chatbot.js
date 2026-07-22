// We will create a chatbot for teachers
console.log('Hi there!');
// crear la variable botName y asingarle la cadena 'teacherBot'
let botName = 'teacherBot';
// usando interpolación generamos un saludo interactivo
let greeting; //declaramos la variable

greeting = `My name is ${botName}.`;

console.log(greeting);

// El siguiente paso es crear algunas variables más que se utilizarán en futuros mensajes de bot.

// Crea una variable llamada subject y asígnale el valor de cadena "JavaScript".
let subject;
subject = 'JavaScript';
// Luego, crea una variable llamada topic y asígnale el valor de cadena "strings".
let topic;
topic = 'strings';

// Empieza por crear una variable sentence.
let sentence;
// Usando la sintaxis de literales de plantilla, asigna la cadena de texto Today, you will learn about [topic variable goes here] in [subject variable goes here]. a la variable sentence.

// Reemplazarás los marcadores [topic variable goes here] y [subject variable goes here] con las variables topic y subject usando la sintaxis ${}.

sentence = `Today, you will learn about ${topic} in ${subject}.`;

// Finalmente, registra la variable sentence en la consola.

console.log(sentence);

//Comienza creando una nueva variable llamada strLengthIntro.
let strLengthIntro;
//Luego usa la sintaxis de literales de plantilla para asignar la cadena Here is an example of using the length property on the word [subject]. a la variable strLengthIntro.
//Reemplaza [subject] con la variable subject como lo hiciste antes.

strLengthIntro = `Here is an example of using the length property on the word 
${subject}.`;

//Finalmente, imprime la variable strLengthIntro en la consola.
console.log(strLengthIntro);

// Empieza utilizando la propiedad length para obtener la longitud de la cadena subject y registra ese valor en la consola.
console.log(subject.length);

// Comienza mostrando el mensaje Here is an example of using the length property on the word [topic]. en la consola.
console.log(
    `Here is an example of using the length property on the word ${topic}.`,
);
// Recuerda reemplazar [topic] con la variable topic, y usar la sintaxis correcta de literales de plantilla como hiciste en los pasos anteriores.

// Luego, agrega una segunda sentencia console.log que muestre la longitud de la cadena topic en la consola.
console.log(topic.length);

// Comienza mostrando el mensaje Here is an example of accessing the first letter in the word [subject]. en la consola.
console.log(
    `Here is an example of accessing the first letter in the word ${subject}.`,
);
// Recuerda reemplazar [subject] con la variable subject y usar la sintaxis adecuada de literales de plantilla como hiciste en los pasos anteriores.

// Comienza agregando otra declaración console.

// Dentro de la declaración console, muestra la primera letra de la variable subject utilizando la notación de corchetes y el número de índice correcto.

console.log(subject[0]);

// Comienza añadiendo una instrucción de console que muestre el mensaje Here is an example of accessing the second letter in the word [subject]. Recuerda reemplazar [subject] con el valor actual de la variable subject y usar la sintaxis correcta de literales de plantilla.
console.log(
    `Here is an example of accessing the second letter in the word ${subject}.`,
);
// Luego, añade otra instrucción de console que muestre la segunda letra de la variable subject usando notación de corchetes y el número de índice correcto.
console.log(subject[1]);

// Empieza agregando otra declaración de console que muestre el mensaje Here is an example of accessing the last letter in the word [subject].
console.log(
    `Here is an example of accessing the last letter in the word ${subject}`,
);
// Recuerda reemplazar [subject] por el valor real de la variable subject y usa la sintaxis correcta de literales de plantilla.

// Crea una nueva variable llamada lastCharacter y asígnale el valor del último carácter en la variable subject.

let lastCharacter;

lastCharacter = `${subject[subject.length - 1]}`;

// Luego, muestra el valor de la variable lastCharacter en la consola.
console.log(lastCharacter);

// Comience creando una variable llamada learningIsFunSentence y asígnale el valor de cadena de "Learning is fun.".

let learningIsFunSentence = 'Learning is fun.';

// El siguiente paso es agregar otro statement console que muestre la cadena "Here are examples of finding the positions of substrings in the sentence.".

console.log(
    'Here are examples of finding the positions of substrings in the sentence.',
);

// Agrega una nueva declaración de console que muestre el resultado de usar el método indexOf en la variable learningIsFunSentence para encontrar la posición del índice de la subcadena "Learning".
console.log(learningIsFunSentence.indexOf('Learning'));

// A continuación, agregará una nueva declaración de console que muestra el resultado de usar el método indexOf en la variable learningIsFunSentence para encontrar la posición de la subcadena "fun".

console.log(learningIsFunSentence.indexOf('fun'));

// Debajo de esa declaración de console, agregue una nueva declaración de console que muestra el resultado de usar el método indexOf para encontrar la posición de la subcadena "learning".
console.log(learningIsFunSentence.indexOf('learning')); // print -1

// El método indexOf distingue entre mayúsculas y minúsculas. Por lo tanto, la subcadena "learning" no es lo mismo que la subcadena "Learning".

// Ahora que entiendes cómo funcionan algunos métodos comunes de cadena, puedes completar el taller registrando un último mensaje en la console.

// Agrega una declaración de console que muestre el mensaje "I hope you enjoyed learning today." en la console.

console.log('I hope you enjoyed learning today.');
