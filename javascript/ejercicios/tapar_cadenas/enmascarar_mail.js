//Crea una función llamada maskEmail que tome email como argumento.
function maskEmail(email) {
    // buscamos la posición del arroba
    const arroba = email.indexOf('@');
    // capturamos sólo la parte antes del @
    const nameEmail = email.slice(0, arroba);
    //definimos la primera y ultima letra
    const firstLetter = nameEmail.at(0);
    const lastLetter = nameEmail.at(-1);

    const repetir = '*'.repeat(nameEmail.length - 2);

    // buscamos el dominio

    const dominio = email.slice(arroba);

    const newEmail = `${firstLetter}${repetir}${lastLetter}${dominio}`;

    return newEmail;
}
//Dentro de la función, debes enmascarar el email y agregarle el nombre del dominio.Recuerda que puedes usar métodos como slice, repeat, indexOf o incluso replace para ayudarte.

//Fuera de la función, declara una variable llamada email para almacenar la dirección de correo electrónico que deseas enmascarar.
//Llama la función maskEmail con la variable email y muestra el resultado en la consola.
//maskEmail("apple.pie@example.com") debería devolver "a*******e@example.com".
//maskEmail("freecodecamp@example.com") debería devolver "f**********p@example.com".
//maskEmail("info@test.dev") debería devolver "i**o@test.dev".
//maskEmail("user@domain.org") debería devolver "u**r@domain.org".
