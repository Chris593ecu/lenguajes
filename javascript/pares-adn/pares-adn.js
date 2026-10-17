// Hoja utilitaria
console.log('hola mundo');

// vamos a construir un generador de pares de ADN
let str = 'CATTG';
function pairElement(str) {
    //debe devolver un array 2d
    const arr = str.toUpperCase().split('');

    //console.log(arr);
    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            result.push(['A', 'T']);
        }
        if (str[i] === 'T') {
            result.push(['T', 'A']);
        }
        if (str[i] === 'C') {
            result.push(['C', 'G']);
        }
        if (str[i] === 'G') {
            result.push(['G', 'C']);
        }
    }
    // console.log(result);
    return result;
}

pairElement(str);
// Vamos a ver que nos dice la ia de nuestro resultado, que sirve pero vamos a ver si se puede mejorar.
//nos dió 8.5 y mejoró nuestra version:

function pairElement(str) {
    const arr = str.toUpperCase();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            result.push(['A', 'T']);
        } else if (arr[i] === 'T') {
            result.push(['T', 'A']);
        } else if (arr[i] === 'C') {
            result.push(['C', 'G']);
        } else if (arr[i] === 'G') {
            result.push(['G', 'C']);
        }
    }

    return result;
}

//nos enseño a trabajar con EM6:

/*
function pairElement(str){
    definimos un objeto (clave, valor)
const pares = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
};

return str.toUpperCase()
          .split('')
          .map(base => [base, pares[base]]);
          // cuando evalua 'A':
          // map(A => [A, pares[A]]);
          // entonces map examina A y guarda el arr [A, y el valor de pares[A] que es T]
}
*/

const numeros = [1, 2, 3, 4];

const dobles = numeros.map((num) => num * 2);
console.log(dobles);
