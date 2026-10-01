// # función que elimina todos los valores falsos de un array
function bouncer(arr) {
    const values = [false, undefined, 0, '', null, NaN];
    const result = [];
    for (const key of arr) {
        if (!values.includes(key)) {
            result.push(key);
        }
    }
    console.log(result);
    return result;
}
console.log(bouncer([7, 'ate', '', false, 9]));
