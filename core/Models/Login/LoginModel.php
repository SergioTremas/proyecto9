<?php

 //defined('BASEPATH') or exit('No se permite acceso directo');
 require_once(DATA_BASE);


class LoginModel extends DataBase {
  
	public function __construct() {
	    parent::__construct();
	}

    public $idLogin;
    public $email;
    public $pass;



	public function insertLogin(LoginModel $model){


		$sentence ="INSERT INTO `login`( `email`, `password`) VALUES ('$model->email', '$model->pass')";

		$id1= parent::insert($sentence);
       
         $this->idLogin=$id1;
         $this->email=$model->email;
         $this->pass=$model->pass;

	    return	$id1;

	}

	public function updateLogin(LoginModel $model){

		$sentence="UPDATE `login` SET `email`= '$model->email',`password`='$model->pass' WHERE idLogin=$model->idLogin";

		parent::insert($sentence);

    }
    



	 public function deleteLogin($id1){
		 $sentence="DELETE FROM `login` WHERE idLogin=$id1";
		 parent::insert($sentence);
	 }
	
	

	public function checkLogin($email, $pass){

		try {
		 
		 $query =parent::prepare("SELECT * FROM login where  email= '$email' && password= '$pass'");
		 $query->execute();

	     $res= $query->fetchAll();

		 $arrayLogin= array();
		
		foreach($res as $x){

			 $model = new LoginModel();
			 $model->idLogin= $x[0];
			 $model->email=$x[1];
             $model->pass=$x[2];
             
			 $arrayLogin[]=$model;

        }
        if(count($arrayLogin)>0){
            
            $this->idLogin=$arrayLogin[0]->idLogin;
            $this->email=$arrayLogin[0]->email;
            $this->pass=$arrayLogin[0]->pass;
            
           

        }else{
            
            $this->idLogin=0;
            $this->email=0;
            $this->pass=0;
        }


	 } catch (\PDOException $e) {
		 print "Error!: " . $e->getMessage();
	 }


    }
    public function getByEmail(string $email) {

	    try {
	        
           $query =parent::prepare("SELECT * FROM login where email = '$email'");
           
	       $query->execute();

           $res= $query->fetchAll();
           
            if(count($res)>0){
                return true;
            }else{
                return false;
            }

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}

	public function getAllLogin() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM login");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayLogin= array();
		   
		   foreach($res as $x){

            $model = new LoginModel();
            $model->idLogin= $x[0];
            $model->email=$x[1];
            $model->pass=$x[2];
            
            $arrayLogin[]=$model;

		   }

		   return $arrayLogin;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}

}