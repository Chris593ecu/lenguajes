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
        <p>Suba al sistema un archivo .pdf</p>
        <form action="" class="form-control">
            <label for="input" class="form-label">suba su archivo aquí:</label> <br>
            <input id="input" type="file" class="form-control"> <br>
            <button id="validar" type="submit" class="btn btn-primary disabled">Enviar</button>
        </form>
    </div>

    <!-- <script src="<?= BASE_URL ?>scripts/cupones.js?v=<?= filemtime(BASE_PATH . 'scripts/cupones.js') ?>"> -->

    </script>
    <script src="<?= BASE_URL ?>javascript/proyectos/validar_extesion/validator.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/validar_extesion/validator.js') ?>">

    </script>
    <?php
    require_once BASE_PATH . 'frameworks/bootstrapjs.php'
    ?>


</body>

</html>
