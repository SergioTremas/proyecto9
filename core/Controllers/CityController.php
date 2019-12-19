<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(CITY_MODEL);
require(CITY_SERVICES);


$json = file_get_contents('php://input');
$objeto = json_decode($json);


    
   

    $i =$objeto->action;



$reply= new CityModel();

$service = new CityService();

$reply->idCity=$objeto->idCity;
$reply->nameCity=$objeto->cityName;



switch ($i) {

    case "getCity":

        $reply= $service->getAll();
         
         break;

    case "insertCity":

       $reply = $service->insert($reply);
        
        break;

  
  

   
}


$json=json_encode($reply);

echo($json);


?>