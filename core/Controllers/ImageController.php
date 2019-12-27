
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");


$rutaTemp=$_FILES['file']['tmp_name'];
$actualName= $_FILES['file']['name'];

$type= $_FILES['file']['type'];
$size= $_FILES['file']['size'];

$path=$_SERVER['DOCUMENT_ROOT']."/proyecto9/proyecto9Angular/src/assets/imgProducts";

move_uploaded_file($_FILES['file']['tmp_name'],$path.$actualName);



?>