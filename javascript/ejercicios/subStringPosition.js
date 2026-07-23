// Para encontrar una subcadena dentro de otra cadena usamos indexOf(), nos muestra la posición exacta donde se encuentra. Es mas usado includes() el cuál muestra un boleano de respuesta

let sentence = 'Hello World';
let position = sentence.indexOf('World');
//indexOf() encontrará el índice de la primera letra de búsqueda

console.log(position); // print 6

let sentence = 'Hello World';
let position = sentence.indexOf('orld');
//indexOf() encontrará el índice de la primera letra de búsqueda

console.log(position); // print 7

let sentence = 'Hello World';
let position = sentence.indexOf('o');
//indexOf() encontrará el índice de la primera letra de búsqueda

console.log(position); //print 4

let sentence = 'Hello World';
let position = sentence.indexOf('O');
//indexOf() encontrará el índice de la primera letra de búsqueda

console.log(position); // print -1 porque es case sensitive y no existe "O" mayúscula en la cadena de búsqueda

//También se puede indicar a partir de que índice buscar

let sentence = "Hello World1, it's a great World2";
let position = sentence.indexOf('World', 10);
//buscará la coincidencia en el segundo World puesto que la búsqueda empieza desde el índice #10

console.log(position); // print 27

// Uso específico: Cuando queremos validar si un caracter fue inclido en la cadena. EJM:

// validar el arroba en un correo:

let email = 'example@gmail.com';

if (email.indexOf('@') !== -1) {
    console.log('El correo es correcto');
} else {
    console.log('no se ha ingresado el @');
}
// sin embargo es mejor usar includes() y es case sensitive

let mensaje = email.includes('@', 1) //1 es opcional, es el índice a partir del cual se va a contar
    ? 'El correo es correcto'
    : 'El correo no es correcto';

console.log(mensaje);
