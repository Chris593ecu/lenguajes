// # Función que devuelve un arreglo que consiste en el número más grande de cada sub arreglo

const myArray = [
    [1, 2, 3, 46, 8],
    [9, 4, 69, 1, 3],
    [6, 1, 8, 9, 3],
];

function largestOfAll(arreglo) {
    const result = [];

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
        result.push(Math.max(...arreglo[i]));
    }
    console.log(result);
    return result;
}

largestOfAll(myArray);

const arr1 = [1, 2, 3, 46, 8];
const arr2 = [9, 4, 69, 1, 3];
//                                  1
function frankenSplice(arr1, arr2, ind) {
    const result = arr2.slice();
    result.splice(ind, 0, ...arr1);
    result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
