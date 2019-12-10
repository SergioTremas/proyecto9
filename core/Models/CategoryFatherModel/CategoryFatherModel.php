<?php

require_once(DATA_BASE);

class CategoryFatherModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idCategory;
    public $nameCCAA;
    


	public function insertCategory(CategoryFatherModel $model){


		$sentence ="INSERT INTO `categoryFather`( `nameCCAA`) VALUES ('$model->nameCCAA')";

		$id1= parent::insert($sentence);
		$this->idCategory=$id1;
		$this->nameCCAA= $model->nameCCAA;
		


	    

	}

	public function updateCategory(CategoryFatherModel $model){

		$sentence= "UPDATE `categoryFather` SET `nameCCAA`= '$model->nameCCAA' WHERE idCategoryFhater = $model->idCategory";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM categoryFather where idCategoryFhater ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();	  
		   
		   foreach($res as $x){
            
            $this->idCategory= $x[0];
            $this->nameCCAA=$x[1];    
            

		   }

		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }


	 public function deleteCategory($id1){
		 $sentence="DELETE FROM `categoryFather` WHERE idCategoryFhater=$id1";
		 parent::insert($sentence);
	 }
	
	

   

	public function getAllCategory() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM CategoryFather");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayCategory= array();
		   
		   foreach($res as $x){

            $model = new CategoryFatherModel();
            $model->idCategory= $x[0];
            $model->nameCCAA=$x[1];
           
            
            $arrayCategory[]=$model;

		   }

		   return $arrayCategory;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}




}
?>