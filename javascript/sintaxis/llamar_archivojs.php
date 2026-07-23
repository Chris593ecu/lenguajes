<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Llamar archivos, Modular</title>
</head>

<body>

    <script src="myFolder/myField.js?=v1.2.3">
        //con sólo cambiar los números ya se puede obtener los nuevos cambios e inutilizar la jodida caché
    </script>

    <script src="<?= BASE_URL ?>scripts/cupones.js?v=<?= filemtime(BASE_PATH . 'scripts/cupones.js') ?>">
        //y si se usa php podemos cambiar el valor si y sólo sí hubio un cambio en el archivo
    </script>
</body>

</html>
<?php

//para llamar archivos en js lo mejor es usar versiones, puesto que se actualizan siempre en el navegador y no dependemos del odioso caché:

//myFolder/myField.js?v=1.2.3
