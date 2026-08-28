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
