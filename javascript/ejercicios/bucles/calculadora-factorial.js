//# Construcción de una calculadora factorial

let num = 7;

function factorialCalculator(num) {
    let result = 1;

    for (let i = 0; i < num; i++) {
        console.log(result);
        result = result * (num - i);
        console.log(result);
        console.log(num - i);
    }
    console.log(num);
    return result;
}

console.log(factorialCalculator(num));
console.log(5 * 4 * 3 * 2 * 1);
