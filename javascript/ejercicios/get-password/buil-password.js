// Aplicación generadora de contraseñas
function generatePassword(size) {
    const charts =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';

    for (let i = 0; i < size; i++) {
        const hash = Math.floor(Math.random() * charts.length);
        password += charts.charAt(hash);
    }
    return password;
}

let password = generatePassword(5);

console.log(`Generated password: ${password}`);

console.log(Math.floor(Math.random() * 500));

// sumar todos los números de una secuencia
function sumAll(arr) {
    if (arr.length > 2) {
        return;
    }

    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;
    for (let i = min; i < max; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

sumAll([4, 1]);
