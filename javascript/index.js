// función (arr1[0,1]) => return mínimo común múltiplo
// ¿que es el mcm? es el número mas bajo en que se puede dividir un grupo de números
function smallestCommons(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const mcd = (a, b) => (b === 0 ? a : mcd(b, a % b));
    const mcm = (a, b) => (a * b) / mcd(a, b);

    return Array.from(
        { length: max - min + 1 },
        (_, index) => min + index
    ).reduce((acc, curr) => mcm(acc, curr));
}

console.log(smallestCommons([1, 5]));

console.log(smallestCommons([5, 1]));
