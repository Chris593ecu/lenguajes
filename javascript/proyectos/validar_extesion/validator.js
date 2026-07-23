console.log('Validador en Línea');

let doc = document.getElementById('input');
let btn = document.getElementById('validar');

doc.addEventListener('change', function () {
    //.files es una propiedad del atributo type="file"
    if (this.files.length > 0) {
        let archivo = this.files[0];
        let validarDoc = archivo.name;

        if (validarDoc.toLowerCase().slice(-4) === '.pdf') {
            btn.classList.remove('disabled');
        } else {
            btn.classList.add('disabled');
            alert(
                'Seleccione un archivo válido, verifique que el archivo sea .pdf'
            );
        }
    }
});
