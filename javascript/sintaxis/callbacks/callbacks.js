const nums = [1, 'a', 3, 4, 5];

nums.forEach((x) => {
    console.log(`nums ${x}`);
    console.timeEnd('foreach()');
});

nums.forEach((y) => {
    console.log(y + 1);
    console.log(typeof y);
});

nums.map((x) => {
    console.log(x);
    console.log(typeof x);
});

nums.forEach((number, index, arr) => {
    console.log(`Element ${number} is at index ${index} in array ${arr}`);
    if (index === 2) {
        console.log(`index ${index} encontrado, su valor es ${number}`);
    }
});

const developers = [
    {
        name: 'Chris',
        age: 25,
    },
    {
        name: 'María',
        age: 23,
    },
    {
        name: 'Jorge',
        age: 32,
    },
    {
        name: 'Karla',
        age: 45,
    },
];

const personas = developers.filter((person) => person.age < 26);

console.log(personas);

const numbers = [1, 5, 8, 6, 4, 12];

const sum = numbers.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0,
);

console.log(sum);

const sum2 = numbers.reduce((acc, current) => acc + current, 10);
//ahora 10 será el valor inicial

console.log(sum2);

//encadenar métodos:
const transactions = [
    { amount: 100, type: 'credit' },
    { amount: 20, type: 'cash' },
    { amount: 150, type: 'credit' },
    { amount: 50, type: 'cash' },
    { amount: 75, type: 'credit' },
];

const totalCreditWithBonus = transactions
    .filter((transaction) => transaction.type === 'credit')
    .map((transaction) => transaction.amount * 1.1)
    .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5

const ordenSemantico = numbers.sort();

console.log(ordenSemantico);

const orden = numbers.sort((a, b) => a - b);
/*
Los parámetros a y b son los dos elementos que se están comparando. La función de comparación debe devolver un valor negativo si a debe ir antes que b, un valor positivo si a debe ir después de b, y cero si a y b son iguales. (es decir a - b "2 - 3 = -1 2 es menor que 3"; true se queda, false lo recorré a la derecha)
*/
console.log(orden);

//.every()verifica que todos pasen la prueba, y dará verdad sí y sólo si la respuesta de la función es verdad, se pausa a la primera negativa

const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);
console.log(hasAllEvenNumbers);

//.some() verifica si al menos una coincidencia es verdadera para arrojar verdadero

const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers);

//ejercicio de buscador de índices ordenados:

function getIndexToIns(arr, numb) {
    //siempre realizar una copia del array original
    const arrOrd = [...arr, numb].sort((a, b) => a - b);

    return arrOrd.findIndex((x) => numb === x);
}

// ejercicio con filter

function diffArray(arr1, arr2) {
    // 1. Elementos que están en arr1 pero NO en arr2
    const soloEnArr1 = arr1.filter((item) => !arr2.includes(item));

    // 2. Elementos que están en arr2 pero NO en arr1
    const soloEnArr2 = arr2.filter((item) => !arr1.includes(item));

    // 3. Unimos ambos resultados manteniendo el orden original de cada uno
    return [...soloEnArr1, ...soloEnArr2];
}

// objetos coincidentes:

function whatIsInAName(collection, source) {
    const sourceKey = Object.keys(source);
    console.log(sourceKey);

    return collection.filter((obj) => {
        return sourceKey.every((key) => obj[key] === source[key]);
    });
}
