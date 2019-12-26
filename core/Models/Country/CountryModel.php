<?php
 require_once(DATA_BASE);

class CountryModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idCountry;
    public $countryName;
    

	public function getByLetter(string $letter){

		

		try {
	        
	        $query =parent::prepare("SELECT `idCountry`, `countryName` FROM `country` WHERE countryName like '$letter%'");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arraycountry= array();
		   
		   foreach($res as $x){

            $model = new CountryModelTrue();
            $model->idCountry= $x[0];
            $model->countryName=$x[1];
           
            
            $arraycountry[]=$model;

		   }

		   return $arraycountry;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

	}


	public function insertcountry($countryName){

        try {
	        
	        $query =parent::prepare("SELECT * FROM country where countryName ='$countryName'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   	  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
       // if(!$res>0){
	$sentence ="INSERT INTO `country`( `countryName`) VALUES ('$countryName')";

		$id1= parent::insert($sentence);
		$this->idCountry=$id1;
		$this->countryName= $countryName;
		return $this->idCountry;

       // }

        

	
	    

	}

	public function updatecountry($model){

		$sentence= "UPDATE `country` SET `countryName`= '$model->countryName' where idCountry= $model->idCountry ";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM country where idCountry ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   
		   foreach($res as $x){
            
            $this->idCountry= $x[0];
            $this->countryName=$x[1];
           
		   }		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }


	 public function deletecountry($id1){

        if($id1!="1"){

         $sentence= "DELETE FROM `country` WHERE idCountry=$id1";
         $sentence1="UPDATE `user` SET `idCountry`= '1' where idCountry= $id1";

         parent::insert($sentence1);

		 parent::insert($sentence);
        }

        
	 }

   

	public function getAllcountry() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM country");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arraycountry= array();
		   
		   foreach($res as $x){

            $model = new CountryModelTrue();
            $model->idCountry= $x[0];
            $model->countryName=$x[1];
		   
			array_push($arraycountry,$model);
            
            //$arraycountry[]=$model;

		   }

		   return $arraycountry;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}


}


?>