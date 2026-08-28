// los arhcivos json no aceptan comentarios
const myObject =
    //ignorar esta constante, srive para que js no marqueq erroes
    //fomrato de un json
    // myFile.json:

    {
        name: 'Chris',
        age: 36,
        'currente date': 'Lunes, 27 de octubre de 2027',
    };

//método JSON.parse()

// método JSON.stringify() se usa para convertir un objeto de js en cadena json

const user = {
    name: user,
    age: 30,
    isAdmin: true,
};

const jsonString = JSON.stringify(user);

console.log(jsonString); /* objeto a cadena:
    {"name":"John","age":30,"isAdmin":true}
*/

const developerObj = {
    firstName: 'Jessica',
    isAwesome: true,
    isMusician: true,
    country: 'USA',
};

console.log(JSON.stringify(developerObj, ['firstName', 'country']));
// {"firstName":"Jessica","country":"USA"} texto plano
undefined;
console.log(developerObj);
// {firstName: 'Jessica', isAwesome: true, isMusician: true, country: 'USA'} object

// Otro parámetro opcional para el método JSON.stringify() sería el parámetro spacer. Esto te permite controlar el espaciado del resultado convertido en cadena:

developerObj = {
    firstName: 'Jessica',
    isAwesome: true,
    isMusician: true,
    country: 'USA',
};

console.log(JSON.stringify(developerObj, null, 2));
// los muestra verticales
/* result
{
  "firstName": "Jessica",
  "isAwesome": true,
  "isMusician": true,
  "country": "USA"
}
*/

//Otro método que usarás mucho en tu programación es el método JSON.parse(). JSON.parse() convierte una cadena JSON de nuevo en un objeto JavaScript. Esto es útil cuando recuperas datos JSON de un servidor web o de localStorage y necesitas manipular los datos en tu aplicación. Aprenderás más sobre localStorage en una lección futura.

//Aquí tienes un ejemplo de cómo trabajar con el método JSON.parse():

jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Result:
// { name: 'John', age: 30, isAdmin: true }

// #Operador de encadenamiento opcional
//?.
//es una herramienta útil en JavaScript que te permite acceder de forma segura a propiedades de objetos o llamar métodos sin preocuparte de si existen. Es como una red de seguridad para trabajar con objetos que podrían tener partes faltantes.
user = {
    name: 'John',
    profile: {
        email: 'john@example.com',
        address: {
            street: '123 Main St',
            city: 'Somewhere',
        },
    },
};
console.log(user?.profile?.address?.street);
// 1. user existe? Sí -> evalúa profile
// 2. profile existe? Sí -> evalúa address
// 3. address existe? Sí -> lee street ("123 Main St")

console.log(user?.profile?.phone?.number);
// 1. user existe? Sí -> evalúa profile
// 2. profile existe? Sí -> evalúa phone
// 3. phone existe? NO (es undefined) -> Frena inmediatamente y devuelve undefined.
