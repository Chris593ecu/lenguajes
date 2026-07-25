//function

function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Carlos')); // print: Hola Carlos

//=== ARROW FUNCTION

// function saludar() Convertida a Arrow Function
// Para transformar la función anterior en una arrow function, seguimos tres cambios principales:

// Guardamos la función en una variable (usualmente const).

// Quitamos la palabra clave function.
// Ponemos la flecha => justo después de los parámetros (nombre).
const saludar = (nombre) => {
    return `Hola ${nombre}`;
};

// Se llama EXACTAMENTE igual:
console.log(saludar('Carlos')); // Resultado: ¡Hola Carlos!

// ese formato es para cuando existen mas de dos parámetros por lo que se puede expresar así:

const saludo2 = (nombre) => `Hola ${nombre}`;
console.log(saludar('Carlos')); // Resultado: ¡Hola Carlos!

/*
Tradicional:

"function saludar(nombre) { return ""¡Hola "" + nombre; }"

Arrow(Completa):

"const saludar = (nombre) => { return ""¡Hola "" + nombre; };"

Arrow(Simplificada) un parámetro:

"const saludar = nombre => ""¡Hola "" + nombre;"

*/
