<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



require("c:xampp/htdocs/proyecto9/config.php");

require(USER_MODEL);
require(USER_SERVICES);



$json = file_get_contents('php://input');
$objeto = json_decode($json);


    
   

    $i =$objeto->action;



$reply= new UserModel();

$service = new UserService();

$reply->idUser=$objeto->idUser;
$reply->names=$objeto->names;
$reply->surname=$objeto->surname;
$reply->email=$objeto->email;
$reply->idCountry=$objeto->idCountry;
$reply->country=$objeto->country;
$reply->idCity=$objeto->idCity;
$reply->city=$objeto->city;
$reply->numberAsses=$objeto->numberAsses;
$reply->dataAdd=$objeto->dataAdd;	
$reply->rol=$objeto->rol;
$reply->login=$objeto->login;
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

        $service->insertLogin($reply);
       
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