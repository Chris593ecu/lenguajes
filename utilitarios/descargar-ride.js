document.addEventListener('click', async function (e) {
    // Buscamos si el elemento clickeado o su contenedor es el enlace del RIDE
    const rideLink = e.target.closest(
        'a[title="Representación Impresa del Comprobante Electrónico"]'
    );

    if (rideLink) {
        e.preventDefault(); // Evita que se abra la pestaña nueva por defecto

        const pdfUrl = rideLink.href;

        try {
            // Descargamos el PDF mediante fetch para forzar la descarga local
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const tempLink = document.createElement('a');
            tempLink.href = blobUrl;
            tempLink.download = 'Comprobante_RIDE.pdf'; // Nombre predeterminado del archivo descargado
            document.body.appendChild(tempLink);
            tempLink.click();

            // Limpieza de elementos temporales en memoria
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.warn(
                'La descarga directa fue bloqueada por políticas CORS del servidor. Abriendo de forma convencional...',
                error
            );
            // Plan de respaldo en caso de restricciones de seguridad del servidor
            window.open(pdfUrl, '_blank');
        }
    }
});
