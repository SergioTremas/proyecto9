<?php

class ProductService{
  
    private $modelProduct;

    public function __construct(){

        $this->modelProduct = new ProductModel();
       

    }

    public function insert(ProductModel $model){
        $this->modelProduct->insertProduct($model);
        return $this->modelProduct;

    }

    public function getAllbyLetter(string $leter){

       return $this->modelProduct->getAllbyLetter($leter);

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
      return  $this->modelProduct->getAVG($id1);
    }

    public function getByCCAA($idCCAA){

        return $this->modelProduct->getProductsByCCAA($idCCAA);
    }

    public function getByCategory($idCat){
        
        return $this->modelProduct->getProductsByCategory($idCat);
    }


}

?>