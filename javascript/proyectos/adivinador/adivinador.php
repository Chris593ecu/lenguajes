<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivinador</title>

    <?php
    require_once __DIR__ . '../../../../config.php';
    require_once BASE_PATH . 'frameworks/bootstrapcss.php';
    ?>
</head>

<body>
    <div class="container text-center m-2">
        <h1>Hola Mundo</h1>
    </div>
    <div class="">

    </div>
    <script src="<?= BASE_URL ?>frameworks/bootstrapjs.php?v=<?= filemtime(BASE_PATH . 'frameworks/bootstrapjs.php') ?>"></script>

    <script src="<?= BASE_URL ?>javascript/proyectos/adivinador/adivinador.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/adivinador/adivinador.js') ?>"></script>
</body>

</html>