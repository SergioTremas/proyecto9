<?php

 //defined('BASEPATH') or exit('No se permite acceso directo');


class UserModel extends DataBase {
  
	public function __construct() {
	    parent::__construct();
	}

	public $idUser;
	public $names;
	public $surname;
	public $email;
	public $idCountry;
	public $country;
	public $idCity;
    public $city;
    public $numberAsses;
	public $dataAdd;	
	public $rol;	
	public $login;	
	public $level;
	



	public function insertUser(UserModel $modelUser){


		$sentence ="INSERT INTO `user`( `name`, `surname`, `email`, `idCountry`, `idCity`, `numberAsses`, `dataAdmission`, `idRol`, `idLogin`, `idLevel`) VALUES ('$modelUser->names','$modelUser->surname','$modelUser->email',$modelUser->country,
		$modelUser->city,$modelUser->numberAsses,'$modelUser->dataAdd',$modelUser->rol,$modelUser->login,$modelUser->level)";

		$id1= parent::insert($sentence);
		$id1=intval($id1);
		
		$this->idUser=$id1;
		$this->names=$modelUser->names;
		$this->surname=$modelUser->surname;
		$this->email=$modelUser->email;
		$this->idCountry=$modelUser->idCountry;
		$this->country=$modelUser->country;
		$this->idCity=$modelUser->idCity;
		$this->city=$modelUser->city;
		$this->numberAsses=$modelUser->numberAsses;
		$this->dataAdd=$modelUser->dataAdd;	
		$this->rol=$modelUser->rol;	
		$this->login=$modelUser->login;	
		$this->level=$modelUser->level;

	}

	public function updateUser(UserModel $model){

		$sentence=
		"UPDATE `user` SET `name`= '$model->names',`surname`='$model->surname',
		`email`='$model->email',`idCountry`=$model->idCountry,`idCity`=$model->idCity,
		`numberAsses`=$model->numberAsses,`dataAdmission`='$model->dataAdd',`idRol`=$model->rol,
		`idLogin`=$model->login,`idLevel`=$model->level WHERE idUser=$model->idUser";

		parent::insert($sentence);

	}

	 public function deleteUser($id1){
		 $sentence="DELETE FROM `user` WHERE idUser=$id1";
		 parent::insert($sentence);
	 }
	
	

	public function getUserByField(string $column, int $field  ){

		try {
		 
		 $query =parent::prepare("SELECT * FROM user INNER join country on user.idCountry= country.idCountry INNER JOIN city on user.idCity = city.idCity where $column= '$field'");
		 $query->execute();

		$res= $query->fetchAll();

		
		
		foreach($res as $x){

			 
			 $this->idUser= $x[0];
			 $this->names=$x[1];
			 $this->surname=$x[2];
			 $this->email=$x[3];
			 $this->idCountry=$x[4];
			 $this->idCity=$x[5];
			 $this->country=$x[12];
			 $this->city=$x[14];
			 $this->numberAsses=$x[6];
			 $this->dataAdd=$x[7];			
			 $this->rol=$x[8];
			 $this->login=$x[9];
			 $this->level=$x[10];
			 

			 

		}

		

	 } catch (\PDOException $e) {
		 print "Error!: " . $e->getMessage();
	 }


 }

	public function getAllUsers() {

	    try {
	        
	        $query =parent::prepare("SELECT * FROM user INNER join country on user.idCountry= country.idCountry INNER JOIN city on user.idCity = city.idCity");
	        $query->execute();

		   $res= $query->fetchAll();

		   $arrayUser= array();
		   
		   foreach($res as $x){

				$model = new UserModel();
				$model->idUser= $x[0];
				$model->names=$x[1];
				$model->surname=$x[2];
				$model->email=$x[3];
				$model->country=$x[12];
				$model->city=$x[14];
				$model->numberAsses=$x[6];
				$model->dataAdd=$x[7];
				$model->rol=$x[8];
				$model->login=$x[9];
				$model->level=$x[10];
				

				$arrayUser[]=$model;

		   }

		   return $arrayUser;

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }
	}

}