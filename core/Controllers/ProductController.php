
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(PRODUCT_SERVICES);
require(PRODUCT_MODEL);
require(PRODUCT_MODEL_TRUE);
require(USER_MODEL);



    $json = file_get_contents('php://input');
 
   $producto = json_decode($json);


    

    $i =$producto->action;


$reply= new ProductModel();

$service = new ProductService();

if(!isset($producto->nameProduct)){$producto->nameProduct = "null" ;}
$reply->nameProduct=$producto->nameProduct;
if(!isset($producto->idProduct)){$producto->idProduct = "null" ;}
$reply->idProduct=$producto->idProduct;
if(!isset($producto->description)){$producto->description = "null" ;}
$reply->description=$producto->description;
if(!isset($producto->photo)){$producto->photo = "null" ;}
$reply->photo=$producto->photo;
if(!isset($producto->idCategory)){$producto->idCategory = "null" ;}
$reply->idCategory=$producto->idCategory;





switch ($i) {

    case "getById":

        $reply = $service->getByID($reply->idProduct);
       
        break;

    case "update":

        $service->updateProduct($reply);       
        
        break;

    case "insert":

        $reply=$service->insert($reply);
       
        break;

    case "letter":

        $reply=$service->getAllbyLetter($reply->nameProduct);
           
        break;

    case "letterAndCat":

            $reply=$service->getbyLetterCat($nameProduct,$category);
               
            break;
    

    case "delete":

        $service->deleteProduct($reply->idProduct);
       
        break;

    case "getAll":

        $reply=$service->getAll();
      
        break;

    case "getAVG":

        $reply= $service->getAVG($reply->idProduct);
     
        break;

    case "getByCCAA":

       $reply= $service->getByCCAA($CCAA);
       
        break;

    case "getByCategory":

        $reply=$service->getByCategory($reply->idCategory);
       
        break;
    case "getCategory":

        $reply=$ser->getCategory($category);
           
        break;
}


$json=json_encode($reply);

echo($json);


?>