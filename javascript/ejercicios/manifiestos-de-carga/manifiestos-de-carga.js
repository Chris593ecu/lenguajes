const producto = {
    containerId: 1,
    destination: 'Monterey, California, USA',
    weight: 831,
    unit: 'lb',
    hazmat: false,
};

function normalizeUnits(manifest) {
    const copyManifest = { ...manifest };

    if (copyManifest.unit === 'lb') {
        copyManifest.weight *= 0.45;
        copyManifest.unit = 'kg';
    }

    return copyManifest;
}
normalizeUnits(
    normalizeUnits({
        containerId: 68,
        destination: 'Salinas',
        weight: 101,
        unit: 'lb',
        hazmat: true,
    })
);

function validateManifest(manifest) {
    const errors = {};
    const copyManifest = { ...manifest };

    for (const key in copyManifest) {
        if (copyManifest[key] !== undefined || copyManifest[key] !== null) {
            return new Object();
        }
    }

    if (
        typeof copyManifest.containerId !== 'number' ||
        copyManifest.containerId <= 0 ||
        !Number.isInteger(copyManifest.containerId)
    ) {
        copyManifest.containerId = 'Invalid';
    } else if ((copyManifest.containerId = '')) {
        copyManifest.containerId = 'Missing';
    }

    if (
        typeof copyManifest.destination !== 'string' ||
        copyManifest.destination.trim === ''
    ) {
        copyManifest.destination = 'Invalid';
    } else if ((copyManifest.destination = '')) {
        copyManifest.destination = 'Missing';
    }

    if (copyManifest.weight !== 'number' || copyManifest.weight <= 0) {
        copyManifest.weight = 'Invalid';
    } else if (copyManifest.weight === '') {
        copyManifest.weight = 'Missing';
    }

    if (copyManifest.unit !== 'kg' || copyManifest.unit !== 'lb') {
        copyManifest.unit = 'Invalid';
    } else if (copyManifest.unit === '') {
        copyManifest.unit = 'Missing';
    }

    if (copyManifest.hazmat !== 'boolean') {
        copyManifest.hazmat = 'Invalid';
    } else if (copyManifest.hazmat === '') {
        copyManifest.hazmat = 'Missing';
    }
}

function processManifest() {}
