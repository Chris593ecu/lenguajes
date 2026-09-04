//# Aplicación que busca la palabra más larga
let sentence = 'The quick brown fox jumped over the lazy dog';
function findLongestWordLength(sentence) {
    let biggestWord = 0;
    const value = sentence.split(' ');

    // console.log(value);

    for (const key of value) {
        // console.log(key);

        if (key.length > biggestWord) {
            biggestWord = key.length;
        }
        // console.log(biggestWord);
    }
    console.log(biggestWord);
    return biggestWord;
}

findLongestWordLength(sentence);

console.log(
    findLongestWordLength('The quick brown fox jumped over the lazy dog'),
);
