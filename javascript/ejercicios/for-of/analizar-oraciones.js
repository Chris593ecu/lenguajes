const vocales = ['a', 'e', 'i', 'o', 'u' /*, 'á', 'é', 'í', 'ó', 'ú'*/];

function getVowelCount(sentence) {
    let count = 0;
    for (let key of sentence.toLowerCase()) {
        // console.log(key);
        if (vocales.includes(key)) {
            // console.log('Vocales detectadas');
            count++;
        }
    }

    return count;
}

const vowelCount = getVowelCount('Apples are tasty fruits');

console.log(getVowelCount('Apples are tasty fruits'));

function getConsonantCount(sentence) {
    let consonantes = 0;
    for (let key of sentence.toLowerCase().replaceAll(' ', '')) {
        // console.log(key);
        if (!vocales.includes(key) && key >= 'a' && key <= 'z') {
            // console.log('Vocales detectadas');
            consonantes++;
        }
    }

    return consonantes;
}

const consonantCount = getConsonantCount('Coding is fun');

console.log(`Consonant Count: ${consonantCount}`);

const signosPuntuacion = [
    '.',
    ',',
    ';',
    ':',
    '!',
    '¡',
    '?',
    '¿',
    '-',
    '_',
    '(',
    ')',
    '"',
    "'",
];

function getPunctuationCount(sentence) {
    let puntuaciones = 0;

    for (let char of sentence) {
        if (signosPuntuacion.includes(char)) {
            puntuaciones++;
        }
    }

    return puntuaciones;
}

const punctuationCount = getPunctuationCount('WHAT?!?!?!?!?');

console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
    if (sentence.trim() === '') {
        return 0;
    }
    let words = sentence.trim().split(' ');
    let i = 0;

    for (let key of words) {
        if (key !== '') {
            i++;
        }
    }

    return i;
}
getWordCount('Hola mundo, a s b hola mudo, hola cvrg');
