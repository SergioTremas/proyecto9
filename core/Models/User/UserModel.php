<?php
 require_once(DATA_BASE);


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
		
		$dateToday= date('Y-m-d');

		$sentence ="INSERT INTO `user`( `name`, `surname`, `email`, `idCountry`, `idCity`, `numberAsses`, `dataAdmission`, `idRol`, `idLogin`, `idLevel`) VALUES ('$modelUser->names','$modelUser->surname','$modelUser->email','$modelUser->country','$modelUser->city','$modelUser->numberAsses','$dateToday','$modelUser->rol','$modelUser->login','$modelUser->level')";

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


		 $sentence0="UPDATE `assesment` SET `idUser`=0 WHERE idUser=$id1";
		 $sentence1="DELETE FROM `user` WHERE idUser=$id1";
		 
		 parent::insert($sentence0);
		 parent::insert($sentence1);
	 }
	

	 public function getSumLevels($id1){

        $sentence="	 SELECT sum(leveluser.ValueAsses) FROM user INNER JOIN assesment on user.idUser=assesment.idUser INNER JOIN leveluser on user.idLevel=leveluser.idLevel where assesment.idProduct=$id1";

        try {
	        
	        $query =parent::prepare($sentence);
	        $query->execute();

		   $res= $query->fetchAll();		 

		   return $res[0][0];

	    } catch (\PDOException $e) {
	        print "Error!: " . $e->getMessage();
	    }


    }

	

	public function getUserByField(string $column, string $field  ){

		try {
		 
		 $query =parent::prepare("SELECT * FROM user INNER join country on user.idCountry= country.idCountry INNER JOIN city on user.idCity = city.idCity INNER JOIN login on user.idLogin=login.idLogin where $column='$field'");
		 $query->execute();

		$res= $query->fetchAll();

			$arrayUser= array();
		
		foreach($res as $x){

			$model = new UserModel;

			 
			 $model->idUser= $x[0];
			 $model->names=$x[1];
			 $model->surname=$x[2];
			 $model->email=$x[3];
			 $model->idCountry=$x[4];
			 $model->idCity=$x[5];
			 $model->country=$x[12];
			 $model->city=$x[14];
			 $model->numberAsses=$x[6];
			 $model->dataAdd=$x[7];			
			 $model->rol=$x[8];
			 $model->login=$x[9];
			 $model->level=$x[10];
			 
			$arrayUser[]=$model;
			 

		}

		if(count($arrayUser)>1){
			return $arrayUser;
		}else if(count($arrayUser) ==1){

			$this->idUser=$model->idUser= $x[0];
			$this->names=$model->names=$x[1];
			$this->surname=$model->surname=$x[2];
			$this->email=$model->email=$x[3];
			$this->idCountry=$model->idCountry=$x[4];
			$this->idCity=$model->idCity=$x[5];
			$this->country=$model->country=$x[12];
			$this->city=$model->city=$x[14];
			$this->numberAsses=$model->numberAsses=$x[6];
			$this->dataAdd=$model->dataAdd=$x[7];			
			$this->rol=$model->rol=$x[8];
			$this->login=$model->login=$x[9];
			$this->level=$model->level=$x[10];
			
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