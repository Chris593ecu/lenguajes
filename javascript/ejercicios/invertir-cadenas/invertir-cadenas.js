// # Laboratorio para crear cadenas

function reverseString(cadena) {
    const setCadena = cadena.split('');
    console.log(setCadena);
    const getCadena = setCadena.reverse().join('');

    console.log(getCadena);
    return getCadena;
}

console.log(reverseString('Hello'));
