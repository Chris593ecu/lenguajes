<?php
var_dump(__DIR__); //print C:\xampp\htdocs\lenguajes\php\sintaxis\llamar_archivo.php

die();
//var_dump(__DIR__); siempre ubicar este debug para saber en que dirección estamos.

//Para llamar un archivo tenemos varias formas

include 'myFolder/myDoc.php';  // Si el archivo no existe, PHP lanza una advertencia (Warning), pero el código que sigue debajo se sigue ejecutando.

require 'myFolder/myDoc.php';  // Si el archivo no existe, PHP lanza un error fatal (Fatal Error) y detiene la ejecución del programa inmediatamente.


include_once 'myFolder/myDoc.php'; //Funciona igual que include pero realiza una comprobación previa, si PHP ya detecta que el archivo ya fué cargado antes en alguna parte de la ejecución actual, lo ignora y no lo vuelve a cargar (ejm evitar cargar dos veces el archivo del link de bootstrap)

require_once 'myFolder/myDoc.php'; //Funciona igual que require pero se asegura de cargarlo una sólo vez, es la opción mas utilizada para usar frameworks o librerías, clases, funciones, conn base de datos.

IMPORTANTE:

//Siempre se debe crear una variable global que haga referencia a la carpeta raíz del proyecto para evitar saltos de salida y entrada a carpetas:

//definimos las variables globales de sistema


define('BASE_PATH', __DIR__ . '/'); //esto para el servidor
// var_dump(__DIR__); // imprime "C:\xampp\htdocs\lenguajes"
// var_dump(ROOT_PATH); // imprime "C:\xampp\htdocs\lenguajes/"
// __DIR__ siempre apuntará desde el archivo donde está llamada, no es una ruta absoluta

define('BASE_URL', 'ruta del archivo ejm: http://localhost/mi_proyecto/'); //esto para el navegador html header y demás


define('BASE_DOMAIN', "http://localhost"); //para cookies y sesiones

//y para llamarlo en un nuevo archivo primero se debe llamar al archivo en donde están definidas las variables globales (config.php)
//previamente imprimir var_dump(__DIR__) para saber si entrar o salir a buscar el archivo con las variables config

//var_dump(__DIR__); // imprime: C:\xampp\htdocs\lenguajes\php\sintaxis\llamar_archivo.php

require_once __DIR__ . '../../../config.php';

// Una vez que tenemos el archivo config.php ya podemos usar las variables globales

require_once BASE_PATH . 'myFolder/myField.php';
// se puede copiar la ruta alternativa y colocarla

//Formas adicionales avanzadas (Mención Honorífica):

//Aunque las 4 anteriores son las funciones nativas directas, cuando un proyecto PHP crece se usan estos dos métodos avanzados para manejar archivos:

//Autoloading con spl_autoload_register() (o Composer): En lugar de escribir 50 require_once al inicio de un script, le dices a PHP que incluya automáticamente las clases según se vayan necesitando en el código.

//readfile() o file_get_contents(): Se usan cuando solo quieres leer o mostrar el contenido plano de un archivo (como un archivo .txt o .json), pero sin ejecutar código PHP dentro de él.
