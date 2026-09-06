//#Función que repite cadenas

function repeatStringNumTimes(string, num) {
    if (num <= 0) {
        return '';
    }

    const myString = [];
    for (let i = 1; i <= num; i++) {
        myString.push(string);
        console.log(myString);
    }
    const fninalystring = myString.join('');
    console.log(fninalystring);
    return fninalystring;
}

repeatStringNumTimes('hola', 2);
repeatStringNumTimes('*', 3);
