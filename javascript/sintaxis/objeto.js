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
