// # Detector de letras faltantes

const abecedario = 'abcdefghijklmnopqrstuvwxyz'; //.split('');

console.log(abecedario);

fearNotLetter('abcdefghijklmnopqrstuvwxyz');

function fearNotLetter(value) {
    if (typeof value !== 'string') {
        console.log('el dato no es una cadena');
        return;
    }
    if (!abecedario.includes(value[0])) {
        return;
    }

    if (abecedario.includes(value)) {
        return undefined;
    }

    let startIndex = abecedario.indexOf(value[0]);
    console.log(value[0]);
    console.log(startIndex);
    const valueArray = value.split('');
    console.log(valueArray);
    for (let i = 0; i < value.length; i++) {
        const buscador = abecedario[startIndex + i];
        console.log(buscador);
        if (valueArray[i] !== buscador) {
            console.log(buscador);
            return buscador;
        }
    }

    // const valueArray = value.split('');
    // console.log(valueArray);
    // for (let i = 0; i <= value.length; i++) {
    //     console.log(abecedario[i]);
    //     if (!abecedario[i].includes(valueArray[i])) {
    //         console.log(abecedario[i]);
    //         const index = abecedario.indexOf(abecedario[i]);
    //         console.log(index);
    //         valueArray.splice(index, 1, abecedario[i]);
    //         console.log(valueArray);
    //         continue;
    //         for (let j = 0; j < value.length; j++) {}
    //     }
    // }
    // value = valueArray.join('');
    // console.log(value);

    // cómo debía ser:
    /*
// 1. Encontrar en qué índice del abecedario empieza la primera letra recibida
    let startIndex = abecedario.indexOf(value[0]);

    const valueArray = value.split('');

    // 2. Recorrer el abecedario a partir de esa posición inicial
    for (let i = 0; i < value.length; i++) {
        const expectedLetter = abecedario[startIndex + i];

        // 3. Si la letra esperada no coincide con la del arreglo
        if (valueArray[i] !== expectedLetter) {
            // Insertamos la letra esperada en la posición 'i' sin eliminar nada (0)
            valueArray.splice(i, 0, expectedLetter);

            // Retornamos la cadena ya completada (o la letra faltante según se pida)
            return valueArray.join('');
        }
    }

    return undefined; // Si la secuencia ya estaba completa
    */
}

// la mejor forma

/*
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Si el código de la siguiente letra no es exactamente +1 del actual
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      // Retornamos el caracter que debería ir en medio
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  // Si el ciclo termina sin encontrar huecos, retorna undefined por defecto
  return undefined;
} */
