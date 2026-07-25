console.log('validador multi-formato POO en línea');

//clase validadora de extensión
class FileValidator {
    constructor(allowedExt = ['pdf']) {
        //el archivo a validar por defecto será pdf
        this.allowedExt = allowedExt.map((ext) => ext.toLowerCase());
    }
    /** ahora verificaremos si tiene una extensión permitida
     * @param {File} myFile
     * @returns {boolean}
     */

    //creamos un método de nombre personalizado para la clase que valide si es un archivo, para ello debemos buscar en el nombre del archivo y dividir su contenido en un nuevo array

    isValid(myFile) {
        if (!myFile) {
            return false;
        }
        // split() divide el nombre del archivo por cada punto y crea un array
        // pop() obtiene el último elemento del array, que corresponde a la extensión
        const extension = myFile.name.split('.').pop().toLowerCase();
        // en otras palabras, tomamos el nombre del archivo, lo diseccionamos y extraemos la extensión:
        return this.allowedExt.includes(extension);
    }
}

// clase que maneja el DOM

class FileUploadUI {
    constructor(inputId, buttonId, validator) {
        //al crear la nueva clase le pasaremos los ids de elementos a usar para validar
        this.inputElement = document.getElementById(inputId);
        this.buttonElement = document.getElementById(buttonId);

        //validator será una instancia de la clase FileValidator, al ser una clase podemos crear un array que valide mas de un tipo de archivo como el de imágenes:
        //  const validator = new FileValidator (['png', 'img', 'jpeg', etc..]);

        this.validator = validator;

        //el DOM empezará a escuchar los eventos
        this.myEvents();
    }
    //Comprobar si existen las etiquetas html
    myEvents() {
        if (!this.inputElement || !this.buttonElement) {
            console.log(
                'No se encontraron los elementos requeridos por la clase'
            );
            return;
        }

        this.inputElement.addEventListener('change', (event) =>
            this.weHandleFileChange(event)
        );
    }

    weHandleFileChange(event) {
        //usamos el atributo .files del "input type = 'file'""
        const files = event.target.files;

        if (files.length === 0) return;
        const selectedFile = files[0];

        //Utilizamos el método isValid() de la clase FileValidator

        if (this.validator.isValid(selectedFile)) {
            this.enableButton();
        } else {
            this.yourError(
                `Seleccione un archivo válido. Formatos permitidos: ${this.validator.allowedExt.join(', ')}`
            );
            this.disabledButton();

            //limpiamos el input
            this.inputElement.value = '';
        }
    }
    enableButton() {
        this.buttonElement.classList.remove('disabled');
        this.buttonElement.disabled = false;
    }
    disabledButton() {
        this.buttonElement.classList.add('disabled');
        this.buttonElement.disabled = true;
    }

    yourError(message) {
        alert(message);
    }
}
