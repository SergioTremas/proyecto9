<?php
 require_once(DATA_BASE);

class CategoryModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idCategory;
    public $nameCategory;
    public $idCategoryFather;



	public function insertCategory(CategoryModel $model){


		$sentence ="INSERT INTO `category`( `nameCategory`, `idCategoryFhater`) VALUES ('$model->nameCategory', '$model->idCategoryFather')";

		$id1= parent::insert($sentence);
		$this->idCategory=$id1;
		$this->nameCategory= $model->nameCategory;
		$this->idCategoryFather=$model->idCategoryFather;

		$model->idCategory=$id1;

		return $model;
	    

	}

	public function updateCategory(CategoryModel $model){

		$sentence= "UPDATE `category` SET `idCategoryFhater`='$model->idCategoryFather' WHERE idCategory = $model->idCategory";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM category where idCategory ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();

		  
		   
		   foreach($res as $x){

            
            $this->idCategory= $x[0];
            $this->nameCategory=$x[1];
            $this->pass=$x[2];
            
            

		   }

		   

		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }

   
      



	 public function deleteCategory($id1){

		 $sentence="UPDATE `categoryproduct` SET `idCategory`=0 WHERE `idCategory`=$id1";
		 $sentence1="DELETE FROM `category` WHERE idCategory=$id1";

		 parent::insert($sentence);
		 parent::insert($sentence1);
	 }
	
	

   

	public function getAllCategory() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM category");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayCategory= array();
		   
		   foreach($res as $x){

            $model = new CategoryModel();
            $model->idCategory= $x[0];
            $model->nameCategory=$x[1];
            $model->idCategoryFather=$x[2];
            
            $arrayCategory[]=$model;

		   }

		   return $arrayCategory;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}


    public function getByCategoryFhater($idFather) {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM category where idCategoryFhater = $idFather");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayCategory= array();
		   
		   foreach($res as $x){

            $model = new CategoryModel();
            $model->idCategory= $x[0];
            $model->nameCategory=$x[1];
            $model->idCategoryFather=$x[2];
            
            $arrayCategory[]=$model;

		   }
		   
		   return $arrayCategory;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}

}


?>