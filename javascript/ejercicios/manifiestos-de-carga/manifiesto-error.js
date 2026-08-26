// gemini le dió una

const producto = {
    containerId: 1,
    destination: 'Monterey, California, USA',
    weight: 831,
    unit: 'lb',
    hazmat: false,
    prueba1: '',
    pruebaNull: null,
};
const newObject = {};
newObject = producto;

function normalizeUnits(manifest) {
    //transformar a kg
    if (manifest.unit === 'lb') {
        newObject.weight = manifest.weight * 0.45;
        newObject.unit = 'kg';
    } else {
        newObject.weight = manifest.weight;
        newObject.unit = manifest.unit;
    }
    return console.log(newObject);
}
console.log(producto);

function validateManifest(manifest) {
    const entradas = Object.entries(manifest);
    const size = entradas.length;

    const evaluar = [];

    console.log(entradas);
    console.log(entradas[0]);
    console.log(entradas[0][1]);

    /*
    (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0 : (2) ['containerId', 1]
1 : (2) ['destination', 'Monterey, California, USA']
2 : (2) ['weight', 373.95]
3 : (2) ['unit', 'kg']
4 : (2) ['hazmat', false] */
    for (let i = 0; i < size; i++) {
        let iterar = entradas[i][1];

        if (iterar === '') {
            iterar = 'Missing';
        }
        if (iterar === null) {
            iterar = 'Invalid';
        }
        evaluar.push(iterar);
    }

    console.log(evaluar);
    console.log(entradas);

    newObject = Object.fromEntries(entradas);

    return newObject;
    // let claves = Object.keys(manifest);
    // let size = Object.keys(manifest).length;
}
normalizeUnits(producto);
validateManifest(producto);
