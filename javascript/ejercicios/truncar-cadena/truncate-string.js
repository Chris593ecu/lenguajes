function truncateString(cadena, number) {
    if (cadena.length > number) {
        let truncar = cadena.slice(0, number);
        return `${truncar}...`;
    }
    return cadena;
}

function confirmEnding(cadena, cadenaVerify) {
    const lastWord = cadena.slice(-cadenaVerify.length);

    if (lastWord === cadenaVerify) {
        return true;
    } else {
        return false;
    }
}
