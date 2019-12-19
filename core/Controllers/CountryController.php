<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(COUNTRY_MODEL);
require(COUNTRY_SERVICES);
require(COUNTRY_MODEL_TRUE);


$json = file_get_contents('php://input');
$objeto = json_decode($json);


    $i =$objeto->action;

$reply= new CountryModel();
$service = new CountryService();

if(!isset($objeto->idCountry)){$objeto->idCountry="" ;}
$reply->idCountry=$objeto->idCountry;

if(!isset($objeto->countryName)){$objeto->countryName="" ;}
$reply->countryName=$objeto->countryName;

switch ($i) {

    case "getCountry":

        $reply= $service->getAll();
         
         break;

    case "insertCountry":

       $reply= $service->insert($reply);
        
        break;

    case "getByLetter":

         $reply= $service->getByLetter($reply->countryName);
            
             
        break;
  

   
}


$json=json_encode($reply);

echo($json);


?>