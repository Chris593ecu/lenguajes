// myString.repeat(#de_repeticiones)

let repetir = 'Hola';

console.log(repetir.repeat(5)); //print: HolaHolaHolaHolaHola

//el número de repeticiones no puede ser negativo
// números decimales son redondeados
// si el conteo es cero pasará una cadena vacía

console.log(repetir.repeat(0)); //print: ""; cadena vacía

let numero = 3;

console.log(repetir.repeat(numero)); //print: HolaHolaHola
