
<?php

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

header('Access-Control-Allow-Origin:*'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  


require("c:xampp/htdocs/proyecto9/config.php");
require(ASSES_MODEL);
require(ASSES_SERVICES);
require(USER_MODEL);
require(USER_SERVICES);

$json = file_get_contents('php://input');
 
$params = json_decode($json);

   



//$reply= new AssesModel();

// $service = new AssesService();



//            $reply->idProduct=$idProduct;
//            $reply->opinion=$opinion;
//            $reply->idUser= $idUser;
//            $reply->asses=$asses;





$json=json_encode($params);

echo($json);

// $json=json_encode($reply);

// echo($json);


?>