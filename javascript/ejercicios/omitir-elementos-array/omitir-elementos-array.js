// función que omite elementos den un array

const arr = [1, 1, 1, 2, 1, 1, 1];

function dropElements(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        console.log(i);

        if (func) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n >= 3;
    }),
);
