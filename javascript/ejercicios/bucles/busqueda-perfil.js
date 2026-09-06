let contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin'],
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes'],
    },
];

function lookUpProfile(item, prop) {
    const readContacts = [...contacts];
    console.log(readContacts);

    for (let i = 0; i < readContacts.length; i++) {
        if (readContacts[i].firstName === item) {
            // console.log(readContacts[i]);
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';

    // superar la capacidad de ocupantes permitidos

    // const propierties = [];
    // const itemValue = 0;
    // for (const key of contacts) {
    //     for (const phase in key) {
    //         console.log(phase);
    //         propierties.push(phase);
    //     }
    // }
    // const propiertiesText = propierties.join(', ');
    // console.log(propiertiesText);
    // if (!propierties.includes(prop)) {
    //     return 'No such property';
    // }
    // for (let i = 0; i < contacts.length; i++) {
    //     if (contacts[i].firstName === item) {
    //         console.log(contacts[i][prop]);
    //         return contacts[i][prop];
    //     }
    // }
    // for (const key of contacts) {
    //     console.log(key);
    //     if (key.firstName !== item) {
    //         return 'No such contac';
    //     }
    // }
}
// lookUpProfile('Harry', 'lastName');
console.log(lookUpProfile('Kristian', 'lastName'));
console.log(lookUpProfile('Bob', 'number'));
console.log(lookUpProfile('Akira', 'address'));
