// # Detector de letras faltantes

const abecedario = 'abcdefghijklmnñopqrstuvwxyz'; //.split('');
console.log(abecedario);

function fearNotLetter(value) {
    if (typeof value !== 'string') {
        console.log('el dato no es una cadena');
        return;
    }
    if (!abecedario.includes(value)) {
        const valueArray = value;
        console.log('el dato no es una secuencia');

        return;
    }
    const normChart = abecedario.trim();
    return value;
}

// fearNotLetter('hola mundo');
fearNotLetter('abcdef');

const texto = 'Patrimonio';

for (const caracter of texto) {
    console.log(caracter);
}
