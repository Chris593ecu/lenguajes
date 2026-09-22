// # Auditor de procedencia de artefactos;

// los artefactos de un museo estarán en un objeto y con funciones los buscaremos, etiquetaremos, moverlos y resumirlos

// se identifican por un ID

const collection = {
    101: {
        title: 'Golden Mask',
        category: 'Ceremonial',
        curator: {
            id: 101,
            name: 'Earl Sinclair',
        },
        locations: [
            {
                gallery: 'Hall A',
                year: 2020,
            },
            {
                gallery: 'Hall C',
                year: 2024,
            },
        ],
        tags: ['gold', 'egypt'],
        onDisplay: true,
    },
    102: {
        title: 'Bronze Tablet',
        category: 'Inscription',
        curator: {
            id: 202,
            name: 'Robert Sinclair',
        },
        locations: [{ gallery: 'Archive Wing', year: 2019 }],
        tags: ['bronze', 'writing'],
        onDisplay: false,
    },
};

function getArtifactTitle(id) {
    const artifact = collection[id];
    if (!artifact) {
        return 'Artifact not found';
    } else {
        return artifact.title;
    }
}

console.log(getArtifactTitle(102));
