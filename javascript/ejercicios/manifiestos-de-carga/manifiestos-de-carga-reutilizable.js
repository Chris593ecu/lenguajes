const esquemaManifiesto = {
    containerId: (val) => Number.isInteger(val) && val > 0,
    destination: (val) => typeof val === 'string' && val.trim().length > 0,
    weight: (val) => typeof val === 'number' && val > 0,
    unit: (val) => val === 'kg' || val === 'lb',
    hazmat: (val) => typeof val === 'boolean',
};

function validarDinamico(datos, esquema) {
    const reporte = {};

    for (const [propiedad, regla] of Object.entries(esquema)) {
        const valor = datos[propiedad];

        if (valor === undefined || valor === null || valor === '') {
            reporte[propiedad] = 'Missing';
        } else if (!regla(valor)) {
            reporte[propiedad] = 'Invalid';
        }
    }

    return reporte;
}
