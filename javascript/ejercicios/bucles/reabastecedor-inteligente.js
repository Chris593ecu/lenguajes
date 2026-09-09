// #Construcción de un reabastecedor inteligente de despensa
const pantry = [
    {
        sku: 'A10',
        name: 'Tomatoes',
        qty: 4,
        expires: '2027-01-01',
        zone: 'fridge',
    },
    {
        sku: 'D43',
        name: 'Pineapples',
        qty: 2,
        expires: '2020-01-01',
        zone: 'general',
    },
];

const rawData = [
    'A10|Tomatoes|5|2027-01-01',
    'B21|Bananas|10|2027-01-01',
    'C32|Eggs|3|2027-01-01|fridge',
    'C32|Eggs|3|2027-01-01',
    'D43|Pineapples|0|2027-01-01',
    'E54|Peppers|-1|2027-01-01|fridge',
];
let rawDataFormat = [];

function parseShipment(rawData) {
    rawData.unshift('sku|name|qty|expires|zone');
    console.log(rawData);
    for (let i = 0; i < rawData.length; i++) {
        console.log(rawData[i].split('|'));
        rawDataFormat.push(rawData[i].split('|'));

        console.log(rawDataFormat);
    }
    console.log(Object.assign({}, rawDataFormat));
    let myObjectArray = [];

    console.log(rawDataFormat);
    console.log(rawDataFormat[1]);

    for (let i = 0; i < rawDataFormat.length; i++) {
        console.log(rawDataFormat[i]);

        myObjectArray.push(Object.assign({}, rawDataFormat[i]));
    }
    console.log(myObjectArray);
}

parseShipment(rawData);
