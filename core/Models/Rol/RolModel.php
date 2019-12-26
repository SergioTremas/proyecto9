<?php
 require_once(DATA_BASE);

class RolModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idRol;
    public $nameRol;

	public function insertRol($nameRol){

		try {
	        
	        $query =parent::prepare("SELECT * FROM rol where nameRol ='$nameRol'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   	  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
        if (!$res>0) {
            $sentence ="INSERT INTO `rol`( `nameRol`) VALUES ('$nameRol')";

            $id1= parent::insert($sentence);
            $this->idRol=$id1;
            $this->nameRol= $nameRol;
        }	    

	}

	public function updateRol($model){

		$sentence= "UPDATE `rol` SET `nameRol`= '$model->nameRol' where idRol= $model->idRol ";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM rol where idRol ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   
		   foreach($res as $x){
            
            $this->idRol= $x[0];
            $this->nameRol=$x[1];
           
		   }		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }


	 public function deleteRol($id1){

        if($id1!="1"){

         $sentence= "DELETE FROM `rol` WHERE idRol=$id1";
         $sentence1="UPDATE `user` SET `idRol`= '1' where idRol= $id1";

         parent::insert($sentence1);

		 parent::insert($sentence);
        }

        
	 }
	
	

   

	public function getAllRol() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM rol");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayRol= array();
		   
		   foreach($res as $x){

            $model = new RolModel();
            $model->idRol= $x[0];
            $model->nameRol=$x[1];
           
            
            $arrayRol[]=$model;

		   }

		   return $arrayRol;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}


}


?>