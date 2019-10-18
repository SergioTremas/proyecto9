<?php

//require_once(LOGIN_MODEL);
//require_once(USER_MODEL);

class LoginService{

  

    //Devuelve un objeto vacio si no esta en la BDD o el objeto login correspondiente
    public function checkLogin(LoginModel $login){

       $login->checkLogin($login->email, $login->pass);
         
       return $login;

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

        $this->deleteLogin($id1);

    }

  
 

}


?>