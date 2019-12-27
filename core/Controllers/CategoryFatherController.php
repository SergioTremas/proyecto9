<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(CATEGORYFHATER_MODEL);
require(CATEGORYFATHER_SERVICES);


$json = file_get_contents('php://input');
 $objeto = json_decode($json);

   

 $i =$objeto->action;


$reply= new CategoryFatherModel();

$service = new CategoryFatherService();


           $reply->idCategory=$objeto->idCategory;
           $reply->nameCCAA=$objeto->nameCCAA;       
           
           

switch ($i) {

    case "insert": //ok

      
       
        break;

    case "delete": //ok

        $service-> deleteCategory($reply->idCategory);      
        
        break;


    case "update": //ok

         $service->updateCategory($reply);    
       
        break;

    case "getByID":

          $reply = $service->getByID($reply->idCategory);
      
        break;

    case "getAll":

        $reply = $service->getAllCat();
     
        break;

    case "getByFather":

     $reply =  $service->getByFather($idFather);
       
        break;

    

   
}




$json=json_encode($reply);

echo($json);


?>