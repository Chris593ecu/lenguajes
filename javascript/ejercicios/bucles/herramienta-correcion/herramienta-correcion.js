// # Herramienta de corrección que analiza arreglos de palabras para detectar palíndromos y frases repetidas
const word = 'Level';
console.log(word.split(''));

function isPalindrome(word) {
    const wordFormat = word.toLowerCase();
    const arrayWord = [...wordFormat];
    let reverseWord = [];
    const size = arrayWord.length;

    for (let i = size - 1; i >= 0; i--) {
        reverseWord.push(arrayWord[i]);
    }
    let finallyWord = reverseWord.join('');

    if (wordFormat === finallyWord) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(word));

// la mejor forma posible:

/* function isPalindrome(word) {
    const wordFormat = word.toLowerCase();
    const reversedWord = [...wordFormat].reverse().join('');

    return wordFormat === reversedWord;
}

*/
let words = ['levelP', 'level', 'levelu', 'level', 'levelU', 'le'];
function findPalindromeBreaks(words) {
    if (!words || words.length === 0) {
        return [];
    }
    const noPalindromos = [];
    for (let i = 0; i < words.length; i++) {
        const wordFormat = words[i].toLowerCase();
        const reverseWord = [...wordFormat].reverse().join('');
        console.log(reverseWord);
        if (wordFormat !== reverseWord) {
            noPalindromos.push(i);
        }
    }

    return noPalindromos;
}

console.log(findPalindromeBreaks(words));

// la función busca una frase repetida
// words es un arreglo
// pharseLength número
// argumentos (Array words, Number pharseLength)
// debe devolver un array de pharseLength[0]
function findRepeatedPhrases(words, pharseLength) {
    if (pharseLength >= words.length) {
        return [];
    }
    // vamos a iterar sobre los elementos del array words y vamos a colocarlos en un objeto para poder capturar sus índices; para ello debemos unirlos en un sólo texto a la iteración que es determinada por el segundo argumento de la función

    const fraseVista = {};
    const resultado = [];
    for (
        let i = 0;
        i <=
        words.length /*iterar hasta pharseLength para que slice no falle */ -
            pharseLength;
        i++
    ) {
        // con el método slice vamos a partir el array en secuencias de i, i+pharse

        const frase = words
            .slice(i, i + pharseLength)
            .join(' ')
            .toLowerCase();
        console.log(frase);
        // a este resultado lo vamos a guardar en nuestro objeto índice como propiedad y valor; en donde valor será el índice en el que se entran:

        if (!fraseVista[frase]) {
            console.log(i);

            // aquí creamos la propiedad con valor de array en donde luego se insertará el índice
            fraseVista[frase] = [];
        }
        console.log(i);
        // insertamos en nuestro objeto el índice donde se encontró ese valor, si se repite hará un push en el valor de propiedad que se repite
        fraseVista[frase].push(i);
    }
    console.log(fraseVista);

    // vamos a recorrer el objeto para observar que frases se están repitiendo se están repitiendo:
    for (const phase in fraseVista) {
        // vamos a consultar que propiedad tiene un valor de longitud mayor a uno (es decir se repite más de una vez")

        if (fraseVista[phase].length > 1) {
            resultado.push(...fraseVista[phase]);
        }
    }

    return resultado;
}

console.log(findRepeatedPhrases(words, 2));

// Array texts
// Number

const texts = [['levelP', 'level', 'levelu', 'level', 'levelU', 'le']];
function analyzeTexts(texts, pharseLength) {
    const resultado = [];
    if (!texts || texts.length === 0) {
        return [];
    }

    for (let i = 0; i < texts.length; i++) {
        const word = texts[i];

        console.log(texts[i]);

        // no se puede reutilizar las funciones
        const objetoResultado = {
            palindromeBreaks: findPalindromeBreaks(word),
            repeatedPhrases: findRepeatedPhrases(word, pharseLength),
        };

        resultado.push(objetoResultado);
    }
    return resultado;
}
console.log(analyzeTexts(texts, 2));
