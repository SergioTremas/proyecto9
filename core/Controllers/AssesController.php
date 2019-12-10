
<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



require("c:xampp/htdocs/proyecto9/config.php");
require(ASSES_MODEL);
require(ASSES_SERVICES);
require(USER_MODEL);
require(USER_SERVICES);

$json = file_get_contents('php://input');
$objeto = json_decode($json);


    
   

    $i =$objeto->action;



$reply= new AssesModel();

$service = new AssesService();



           $reply->idProduct=$objeto->idProduct;
           $reply->opinion=$objeto->opinion;
           $reply->idUser= $objeto->idUser;
           $reply->asses=$objeto->asses;

switch ($i) {

    case "insert":

       $reply= $service->insert($objeto->idUser, $objeto->idProduct, $objeto->asses, $objeto->opinion);
       
        break;

    case "delete":

        $service->deleteAsses($reply);      
        
        break;


    case "update":

         $service->updateAsses( $reply);    
       
        break;

    case "getByUser":

          $reply = $service->getByUser($reply->idUser);
      
        break;

    case "getByProduct":

        $reply = $service-> getByProduct($objeto->idProduct);
     
        break;

    case "getByIdProIdUser":

     $reply =  $service->getByIdProIdUser($reply);
       
        break;

    case "getAll":

         $reply= $service->getAllAsses();
       
        break;
}


$json=json_encode($reply);

echo($json);


?>