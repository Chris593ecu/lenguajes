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

/* # Bucle for of
    se usa cuando se necesita iterar sobre los valores de un iterable, como lo es un array o unca cadena

*/

const myArray = [7, 5, 2, 9];
console.log(myArray);
for (myVar of myArray) {
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
        break; // pausamos el bucle por ahorro de recursos
    }

    console.log(myArray); /* retornará:  
(4) [7, 5, 'cambiado', 9]
*/
}
