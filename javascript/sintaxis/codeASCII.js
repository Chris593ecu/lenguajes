/*
Cómo obtener el código numérico ASCII de un caracter

Método Antiguo :

    myStr.charCodeAt(index),

        Método Moderno (Recomendado):

            myStr.codePointAt(index)

                "Lee el código Unicode completo, incluyendo emojis."
*/

let letter = 'A';
console.log(letter.codePointAt(0)); //print 65 que es el código ASCII de A

/*

Cómo obtener el caracter a partir del código ASCII

Método Antiguo :

    String.fromCharCode(code),

        Método Moderno (Recomendado):

            String.fromCodePoint(code)

                "Reconstruye el carácter completo a partir de cualquier código Unicode.""
*/

let myChar = String.fromCodePoint(65);

console.log(myChar); //print A
