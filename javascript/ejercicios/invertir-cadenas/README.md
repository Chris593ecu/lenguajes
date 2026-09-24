# Laboratorio para crear cadenas: Inversión de Strings

## Descripción

Este laboratorio contiene una función en JavaScript diseñada para recibir una cadena de texto, transformar sus caracteres, invertirlos y retornar el resultado final. Además, incluye impresiones en consola (`console.log`) para inspeccionar el estado intermedio de los datos.

---

## Código del Laboratorio

```javascript
// # Laboratorio para crear cadenas

function reverseString(cadena) {
    const setCadena = cadena.split('');
    console.log(setCadena);
    const getCadena = setCadena.reverse().join('');

    console.log(getCadena);
    return getCadena;
}

console.log(reverseString('Hello'));
```

Paso A: Conversión de String a Array (.split(''))
Mecanismo: El método .split('') pasa un delimitador de cadena vacía ''. Esto le indica al motor de JavaScript que debe separar cada caracter de la cadena de entrada por su índice UTF-16.

Resultado: La cadena de texto 'Hello' se descompone y retorna un nuevo arreglo en memoria con los elementos ['H', 'e', 'l', 'l', 'o'].

Visualización: Se imprime en consola la variable setCadena mostrando la estructura del arreglo recién creado.

Paso B: Inversión Mutativa del Arreglo (.reverse())
Mecanismo: El método .reverse() opera sobre el prototipo de arreglos (Array.prototype.reverse()).Invierte el orden de los elementos in-place (modificando la referencia del arreglo directamente en memoria).

Efecto Secundario: El arreglo contenido en setCadena cambia su orden interno a ['o', 'l', 'l', 'e', 'H'].

Paso C: Unificación de Elementos (.join(''))
Mecanismo: El método .join('') toma los elementos del arreglo y los concatena en una única secuencia de caracteres utilizando el delimitador proporcionado ('', sin separadores ni comas).

Resultado: Se asigna a la constante getCadena el nuevo string primitivo resultante 'olleH'.

Paso D: Retorno de Datos y Salida
Se imprime en consola el valor final de getCadena.

La función finaliza devolviendo la cadena invertida al ámbito de llamada (console.log(reverseString('Hello'))), produciendo la impresión del valor retornado.
