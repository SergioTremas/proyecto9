<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



require("c:xampp/htdocs/proyecto9/config.php");
require(LOGIN_MODEL);
require(LOGIN_SERVICES);
require(USER_MODEL);
require(USER_SERVICES);

$json = file_get_contents('php://input');
$objeto = json_decode($json);


    
   

    $i =$objeto->action;



$reply= new LoginModel();

$service = new LoginService();

$reply->email=$objeto->email;
$reply->pass=$objeto->pass;
$reply->token=$objeto->token;


switch ($i) {

    case "check":

       $token= $service->checkLogin($reply);
        
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












$json=json_encode($token);

echo($json);


?>