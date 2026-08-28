const persona = {
    apellido: 'Torres',
};
persona.nombre = 'Chris';

console.log(`hola ${persona.nombre} ${persona.apellido}`); // print: Hola Chris Juan

persona.adres = 'Sauces 1';

persona.age = 32;

console.log(persona); //{apellido: 'Torres', nombre: 'Chris', adres: 'Sauces 1', age: 32}

//para acceder a la propiedad de un objeto se puede usar . y [] ([] reservado para propiedades que empiecen con números o cadenas con espacios) y de forma dinámica:

const price = {
    '1roPosition': 'Ganado',
    'other position': 'Thanks',
};

console.log(price['other position']); //Thanks

let propertyName = '1roPosition';

console.log(price[propertyName]); // Ganado

//borrar una propiedad y mutar el objeto

delete persona.age;

console.log(persona); //{apellido: 'Torres', nombre: 'Chris', adres: 'Sauces 1'}

// borrar una propiedad pero no mutar el objeto (se genera uno nuevo);

persona.age = 33;

console.log(persona); //{apellido: 'Torres', nombre: 'Chris', adres: 'Sauces 1', age: 33}

const { adres, age, ...remainingPropierties } = persona;

console.log(remainingPropierties); // {apellido: 'Torres', nombre: 'Chris'}

console.log(persona); //{apellido: 'Torres', nombre: 'Chris', adres: 'Sauces 1', age: 33}

// trabajando con métodos

//hasOwnProperty verifica si la propiedad usada como parámetro es parte del objeto mencionado

console.log(persona); //{apellido: 'Torres', nombre: 'Chris', adres: 'Sauces 1', age: 33}

console.log(persona.hasOwnProperty('name')); //false no existe la propiedad 'name';

console.log(persona.hasOwnProperty('nombre')); // true 'nombre' si es una propiedad de persona;

// otra forma más moderna

console.log(Object.hasOwn(persona, 'name')); // false

console.log(Object.hasOwn(persona, 'nombre')); //true

// otra forma

console.log('name' in persona); //false

console.log('nombre' in persona); //true

// objetos anidados

persona.contact = {
    email: 'exapmle@gmail.com',
    phone: {
        home: '123-456-789',
        job: '987-654-321',
    },
};

console.log(persona); /*

{
  apellido: "Torres",
  nombre: "Chris",
  adres: "Sauces 1",
  age: 33,
  contact: {
    email: "exapmle@gmail.com",
    phone: {
      home: "123-456-789",
      job: "987-654-321"
    }
  }
}

*/

// número de trabajo de persona

console.log(persona.contact.phone.job); // 987-654-321

console.log(persona['contact']['phone']['job']); //987-654-321

// objeto con arrays internos

delete persona.adres;

persona.addresses = [
    { type: 'home', street: '123 Main St', city: 'Anytown' },
    { type: 'work', street: '456 Market St', city: 'Workville' },
];

console.log(persona); /*
{
  apellido: 'Torres',
  nombre: 'Chris',
  age: 33,
  contact: {
    email: 'exapmle@gmail.com',
    phone: {
      home: '123-456-789',
      job: '987-654-321'
    }
  },
  addresses: [
    { type: 'home', street: '123 Main St', city: 'Anytown' },
    { type: 'work', street: '456 Market St', city: 'Workville' }
  ]
}
*/

console.log(persona.addresses[1].city); //Workville

//métodos de un objeto:

persona.obtenerResumen = function () {
    const direccionHogar = this.adresses.find(
        (direccion) => direccion.type === 'home'
    );

    return (
        `${this.nombre} ${this.apellido} (${this.age} años) ` +
        `vive en ${direccionHogar ? direccionHogar.street : 'desconocida'} ` +
        `y su correo es ${this.contact.email}.`
    );
};

// new Object()

//destructuración de objetos

// los valores se asignan en función del nombre de la propiedad
const person = { name2: 'Alice', age2: 30, city: 'New York' };

const { age2, name2 } = person;

console.log(name2); // Alice
console.log(age2); // 30

// renombrar propiedades en la destruccturacion de objetos

let person2 = { name: 'Alicia', age: 30, city: 'Loja' };

let { name: personName, age: personaAge } = person2;

console.log(personName); // Alice
console.log(personAge); //  30

//valores predeterminados cuando una propiedad no existe, es un valor de respaldo:
let person3 = { name: 'Alice', age3: 30, city: 'New York' };
let { name, age3, country = 'Unknown' } = person;

console.log(country); // Unknown

//destructuración de objetos anidados

const recipe = {
    name: 'Chocolate Cake',
    ingredients: {
        flour: '2 cups',
        sugar: {
            blanca: '1 cup',
            morena: '3 cups',
        },
    },
};

// Extract `flour` from `ingredients`
const {
    ingredients: { flour },
} = recipe;

const {
    ingredients: {
        sugar: { morena },
    },
} = recipe;

console.log(flour); // "2 cups"

console.log(morena); // "3 cups"

//notación abreviada en la destructuración de objetos

let names = 'Bob';
let ages = 25;

let persons = { name, age };

console.log(persons); // { names: "Bob", ages: 25 }
