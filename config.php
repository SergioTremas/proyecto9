<?php
/**
 * Created by PhpStorm.
 * User: Deivid
 * Date: 21/10/17
 * Time: 20:25
 */

//defined('BASEPATH') or exit('No se permite acceso directo');

// Valores de URI
define('URI', $_SERVER['REQUEST_URI']);
define('REQUEST_METHOD', $_SERVER['REQUEST_METHOD']);

// Valores de rutas
define('FOLDER_PATH', '/proyecto9');
define('ROOT_PATH', $_SERVER['DOCUMENT_ROOT']. FOLDER_PATH);
define('DATA_BASE', ROOT_PATH . "/core/DataBase.php");
//define('PATH_VIEWS', FOLDER_PATH . '/view/');
define('PATH_MODELS', ROOT_PATH . '/core/Models');
define('PATH_SERVIS', ROOT_PATH . '/core/Services');
define('PATH_CONTROLLERS', 'controller/');
//define('HELPER_PATH', 'core/helpers/');
//define('ASSETS', ROOT_PATH . FOLDER_PATH ."/assets/");
//define('LIBS_ROUTE', ROOT_PATH .'/'. FOLDER_PATH . '/core/libs/');
//define('FILES', $_SERVER["DOCUMENT_ROOT"]."/assets/images/");
define('USER_MODEL', PATH_MODELS . '/User/UserModel.php');
define('LOGIN_MODEL', PATH_MODELS . '/Login/LoginModel.php');
define('LEVEL_MODEL',PATH_MODELS. '/Level/LevelModel.php');

define('PRODUCT_MODEL', PATH_MODELS . '/Product/ProductModel.php');

//SERVICES

define('LOGIN_SERVICES' , PATH_SERVIS. '/Login/LoginService.php' );
define('USER_SERVICES', PATH_SERVIS. '/User/UserService.php');


// Valores de core
define('CORE', 'core/');
define('DEFAULT_CONTROLLER', 'Home');

// Valores de base de datos
define('HOST', 'localhost');
define('USER', 'root');
define('PASSWORD', '');
define('DB_NAME', 'valorarproductos');

// Valores configuracion
define('ERROR_REPORTING_LEVEL', -1);

//Nombre de la App
$site_name = 'Spaghetti';

//Maximum Login Attempts
$max_attempts = 5;

//Timeout (in seconds) after max attempts are reached
$login_timeout = 300;

//Valores archivos imagenes
$valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
$limit_kb = 5000000;

//Valores Emails
$from_email = ''; //Webmaster email
$from_name = ''; //"From name" displayed on email

//Protocolo envio emails
$mailServerType = 'smtp';

$smtp_server = 'smtp.mail.domain.com';
$smtp_user = 'youremail@domain.com';
$smtp_pw = 'yourEmailPassword';
$smtp_port = 465; //465 for ssl, 587 for tls, 25 for other
$smtp_security = 'ssl';//ssl, tls or ''