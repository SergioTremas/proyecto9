<?php

class ProductService{
  
    private $modelProduct;
    private $modelUser;

    public function __construct(){

        $this->modelProduct = new ProductModel();
        $this->modelUser = new UserModel();

       

    }

    public function insert(ProductModel $model){
        $this->modelProduct->insertProduct($model);
        return $this->modelProduct;

    }

    public function getAllbyLetter(string $leter){

       return $this->modelProduct->getAllbyLetter($leter);

    }

    public function getbyLetterCat(string $letter, string $idCat){
        return $this->modelProduct->getByLetterCategory($letter,$idCat);
    }


    public function deleteProduct($idProduct){

        $this->modelProduct->deleteProduct($idProduct);

    }

    public function updateProduct(ProductModel $model){

        $this->modelProduct->updateProduct($model);        
     
    }
 
    public function getByID($id1){

        $this->modelProduct->getById($id1);
        return $this->modelProduct;
    }

    public function getAll(){

        return $this->modelProduct->getAllProduct();

        
    }

    public function getAVG($id1){
      $allAsses= $this->modelProduct->getSumAsses($id1);
      $allLevels= $this->modelUser->getSumLevels($id1);

      $AVG= $allAsses/$allLevels;
      return $AVG;


    }

    public function getByCCAA($idCCAA){

        return $this->modelProduct->getProductsByCCAA($idCCAA);
    }

    public function getByCategory($idCat){
        
        return $this->modelProduct->getProductsByCategory($idCat);
    }

    

 


}

?>