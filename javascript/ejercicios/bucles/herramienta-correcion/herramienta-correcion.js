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
let words = ['levelP', 'level', 'levelu'];
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

findPalindromeBreaks(words);
