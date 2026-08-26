//silvia navarrete

//Taller para construir un rastreador de vida silvestre

const tiger = {
    species: 'Tiger',
    age: 5,
    isEndangered: true,
};

const elephant = {
    species: 'Elephant',
    age: 10,
    isEndangered: true,
};

// const getSpecies = (animal) => {
//     return animal.species;
// };

//const getSpecies = (animal) => animal.species;

function getSpecies(animal) {
    return animal.species;
}

console.log(getSpecies(tiger));

const getAge = (animal) => animal.age;

function addHabitat(animal, habitat) {
    animal.habitat = habitat;
    return animal;
}
console.log(addHabitat(tiger, 'Rainforest'));

const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => animal.hasOwnProperty('habitat');

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

// function getProperty(animal, propertyName) {
//     return animal[propertyName];
// }

const getProperty = (animal, propertyName) => animal[propertyName];

console.log(getProperty(tiger, 'species'));
console.log(getProperty(elephant, 'age'));
