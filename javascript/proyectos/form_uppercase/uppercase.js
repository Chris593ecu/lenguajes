console.log('Convertidor de textos a mayúsculas en línea');

class ConvertText {
    constructor(selector) {
        this.inputs = document.querySelectorAll(selector);
        this.myEvents();
    }

    myEvents() {
        if (this.inputs.length === 0) {
            console.log('No existe la clase declarada');
            return;
        }

        this.inputs.forEach((input) => {
            input.addEventListener('input', (event) => {
                setTimeout(() => {
                    this.toUpperCase(event);
                }, 300);
            });
        });
    }
    toUpperCase(event) {
        event.target.value = event.target.value.toUpperCase();
    }
}
