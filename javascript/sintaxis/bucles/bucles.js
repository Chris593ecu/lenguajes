// bucles

// bucle for(inicializa; condición, +ó- i)

for (let i = 2; i <= 6; i++) {
    console.log(`En esta iteracción i vale: ${i}`);
} // imprime:
/* 
 En esta iteracción i vale: 2
 En esta iteracción i vale: 3
 En esta iteracción i vale: 4
 En esta iteracción i vale: 5
 En esta iteracción i vale: 6
*/

// REGLA DE BUCLES: for of para arrays / for in para objetos

/* # Bucle for of
    se usa cuando se necesita iterar sobre los valores de un iterable, como lo es un array o unca cadena

*/

const myArray = [7, 5, 2, 9];

let datoCapturado = null;
console.log(myArray);
for (const /* o let */ myVar of myArray) {
    console.log(myVar); /*
da cómo resultado:
    7
    5
    2
    9
*/
    // datos que podemos manipular
    if (myVar === 2) {
        const position = myArray.indexOf(2);
        myArray[position] = 'cambiado';
        console.log('Número cambiado');

        //capturar el valor para usarlo fuera, defenimos previamente la variable contenedora
        datoCapturado = myVar;

        break; // pausamos el bucle por ahorro de recursos
    }
}
console.log(`el valor ${datoCapturado} fue modificado exitosamente`);
console.log(myArray); /* retornará:  
(4) [7, 5, 'cambiado', 9]
*/

// #ITERAR UN ARRAY DE OBJETOS

const people = [
    { name: 'Chirs', age: 33 },
    { name: 'Luis', age: 40 },
    { name: 'José', age: 65 },
];
let i = 1;
for (const person of people) {
    console.log(`Línea ${i}: ${person?.name} is ${person?.age} years old`);
    i++;
}

// #BUCLE FOR IN
