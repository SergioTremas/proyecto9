<?php
 require_once(DATA_BASE);

class CityModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idCity;
    public $nameCity;

	public function insertCity($nameCity){

		try {
	        
	        $query =parent::prepare("SELECT * FROM city where nameCity ='$nameCity'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   	  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
        if (!$res>0) {
            $sentence ="INSERT INTO `city`( `nameCity`) VALUES ('$nameCity')";

            $id1= parent::insert($sentence);
            $this->idCity=$id1;
            $this->nameCity= $nameCity;
        }	    

	}

	public function updateCity($model){

		$sentence= "UPDATE `city` SET `nameCity`= '$model->nameCity' where idCity= $model->idCity ";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM city where idCity ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   
		   foreach($res as $x){
            
            $this->idCity= $x[0];
            $this->nameCity=$x[1];
           
		   }		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }


	 public function deleteCity($id1){

        if($id1!="1"){

         $sentence= "DELETE FROM `city` WHERE idCity=$id1";
         $sentence1="UPDATE `user` SET `idCity`= '1' where idCity= $id1";

         parent::insert($sentence1);

		 parent::insert($sentence);
        }

        
	 }
	
	

   

	public function getAllCity() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM City");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayCity= array();
		   
		   foreach($res as $x){

            $model = new CityModel();
            $model->idCity= $x[0];
            $model->nameCity=$x[1];
           
            
            $arrayCity[]=$model;

		   }

		   return $arrayCity;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}


}


?>