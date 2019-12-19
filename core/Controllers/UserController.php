<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");

require(USER_MODEL);
require(USER_SERVICES);
require(CITY_MODEL);
require(CITY_SERVICES);
require(COUNTRY_MODEL);
require(COUNTRY_SERVICES);



$json = file_get_contents('php://input');
$objeto = json_decode($json);


    
   

    $i =$objeto->action;



$reply= new UserModel();

$service = new UserService();

if(!isset($objeto->idUser)){$objeto->idUser="" ;}
$reply->idUser=$objeto->idUser;

if(!isset($objeto->names)){$objeto->names="" ;}
$reply->names=$objeto->names;

if(!isset($objeto->surname)){$objeto->surname="";}
$reply->surname=$objeto->surname;

if(!isset($objeto->email)){$objeto->email="";}
$reply->email=$objeto->email;

if(!isset($objeto->idCountry)){$objeto->idCountry="";}
$reply->idCountry=$objeto->idCountry;

if(!isset($objeto->country)){$objeto->country="";}
$reply->country=$objeto->country;

if(!isset($objeto->idCity)){$objeto->idCity="";}
$reply->idCity=$objeto->idCity;

if(!isset($objeto->city)){$objeto->city="";}
$reply->city=$objeto->city;

if(!isset($objeto->numberAsses)){$objeto->numberAsses=0;}
$reply->numberAsses=$objeto->numberAsses;

if(!isset($objeto->dataAdd)){$objeto->dataAdd=date('Y-m-d');}
$reply->dataAdd=$objeto->dataAdd;

if(!isset($objeto->rol)){$objeto->rol=1;}
$reply->rol=$objeto->rol;

if(!isset($objeto->login)){$objeto->login=1;}
$reply->login=$objeto->login;

if(!isset($objeto->level)){$objeto->level=1;}
$reply->level=$objeto->level;


switch ($i) {

    case "getByToken":

       $reply = $service->getByToken($objeto->token);
        
        break;

    case "deleteToken":

            $token= $service->deleteToken($reply->token);
            $token="";
             
             break;

    case "insert":

        $reply= $service->insert($reply);
       
        break;

    case "delete":
        
        $service->delete($id);
        
        break;


    case "update":

        $service->updateLogin($reply);
        
        break;

   
}


$json=json_encode($reply);

echo($json);


?>

