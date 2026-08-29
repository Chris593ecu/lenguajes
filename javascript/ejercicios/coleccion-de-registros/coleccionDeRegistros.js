const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name'],
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette'],
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: [],
    },
    5439: {
        albumTitle: 'ABBA Gold',
    },
};

function updateRecords(records, id, prop, value) {
    const recordsN = { ...records };

    const ident = recordsN?.[id]; // id{} es un objeto

    const propiedad = ident?.[prop]; // recibe un string, no es un objeto

    if (value === '') {
        delete ident?.[prop];
    }
    if (prop !== 'tracks' && value !== '') {
        ident[prop] = value;
    }

    if (prop === 'tracks' && value !== '') {
        if (!ident[prop]) {
            ident.tracks = [];
        }
        ident.tracks.push(value);
    }

    return recordsN;
}
updateRecords(recordCollection, 2548, 'tracks', 'Take a Chance on Me');
