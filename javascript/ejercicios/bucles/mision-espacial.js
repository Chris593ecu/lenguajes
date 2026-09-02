const squad = [];

const firstAstronaut = {
    id: 1,
    name: 'Andy',
    role: 'Commander',
    isEVAEligible: true,
    priority: 3,
};

function addCrewMember(crew, astronaut) {
    for (const key of crew) {
        if (key.id === astronaut.id) {
            console.log(`Duplicate ID: ${astronaut.id}`);
            return;
        }
    }
    crew.push(astronaut);

    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
    { id: 2, name: 'Bart', role: 'Pilot', isEVAEligible: false, priority: 8 },
    {
        id: 3,
        name: 'Caroline',
        role: 'Engineer',
        isEVAEligible: true,
        priority: 4,
    },
    {
        id: 4,
        name: 'Diego',
        role: 'Scientist',
        isEVAEligible: false,
        priority: 15,
    },
    { id: 5, name: 'Elise', role: 'Medic', isEVAEligible: true, priority: 7 },
    {
        id: 6,
        name: 'Felix',
        role: 'Navigator',
        isEVAEligible: true,
        priority: 6,
    },
    {
        id: 7,
        name: 'Gertrude',
        role: 'Communications',
        isEVAEligible: false,
        priority: 4,
    },
    { id: 8, name: 'Hank', role: 'Mechanic', isEVAEligible: true, priority: 2 },
    {
        id: 9,
        name: 'Irene',
        role: 'Specialist',
        isEVAEligible: true,
        priority: 5,
    },
    {
        id: 10,
        name: 'Joan',
        role: 'Technician',
        isEVAEligible: false,
        priority: 1,
    },
];

for (const key of remainingCrew) {
    console.log(key);

    addCrewMember(squad, key);
}

// crew: un arreglo de objetos astronauta

// fromIndex: el índice del primer astronauta a intercambiar

// toIndex: el índice del segundo astronauta a intercambiar
function swapCrewMembers(crew, fromIndex, toIndex) {
    if (
        !crew ||
        fromIndex < 0 ||
        fromIndex >= crew.length ||
        toIndex < 0 ||
        toIndex >= crew.length
    ) {
        console.log('Invalid crew indices');
        return;
    }

    const updatedCrew = crew.slice();

    updatedCrew[fromIndex] = updatedCrew.splice(
        toIndex,
        1,
        updatedCrew[fromIndex]
    )[0];

    // for (const key of updatedCrew) {
    //     console.log(key.name);
    // }
    return updatedCrew;
}
const updatedSquad = swapCrewMembers(squad, 2, 5);

console.log(updatedSquad);

const eligible = [];

function getEVAReadyCrew(crew) {
    const eligible = [];
    for (const astronaut of crew) {
        if (astronaut.isEVAEligible) eligible.push(astronaut);
    }
    sortByPriorityDescending(eligible);

    return eligible;
}

const numeros = [12, 45, 78, 23];
function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
        console.log(`primer for i: ${i}`);
        for (let j = 0; j < crew.length - 1 - i; j++) {
            console.log(`segundo for, i = ${i}`);
            console.log(`segundo for, j = ${j}`);

            console.log(` valor de crew[j]: ${crew[j]} antes del if`);
            console.log(`valor de crew[j+1]:${crew[j + 1]} antes del if`);
            if (crew[j].priority < crew[j + 1].priority) {
                const temp = crew[j];
                console.log(`temp: ${temp}`);
                console.log(numeros);

                crew[j] = crew[j + 1];
                console.log(`crew[j]: ${crew[j]}`);
                console.log(numeros);
                crew[j + 1] = temp;
                console.log(`crew[j+1]: ${crew[j + 1]}`);
                console.log(numeros);
            }
        }
    }
}

sortByPriorityDescending(numeros);
console.log(numeros);

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

for (const key of EVAReadySquad) {
    console.log(key.name);
}

function chunkCrew(crew, size) {
    if (size < 1) {
        console.log('Chunk size must be >= 1');
        return;
    }

    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
        chunks.push(crew.slice(i, i + size));
    }

    return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

for (let i = 0; i < EVAChunks.length; i++) {
    console.log(`Chunk ${i + 1}:`);
    for (let j = 0; j < EVAChunks[i].length; j++) {
        console.log(EVAChunks[i][j].name);
    }
}

function printCrewSummary(crew) {
    const sorted = crew.slice();
    sortByPriorityDescending(sorted);
    for (const astronaut of sorted) {
        console.log(astronaut.name);
    }
}

printCrewSummary(updatedSquad);
