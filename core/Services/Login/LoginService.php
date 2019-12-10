<?php



class LoginService{

  
    private $login;

    public function __construct(){

        $this->login = new LoginModel();

    }
  

    //Devuelve un usuario vacio si no esta en la BDD o el objeto usuario correspondiente
    public function checkLogin(LoginModel $login){


       $login->checkLogin($login->email, $login->pass);    
           
   
           return $login->token;
       

    }

  
    //Si al ingresar un login devuelve objeto vacio si el email existe, y un objeto login si se guarda correctamente
    public function insertLogin(LoginModel $login){

        if($login->getByEmail($login->email)){

            $login = new LoginModel();                     
            return $login;
            
        }else{
          $login->insertLogin($login);
          return $login;
            
        }

    }

    public function deleteLogin($id1){

        $this->login->deleteLogin($id1);

    }

    public function deleteToken($token){
        $this->login->deleteToken($token);
    }

    public function updateLogin(LoginModel $model){


        if($model->getByEmail($model->email)){

            $model = new LoginModel();                     
            return $model;
            
        }else{
          $model->updateLogin($model);
          return $model;
            
        }
    }

  
 

}


?>