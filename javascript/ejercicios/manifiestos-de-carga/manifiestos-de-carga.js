// const producto = {
//     containerId: 1,
//     destination: 'Monterey, California, USA',
//     weight: 831,
//     unit: 'lb',
//     hazmat: false,
// };

function normalizeUnits(manifest) {
    const copyManifest = { ...manifest };

    if (copyManifest.unit === 'lb') {
        copyManifest.weight *= 0.45;
        copyManifest.unit = 'kg';
    }

    return copyManifest;
}
// normalizeUnits(
//     normalizeUnits({
//         containerId: 68,
//         destination: 'Salinas',
//         weight: 101,
//         unit: 'lb',
//         hazmat: true,
//     })
// );

function validateManifest(manifest) {
    const copyManifest = { ...manifest };
    // if (copyManifest !== undefined && copyManifest !== null) {
    //     new Object();
    // }
    const errors = {};

    //reglas

    const reglas = {
        containerId: (v) =>
            typeof v === 'number' && v > 0 && Number.isInteger(v),
        destination: (v) => typeof v === 'string' && v.trim() !== '',
        weight: (v) => typeof v === 'number' && v > 0 && !Number.isNaN(v),
        unit: (v) => v === 'kg' || v === 'lb',
        hazmat: (v) => typeof v === 'boolean',
    };

    for (const [campo, v] of Object.entries(reglas)) {
        const valor = copyManifest[campo];

        // console.log(`campo data: ${campo} / valor data: ${valor}`);

        if (valor === undefined) {
            errors[campo] = 'Missing';
        } else if (valor === null || !v(valor)) {
            errors[campo] = 'Invalid';
        }
    }
    return errors;
}

function processManifest(manifest) {
    const validation = validateManifest(manifest);

    if (Object.keys(validation).length === 0) {
        const normalize = normalizeUnits(manifest);

        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalize.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validation);
    }
}

// let a = {
//     containerId: 55,
//     destination: 'Carmel',
//     weight: 400,
//     unit: 'lb',
//     hazmat: false,
// };

// processManifest(a);
