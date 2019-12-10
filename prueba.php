<?php




$token = bin2hex(random_bytes(64));

echo $token;


  
// require("c:xampp/htdocs/proyecto9/config.php");

// require(LOGIN_MODEL);
// require(USER_MODEL);
// require(LEVEL_MODEL);
// require(LOGIN_SERVICES);
// require(USER_SERVICES);
// require(CATEGORY_MODEL);
// require(CATEGORYFHATER_MODEL);
// require(PRODUCT_MODEL);
// require(COUNTRY_MODEL);
// require(ASSES_MODEL);
// require(ASSES_SERVICES);
// require(CATEGORY_SERVICES);
// require(CITY_SERVICES);
// require(CITY_MODEL);
// require(COUNTRY_SERVICES);

// // $categorySer = new CategoryService();
//  $model = new CountryModel();
// // $model->idCategory=4;
// // $model->idCategoryFather=4;
// // $model->nameCategory= "dragones y mazmorrras";

// $country = new CountryService();

// $model->countryName="panama";
// $model->idCountry=4;

// $model=$country->getByID(12);

// echo $model->countryName;

// $array= $country->getAll();

// echo $array[0]->countryName;







// $arr = $categorySer->getByFather(4);


// foreach($arr as $model){
//     echo $model->nameCategory;

// }






 //$assesSer->get


// echo $model->names;
// echo $model->surname;
// echo $model->email;
// echo $model->country;
// echo $model->country;
// echo $model->numberAsses;
// echo $model->dataAdd;
// echo $model->rol;
// echo $model->login;
// echo $model->level;
 


// $asses= new AssesModel();


// $asses->idProduct=2;
// $asses->idUser=15;
// $asses->asses=4;
// $asses->opinion="ofejgojerogjedrtognd";

// $asses->getByIdProIdUser($asses);

// echo $asses->idProduct;
// echo $asses->nameProduct;
// echo $asses->idUser;
// echo $asses->nameUser;
// echo $asses->asses;
// echo $asses->opinion;

//  $arr =$asses->getByUser(3);

//  foreach($arr as $x){
//      echo "<div>";
//     echo $x->idProduct;
//     echo $x->nameProduct;
//     echo $x->idUser;
//     echo $x->nameUser;
//     echo $x->asses;
//     echo $x->opinion;
//     echo "</div>";
//  }

// foreach($asses->getByIdProIdUser($asses) as $x){

//             $x->idProduct=$x[1];
//             $x->nameProduct=$x[2];
//             $x->idUser=$x[3];
//             $x->nameUser=$x[4];
//             $x->asses=$x[5];
//             $x->opinion=$x[6];
// }



// $product= new ProductModel();

// $arr = $product->getAllProduct();


// foreach($arr as $x){

//     echo   "<div>";
//     echo $x->idProduct;
//     echo $x->nameProduct;
//     echo $x->description;  
//     echo $x->photo;
//     echo $x->idCategory;
//     echo $x->nameCategory;
//     echo $x->valueAVG;
     
//      echo   "</div>";
     
   
     
//    }




// $country = new CountryModel();



// $country->insertcountry("italy");

// echo $country->countryName;
// echo $country->idCountry;

// $country->getById(1);

// echo $country->countryName;
// echo $country->idCountry;
// $id=$country->idCountry;

// $res= $country->getAllcountry();

// foreach($res as $x){

//     echo $x->countryName;
//     echo $x->idCountry;
    

// }
// $country->idCountry=$id;
// $country->updatecountry($country);
// echo $country->countryName;

//$country->deletecountry(1);






// $product = new ProductModel();

// $product->nameProduct="camisa roja muy roja";
// $product->description="s";
// $product->photo="foto ";
// $product->idCategory="2";
// $product->idProduct="3";

// $product->insertProduct($product);

//$product->getById($product->idProduct);

//echo $product->nameProduct;

//$arr = $product->getProductsByCCAA(3);



// $category = new CategoryFatherModel();
// $category->getById(20);
// $category->nameCCAA="Pamplonas";
// $category->deleteCategory(20);
// 
// $category->idCategoryFhater=7;
// $category->idCategory=5;

// $arr =$category->getAllCategory();




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
//  $model2->country="1";
//  $model2->numberAsses=0;
//  $model2->dataAdd=date("Y-m-d H:i:s");
//  $model2->rol=1;
//  $model2->login=10;
//  $model2->level=2;
//  $model2->insertUser($model2);




?>