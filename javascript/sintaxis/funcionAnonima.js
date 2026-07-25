//Si la función será usada una sólo vez y en un lugar específico se usa función anónima

const nombres = ['Carlos', 'JORge', 'ivan'];

const formatoNombres = nombres.map(function (nombre) {
    return nombre.toUpperCase();
});

console.log(formatoNombres); // ['CARLOS', 'JORGE', 'IVAN']

//al ser usada en un lugar específico se puede usar una función anónima, al igual que en el dom al detectar un click:

const boton = document.getElementById('myBotton');

boton.addEventListener('click', function () {
    alert('Click detectado');
});

//si la función será reutilizada o compleja se debe darle un nombre
function saludar(nombre) {
    return `Hola ${nombre}`;
}

// recordar que si sólo tiene un parámetro se puede usar arrow function:

const formatoDosNombres = nombres.map((nombre) => nombre.toLowerCase());
