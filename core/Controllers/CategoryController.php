<?php
header("Access-Control-Allow-Origin:  http://localhost");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require("c:xampp/htdocs/proyecto9/config.php");
require(CATEGORY_MODEL);
require(CATEGORY_SERVICES);




    $idCategory=isset($_GET['idCategory'])? $_GET['idCategory'] : $_POST[('idCategory')];
    $nameCategory=isset($_GET['nameCategory'])? $_GET['nameCategory'] : $_POST[('nameCategory')];
    
    $idFather=isset($_GET['idFather'])? $_GET['idFather'] : $_POST[('idFather')];
   

    $i =isset($_GET['action'])? $_GET['action'] : $_POST[('action')];



$reply= new CategoryModel();

$service = new CategoryService();


           $reply->idCategory=$idCategory;
           $reply->nameCategory=$nameCategory;       
           $reply->idCategoryFather= $idFather;
           

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

          $reply = $service->getByID($idCategory);
      
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