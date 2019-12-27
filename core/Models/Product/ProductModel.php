<?php

require_once(DATA_BASE);

class ProductModel extends DataBase{


    private $modelUser;
    


    public function __construct() {
        parent::__construct();
        
        $this->modelUser = new UserModel();
       
	}


    public $idProduct;
    public $nameProduct;
    public $description;
    public $photo;
    public $idCategory;
    public $nameCategory;
    public $valueAVG;



	public function insertProduct(ProductModel $model ){

        $sentence="INSERT INTO `product`(`nameproduct`, `desciption`, `photo`) VALUES ('$model->nameProduct','$model->description','$model->photo')";

        $id1= parent::insert($sentence);
        
		$this->idProduct=$id1;
        $this->nameProduct= $model->nameProduct;
        $this->description=$model->description;
        $this->idCategory=$model->idCategory;
        $this->photo=$model->photo;	

        $sentence="INSERT INTO `categoryproduct`(`idcategory`, `idproduct`) VALUES ('$this->idCategory','$this->idProduct')";

        parent::insert($sentence);  

        
	}


	public function updateProduct(ProductModel $model){

		$sentence ="UPDATE `product` SET `nameproduct`='$model->nameProduct',`desciption`='$model->description',`photo`='$model->photo' where idproduct= '$model->idProduct'";
        $sentence1= "DELETE FROM `categoryproduct` WHERE  `idproduct`='$model->idProduct'";
        $sentence2= "INSERT INTO `categoryproduct`(`idcategory`, `idproduct`) VALUES ('$model->idCategory','$model->idProduct')";

        parent::insert($sentence1);
        parent::insert($sentence2);        
        parent::insert($sentence);   
    }

    public function getAVG($id1){
        $allAsses= $this->getSumAsses($id1);
        $allLevels= $this->modelUser->getSumLevels($id1);

        if($allAsses==0){
            $allAsses=1;
        }
        if($allLevels==0){
            $allLevels=1;
        }
        
            $AVG= $allAsses/$allLevels;
            return $AVG;
       
  
  
      }



    public function getById($id1){

        try {
	        
	        $query = parent::prepare("SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, 
            product.photo , categoryproduct.idcategory, category.namecategory, AVG(assesment.asses) FROM `categoryproduct` 
            inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on 
            categoryproduct.idproduct=product.idproduct INNER JOIN assesment ON 
            categoryproduct.idproduct=assesment.idProduct where product.idproduct= $id1");
	        $query->execute();

		   $res= $query->fetchAll();	  
		   
		   foreach($res as $x){
            
            $this->idProduct= $x[0];
            $this->nameProduct=$x[1];
            $this->description=$x[2];
            $this->photo=$x[3];
            $this->idCategory=$x[4];
            $this->nameCategory=$x[5];
            $this->valueAVG=$this->getAVG($x[0]);

		   }

		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }

    public function getSumAsses($id1){

        $sentence="select sum(asses) from assesment WHERE `idproduct`=$id1";

        try {
	        
	        $query =parent::prepare($sentence);
	        $query->execute();

		   $res= $query->fetchAll();		 

		   return $res[0][0];

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }


    }


	 public function deleteProduct($id1){

         $sentence="DELETE FROM `product` WHERE idproduct=$id1";
         $sentence1="DELETE FROM `categoryproduct` WHERE idproduct=$id1";
         $sentence2="DELETE FROM `assesment` WHERE `idProduct`=$id1";

         parent::insert($sentence1);
         parent::insert($sentence2);

		 parent::insert($sentence);
	 }
    
     
     public function getProductsByCCAA( $idCCAA) {

        $sentence="SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, 
        product.photo , categoryproduct.idcategory, category.namecategory FROM `categoryproduct` 
        inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on 
        categoryproduct.idproduct=product.idproduct INNER JOIN categoryfather on
         category.idcategoryfhater=categoryfather.idCategoryfhater where category.idcategoryfhater=$idCCAA";

         return $this->getBy($sentence);
	}
   
	
     public function getProductsByCategory( $idCategory) {

        $sentence="SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, 
            product.photo , categoryproduct.idcategory, category.namecategory FROM `categoryproduct` 
            inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on 
            categoryproduct.idproduct=product.idproduct where categoryproduct.idcategory=$idCategory";

            return $this->getBy($sentence);

	    
    }

    public function getAllProduct() {

        $sentence="SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, 
        product.photo , categoryproduct.idcategory, category.namecategory FROM `categoryproduct` 
        inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on 
        categoryproduct.idproduct=product.idproduct ";
 
        return $this->getBy($sentence);
            
     }

     public function getAllbyLetter(string $letter) {

        $sentence="SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, product.photo , categoryproduct.idcategory, category.namecategory FROM `categoryproduct` inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on categoryproduct.idproduct=product.idproduct where product.nameproduct like '$letter%'";
 
        return $this->getBy($sentence);
            
     }

     public function getByLetterCategory(string $letter, string $idCat){

        $sentence="SELECT categoryproduct.idproduct , product.nameproduct, product.desciption, product.photo , categoryproduct.idcategory, category.namecategory FROM `categoryproduct` inner JOIN category on categoryproduct.idcategory= category.idcategory INNER JOIN product on categoryproduct.idproduct=product.idproduct where product.nameproduct like '$letter%' AND categoryproduct.idcategory='$idCat'";
 
        return $this->getBy($sentence);

     }
    
    private function getBy($sentence){

        try {
	        
	        $query =parent::prepare($sentence);
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayProduct= array();
		   
		   foreach($res as $x){

            $model = new ProductModelTrue(); 
          
            $model->idProduct= $x[0];
            $model->nameProduct=$x[1];
            $model->description=$x[2];
            $model->photo=$x[3];
            $model->idCategory=$x[4];
            $model->nameCategory=$x[5];
            $model->valueAVG=$this->getAVG($x[0]);
            
            
            $arrayProduct[]=$model;

		   }

		   return $arrayProduct;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }
   

	

}

?>