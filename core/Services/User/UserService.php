<?php


class UserService{

    private $modelUser;
    

    public function __construct()
    {
        $this->modelUser = new UserModel();
        
    }

    public function getByToken($token){
       $this->modelUser->getUserByField("login.token", $token);
       return $this->modelUser;
    }

   

    public function getUserByLogin($idLog){

        $this->modelUser->getUserByField("idLogin", $idLog);

        $this->checkLevel($this->modelUser);

        return $this->modelUser;

    }    

    public function checkLevel(UserModel $model){

        $date1 = new DateTime();      
        $date2 = new DateTime($model->dataAdd);
        $diff = $date1->diff($date2);
        $month = $diff->y *12;
        $month =$month + $diff->m;



       if($model->numberAsses<25 || $month <6){

            $model->level=1;
            $model->updateUser($model);

       }else if($model->numberAsses<50 && $model->numberAsses>25 && $month>6 && $month < 24){

             $model->level=2;
             $model->updateUser($model);


       }else if($model->numberAsses>25 && $month>24){

             $model->level=3;
             $model->updateUser($model);


       }



    }

    public function getAll(){
      $array=$this->modelUser->getAllUsers();
      return $array;
    }

    public function getById($id1){
        
        $this->modelUser->getUserByField("idLogin", $id1);
       return $this->modelUser;

    }

    public function delete($id1){

        $this->modelUser->deleteUser($id1);

    }

    public function update(UserModel $model){
        $model->updateUser($model);
    }

    public function insert(UserModel $model){
       
        $model->insertUser($model);
        return $model;

    }




}


?>