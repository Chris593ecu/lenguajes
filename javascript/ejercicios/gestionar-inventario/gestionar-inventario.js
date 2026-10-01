// crud de objetos simulando crud de inventarios

const inventory = [
    {
        name: 'CelUlar',
        quantity: 15,
    },
    {
        name: 'flour',
        quantity: 10,
    },
];

function findProductIndex(name) {
    const nameLower = name.toLowerCase();

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === nameLower) {
            return i;
        }
    }
    return -1;
}
console.log(findProductIndex('celulAr'));

console.log(findProductIndex('Flour'));

function addProduct(obj) {
    const nameLower = obj.name.toLowerCase();
    //console.log(obj.name);
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === nameLower) {
            inventory[i].quantity += obj.quantity;
            console.log(`${nameLower} quantity updated`);
            return;
        }
    }
    inventory.push({
        name: nameLower,
        quantity: obj.quantity,
    });
    console.log(`${nameLower} added to inventory`);
}
addProduct({ name: 'FLOUR', quantity: 5 });
addProduct({ name: 'FLOpUR', quantity: 5 });

function removeProduct(name, quantity) {
    const nameLower = name.toLowerCase();

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLocaleLowerCase() === nameLower) {
            if (inventory[i].quantity < quantity) {
                console.log(
                    `Not enough ${nameLower} available, remaining pieces: ${inventory[i].quantity}`,
                );
                return;
            }
            inventory[i].quantity -= quantity;

            if (inventory[i].quantity === 0) {
                console.log(`Remaining ${nameLower} pieces: 0`);
                inventory.splice(i, 1);
                return;
            }
            console.log(
                `Remaining ${nameLower} pieces: ${inventory[i].quantity}`,
            );
            return;
        }
    }
    console.log(`${nameLower} not found`);
}
