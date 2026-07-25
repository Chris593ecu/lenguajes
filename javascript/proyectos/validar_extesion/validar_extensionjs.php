<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validando Extension de archivo</title>

    <?php
    require_once __DIR__ . '../../../../config.php';

    require_once BASE_PATH . 'frameworks/bootstrapcss.php';
    ?>
</head>

<body>
    <div class="container text-center">
        <h1>Ingrese su archivo al sistema</h1>
    </div>
    <div class="container">
        <hr>
        <form action="" class="form-control">
            <label for="input" class="form-label">Ingrese un su archivo pdf aquí:</label> <br>
            <input id="input" type="file" class="form-control"> <br>
            <button id="validar" type="submit" class="btn btn-primary disabled" disabled>Enviar</button>
        </form>
    </div>

    <div class="container">
        <hr>
        <form action="" class="form-control">
            <label for="inputImg" class="form-label">Ingrese un su archivo imagen aquí:</label> <br>
            <input id="inputImg" type="file" class="form-control"> <br>
            <button id="validarImg" type="submit" class="btn btn-primary disabled" disabled>Enviar</button>
        </form>
    </div>


    <!-- <script src="<?= BASE_URL ?>javascript/proyectos/validar_extesion/validator.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/validar_extesion/validator.js') ?></script> -->


    <script src="<?= BASE_URL ?>javascript/proyectos/validar_extesion/validatorPOO.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/validar_extesion/validatorPOO.js') ?>"></script>
    <?php
    require_once BASE_PATH . 'frameworks/bootstrapjs.php'
    ?>

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
</body>

</html>
