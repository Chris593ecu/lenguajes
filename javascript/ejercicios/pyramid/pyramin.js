function pyramid(str, numInt, bool) {
    let filas = [];

    for (let i = 1; i <= numInt; i++) {
        //creamos los espacios con repeat
        let espacios = ' '.repeat(numInt - i);
        let bloques = str.repeat(2 * i - 1);

        filas.push(espacios + bloques);
    }
    filas;
    if (bool) {
        filas.reverse();
        filas;
    }
    filas;
    return '\n' + filas.join('\n') + '\n';
}

pyramid('a', 3, false);

console.log(pyramid('a', 3, true));

console.log(pyramid('o', 4, false));
