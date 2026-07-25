# Validación de Extensión de Archivos .pdf

El presente proyecto usa el método slice() de js para validar si la extensión del archivo que se va a subir es la correcta.

Validación fronted que bloquea el botón si no ha subido el archivo con la extensión correcta

# Validador de archivos multifuncional bajo paradigma POO

validatorPOO.js no sólo cambia de paradigma de programación sino también de vuelve multi-formato a validar

se inicia llamando al archivo:

<script src="<?= BASE_URL ?>javascript/proyectos/validar_extesion/validatorPOO.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/validar_extesion/validatorPOO.js') ?>"></script>

y se coloca en el fronted:

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Instanciamos el validador
            const pdfValidator = new FileValidator(['pdf']);

            // 2. Instanciamos la interfaz pasando los IDs del HTML y el validador
            new FileUploadUI('input', 'validar', pdfValidator);

            // para imágenes
            const imgValidator = new FileValidator(['img', 'jpg', 'png', ]);

            new FileUploadUI('inputImg', 'validarImg', imgValidator);
        });
    </script>
