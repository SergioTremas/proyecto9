<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(CATEGORY_MODEL);
require(CATEGORY_SERVICES);

$json = file_get_contents('php://input');
 $objeto = json_decode($json);

 if($json==""){
     $objeto= new CategoryModel();
     $objeto->idCategory=$_GET['idCategory'];
     $objeto->idCategoryFather=$_GET['idCategoryFather'];
     $objeto->nameCategory=$_GET['nameCategory'];
     $objeto->action=$_GET['action'];
 }




 $i =$objeto->action;


$reply= new CategoryModel();

$service = new CategoryService();


           $reply->idCategory=$objeto->idCategory;
           $reply->nameCategory=$objeto->nameCategory;       
           $reply->idCategoryFather= $objeto->idCategoryFather;
           

switch ($i) {

    case "insert": //ok

       $reply= $service->insertCat( $reply);
       
        break;

    case "delete": //ok

        $service-> deleteCategory($idCategory);      
        
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