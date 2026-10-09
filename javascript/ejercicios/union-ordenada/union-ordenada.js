// Unión única ordenada
function uniteUnique(...arrs) {
    console.log(arrs);
    const result = [];
    for (let i = 0; i < arrs.length; i++) {
        for (let j = 0; j < arrs[i].length; j++) {
            if (!result.includes(arrs[i][j])) {
                result.push(arrs[i][j]);
            }
        }
    }
    return result;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));
