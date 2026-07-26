<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de ingreso de datos</title>
    <?php
    require_once __DIR__ . '../../../../config.php';
    require_once BASE_PATH . 'frameworks/bootstrapcss.php';

    ?>
</head>

<body>

    <div class="container">
        <h1>Formulario de registro</h1>
    </div>

    <div class="container">
        <form action="" class="row g-3 form-control mt-2">
            <div class="mb-3">
                <label for="surname" class="form-label">Apellidos</label>
                <input id="surname" type="text" class="form-control uppercase">
            </div>
            <div class="mb-3 col-auto">
                <label for="name" class="form-label">Nombres</label>
                <input id="name" type="text" class="form-control uppercase">
            </div>

            <div class="mb-3 col-auto">
                <button type="submit" class="btn btn-primary mb-3">Enviar</button>
            </div>
        </form>
    </div>


    <script src="<?= BASE_URL ?>javascript/proyectos/form_uppercase/uppercase.js?v=<?= filemtime(BASE_PATH . 'javascript/proyectos/form_uppercase/uppercase.js') ?>"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const upperCaseText = new ConvertText('.uppercase');
        })
    </script>
</body>

</html>
