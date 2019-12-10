
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require($_SERVER['DOCUMENT_ROOT']."/proyecto9/config.php");
require(PRODUCT_SERVICES);
require(PRODUCT_MODEL);


    //$json = file_get_contents('php://input');
 
   // $producto = json_decode($json);


    $idProduct=isset($_GET['id'])? $_GET['id'] : $_POST[('id')];
    $nameProduct=isset($_GET['name'])? $_GET['name'] : $_POST[('name')];
    $description=isset($_GET['description'])? $_GET['description'] : $_POST[('description')];
    $photo=isset($_GET['photo'])? $_GET['photo'] : $_POST[('photo')];
    $category=isset($_GET['category'])? $_GET['category'] : $_POST[('category')];
    $CCAA=isset($_GET['CCAA'])? $_GET['CCAA'] : $_POST[('CCAA')];

    $i =isset($_GET['action'])? $_GET['action'] : $_POST[('action')];



$reply= new ProductModel();

$service = new ProductService();

$reply->nameProduct=$nameProduct;
$reply->idProduct=$idProduct;
$reply->description=$description;
$reply->photo=$photo;
$reply->idCategory=$category;





switch ($i) {

    case "getById":

        $reply = $service->getByID($idProduct);
       
        break;

    case "update":

        $service->updateProduct($reply);       
        
        break;

    case "insert":

        $reply=$service->insert($reply);
       
        break;

        case "letter":

        $reply=$service->getAllbyLetter($nameProduct);
           
        break;

    case "delete":

        $service->deleteProduct($idProduct);
       
        break;

    case "getAll":

        $reply=$service->getAll();
      
        break;

    case "getAVG":

        $reply= $service->getAVG($idProduct);
     
        break;

    case "getByCCAA":

       $reply= $service->getByCCAA($CCAA);
       
        break;

    case "getByCategory":

        $reply=$service->getByCategory($category);
       
        break;
}


$json=json_encode($reply);

echo($json);


?>