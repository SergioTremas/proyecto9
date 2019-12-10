<?php
 require_once(DATA_BASE);

class LevelModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    public $idLevel;
    public $nameLevel;
    public $value;



	public function insertlevel(LevelModel $model){


		$sentence ="INSERT INTO `leveluser`( `nameLevel`, `ValueAsses`) VALUES ('$model->nameLevel', '$model->value')";

		$id1= parent::insert($sentence);
		$this->idLevel=$id1;
		$this->nameLevel= $model->nameLevel;
		$this->value=$model->value;


	    

	}

	public function updatelevel(LevelModel $model){

		$sentence= "UPDATE `leveluser` SET `nameLevel`= '$model->nameLevel',`ValueAsses`='$model->value' WHERE idLevel = $model->idLevel";

		parent::insert($sentence);

    }

    public function getById($id1){

        try {
	        
	        $query =parent::prepare("SELECT * FROM leveluser where idLevel ='$id1'");
	        $query->execute();

		   $res= $query->fetchAll();

		  
		   
		   foreach($res as $x){

            
            $this->idlevel= $x[0];
            $this->nameLevel=$x[1];
            $this->pass=$x[2];
            
            

		   }

		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }

    }
    



	 public function deletelevel($id1){
		 $sentence="DELETE FROM `leveluser` WHERE idlevel=$id1";
		 parent::insert($sentence);
	 }
	
	

   

	public function getAlllevel() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM level");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arraylevel= array();
		   
		   foreach($res as $x){

            $model = new levelModel();
            $model->idlevel= $x[0];
            $model->nameLevel=$x[1];
            $model->pass=$x[2];
            
            $arraylevel[]=$model;

		   }

		   return $arraylevel;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}


}


?>