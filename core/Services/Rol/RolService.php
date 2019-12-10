<?php

class RolService{
  
    private $modelRol;

    public function __construct(){

        $this->modelRol = new RolModel();
       

    }

    public function insert($rolString){
        $this->modelRol->insertRol($rolString);

    }


    public function deleteRol($idRol){

        $this->modelRol->deleteRol($idRol);

    }

    public function updateRol(RolModel $model){

        $this->modelRol->updateRol($model);        
     
    }
 
    public function getByID($id1){

        $this->modelRol->getById($id1);
        return $this->modelRol;
    }

    public function getAll(){

        return $this->modelRol->getAllRol();

        
    }

}

?>