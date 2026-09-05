// #Implementando un algoritmo de mutaciones
const myArray = ['Noel', 'Ole'];
function mutation(value) {
    const value1 = value[0].toLowerCase();
    console.log(value1 + ' / ' + typeof value1);
    const value2 = value[1].toLowerCase();

    console.log(Array.isArray(value));
    console.log(value1);
    console.log(value2);

    const value2array = value2.split('');
    console.log(value2array);

    const buscar = value2array.every((item) => value1.includes(item));

    console.log(buscar);
    return buscar;

    //solucion previa:
    // if (value1.includes(value2)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(mutation(myArray));
