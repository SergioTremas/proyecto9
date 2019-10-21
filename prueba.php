<?php
  
require("c:xampp/htdocs/proyecto9/config.php");

require(LOGIN_MODEL);
require(USER_MODEL);
require(LEVEL_MODEL);
require(LOGIN_SERVICES);
require(USER_SERVICES);
require(CATEGORY_MODEL);
require(CATEGORYFHATER_MODEL);
require(PRODUCT_MODEL);

$product = new ProductModel();

$product->nameProduct="camisa roja muy roja";
$product->description="s";
$product->photo="foto ";
$product->idCategory="2";
//$product->idProduct="3";

// $product->insertProduct($product);

$product->getById($product->idProduct);

//echo $product->nameProduct;

$arr = $product->getProductsByCCAA(3);


foreach($arr as $x){

  echo   "<div>";
 echo $x->idProduct;
 echo $x->nameProduct;
 echo $x->description;  
 echo $x->photo;
 echo $x->idCategory;
 echo $x->nameCategory;
  
  echo   "</div>";
  

  
}

// $category = new CategoryFatherModel();
// $category->getById(20);
// $category->nameCCAA="Pamplonas";
// $category->deleteCategory(20);
// 
// $category->idCategoryFhater=7;
// $category->idCategory=5;

// $arr =$category->getAllCategory();





// $login=new LoginModel();
// $login->email="tremosa@gmail.com";
// $login->pass="12345";

// $login->checkLogin($login->email, $login->pass);


//  echo $login->idLogin;



// // $date1 = new DateTime();
// // $date2 = new DateTime($_date);
// // $diff = $date1->diff($date2);

// //  $month = $diff->y *12;
// //  $month =$month + $diff->m;

//  // echo $month;


// $loginService = new LoginService();
// $login= new LoginModel();
// $model2= new UserModel();
// $login->email="carolina@gmail.com";
// $login->pass="12345";

// $login1=$loginService->checkLogin($login);
// echo $login1->email;
// echo $login1->idLogin;
// $login->email="carol@gmail.com";
// $login->pass="12345";
// $login2= $loginService->insertLogin($login);

// echo $login2->idLogin;





// 
// 

//  echo $loginService->insertLogin($login);

 
//  $model2->names="juan";
//  $model2->surname="lopez";
//  $model2->email="lopezz@gmail.com";
//  $model2->country="3";
//  $model2->city="1";
//  $model2->numberAsses=0;
//  $model2->dataAdd=date("Y-m-d H:i:s");
//  $model2->rol=1;
//  $model2->login=10;
//  $model2->level=2;
//  $model2->insertUser($model2);




?>