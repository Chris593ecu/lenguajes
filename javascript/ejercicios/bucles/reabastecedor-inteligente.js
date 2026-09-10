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
console.log(rawData[0].split('|'));
console.log(rawData.length);

const shipment = [];
function parseShipment(rawData) {
    const noRepeat = [];
    for (let i = 0; i < rawData.length; i++) {
        // console.log(rawData[i].split('|'));
        const [sku, name, qty, expires, zone] = rawData[i].split('|');
        if (!noRepeat.includes(sku)) {
            noRepeat.push(sku);

            const myObject = {
                sku: sku,
                name: name,
                qty: Number(qty),
                expires: expires,
                zone: zone || 'general',
            };
            shipment.push(myObject);
        }
    }
    // console.log(shipment);

    return shipment;
}

parseShipment(rawData);

const actions = [];
function planRestock(pantry, shipment) {
    for (let i = 0; i < shipment.length; i++) {
        const item = shipment[i];
        console.log(item);
        if (item.qty <= 0) {
            actions.push({
                type: 'discard',
                item: item,
            });
            continue;
        }
        const existeEnDespensa = pantry.some((pItem) => pItem.sku === item.sku);
        if (existeEnDespensa) {
            actions.push({
                type: 'restock',
                item: item,
            });
        } else {
            actions.push({
                type: 'donate',
                item: item,
            });
        }
    }
    console.log(actions);
    return actions;
}

planRestock(pantry, shipment);
console.log(planRestock(pantry, shipment));
console.log(shipment[1].zone);

console.log(actions);
function groupByZone(actions) {
    const clonePantry = [];
    /** forma del objeto resultado:
     * @key 'nombre de la zona
     * @value Array(actions) que pertenecen a la zona
     */
    for (let i = 0; i < actions.length; i++) {
        console.log(actions[i].item.zone);
        if (actions[i].item.zone === 'fridge') {
            clonePantry.push( {
                item.fridge : [...],
            })
        } else if (actions[i].item.zone === 'pantry') {
            clonePantry= {
                pantry : [...]
            }
        }
    }
}

groupByZone(actions);
/*
11. Debes definir una función llamada groupByZone que acepte un parámetro llamado actions.
Fallido:12. Tu función groupByZone debe devolver las acciones agrupadas por la propiedad zone de cada objeto.
Fallido:13. Tu función groupByZone debe agrupar correctamente las acciones con el contenido y la cantidad correctos.
*/

console.log('script para Pichincha miles');
/*
window.sumarMillas = async function (cantidad = 1000) {
    // Busca el botón con el aria-label exacto del HTML
    const boton = document.querySelector(
        'button[aria-label="Aumentar undefined"]'
    );

    if (!boton) {
        console.error('❌ No se encontró el botón de aumentar.');
        return;
    }

    console.log(`🚀 Iniciando ${cantidad} clics...`);

    for (let i = 1; i <= cantidad; i++) {
        // Genera un evento de clic nativo completo para React
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
        });

        boton.dispatchEvent(clickEvent);

        // Muestra avance cada 100 clics en la consola
        if (i % 100 === 0) {
            console.log(`⏳ Clics ejecutados: ${i} / ${cantidad}`);
        }

        // Pequeña pausa de 10ms para asegurar que React actualice el estado
        await new Promise((resolve) => setTimeout(resolve, 10));
    }

    console.log('✅ ¡Proceso finalizado con éxito!');
};

// Ejecutar por defecto 1000 clics
sumarMillas(1000);

*/
