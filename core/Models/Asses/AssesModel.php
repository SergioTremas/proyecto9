<?php
 require_once(DATA_BASE);

class AssesModel extends DataBase{


    public function __construct() {
	    parent::__construct();
	}

    
    public $idProduct;
    public $nameProduct;
    public $idUser;
    public $nameUser;
    public $asses;
    public $opinion;
    public $assesfirst;
    public $date;
    public $photo;

    

	public function insertAsses(AssesModel $model){

		try {
	        
	        $query =parent::prepare("SELECT * FROM `assesment` WHERE `idUser`= $model->idUser and `idProduct`=$model->idProduct;");
	        $query->execute();

		   $res= $query->fetchAll();		  
		   	  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
        if (!$res>0) {

            $dateToday= date('Y-m-d');

            $sentence ="INSERT INTO `assesment`(`idUser`, `idProduct`, `asses`, `opinion`, `assesfirst`, `date`) VALUES
            ($model->idUser,$model->idProduct, $model->asses, '$model->opinion', '$model->assesfirst', '$dateToday')";

            parent::insert($sentence);
            $this->getByIdProIdUser($model);
                                            
        }	    

    }
    
    public function assesCount($idProduct){
        $sentence="SELECT COUNT(opinion) from assesment where idProduct='$idProduct'";

        try {
	        
	        $query =parent::prepare($sentence);
	        $query->execute();

           $res= $query->fetchAll();
          		   
		   foreach($res as $x){
                
            $count=$x[0]; 
           
		   }		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
        return $count;

        
    }

	public function updateAsses(AssesModel $model){

		$sentence= "UPDATE `Assesment` SET `asses`=$model->asses,`opinion`='$model->opinion', `assesfirst`=$model->assesfirst
        WHERE `idUser`=$model->idUser and`idProduct`=$model->idProduct ";

		parent::insert($sentence);

    }

    public function getByIdProIdUser($model){

        try {
	        
	        $query =parent::prepare("SELECT  assesment.idProduct, product.nameProduct, 
            assesment.idUser, user.name, assesment.asses, assesment.opinion, assesment.assesfirst, assesment.date, product.photo FROM `assesment` INNER JOIN user on 
            assesment.idUser=user.idUser INNER JOIN product ON assesment.idProduct=product.idProduct
             where assesment.idProduct= $model->idProduct and assesment.idUser=$model->idUser");
	        $query->execute();

           $res= $query->fetchAll();
           
           $model= new AssesModel();
          		   
		   foreach($res as $x){
                
            $model->idProduct=$x[0];
            $model->nameProduct=$x[1];
            $model->idUser=$x[2];
            $model->nameUser=$x[3];
            $model->asses=$x[4];
            $model->opinion=$x[5];
            $model->assesfirst=$x[6];
            $model->date=$x[7];
            $model->photo=$x[8];
            
           
		   }		  

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
        }
        
        return $model;

    }


	 public function deleteAsses($model){

        $sentence= "DELETE FROM `assesment` WHERE idProduct= $model->idProduct and idUser=$model->idUser";
        parent::insert($sentence);     

        
	 }
	
	

   

	public function getAllAsses() {

        $sentence="SELECT  assesment.idProduct, product.nameProduct, 
        assesment.idUser, user.name, assesment.asses, assesment.opinion, assesment.assesfirst, assesment.date, product.photo  FROM `assesment` INNER JOIN user on 
        assesment.idUser=user.idUser INNER JOIN product ON assesment.idProduct=product.idProduct ORDER BY `date` DESC";

        return $this->getBy($sentence);

    }

    public function getByProduct($idProduct){

        $sentence="SELECT  assesment.idProduct, product.nameProduct, 
        assesment.idUser, user.name, assesment.asses, assesment.opinion, assesment.assesfirst, assesment.date, product.photo  FROM `assesment` INNER JOIN user on 
        assesment.idUser=user.idUser INNER JOIN product ON assesment.idProduct=product.idProduct
         where assesment.idProduct=$idProduct";

        return $this->getBy($sentence);
    }

    public function getByUser($idUser){

        $sentence="SELECT  assesment.idProduct, product.nameProduct, 
        assesment.idUser, user.name, assesment.asses, assesment.opinion, assesment.assesfirst, assesment.date, product.photo FROM `assesment` INNER JOIN user on 
        assesment.idUser=user.idUser INNER JOIN product ON assesment.idProduct=product.idProduct
         where assesment.idUser=$idUser";
        return $this->getBy($sentence);

    }
    
    private function getBy($sentence){
        try {
	        
	        $query =parent::prepare($sentence);
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayAsses= array();
		   
		   foreach($res as $x){

            $model1 = new AssesModel();
                  
            $model1->idProduct=$x[0];
            $model1->nameProduct=$x[1];
            $model1->idUser=$x[2];
            $model1->nameUser=$x[3];
            $model1->asses=$x[4];
            $model1->opinion=$x[5];
            $model1->assesfirst=$x[6];
            $model1->date=$x[7];
            $model1->photo=$x[8];

           
            
            $arrayAsses[]=$model1;

		   }

		   return $arrayAsses;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
    }


}


?>