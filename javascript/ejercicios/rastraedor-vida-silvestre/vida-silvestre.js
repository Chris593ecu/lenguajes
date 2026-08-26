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
