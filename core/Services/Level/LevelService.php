<?php

class LevelService{
  
    private $modelLevel;

    public function __construct(){

        $this->modelLevel = new LevelModel();
       

    }

    public function insert(LevelModel $model){
        $this->modelLevel->insertLevel($model);

    }


    public function deleteLevel($idLevel){

        $this->modelLevel->deleteLevel($idLevel);

    }

    public function updateLevel(LevelModel $model){

        $this->modelLevel->updateLevel($model);        
     
    }
 
    public function getByID($id1){

        $this->modelLevel->getById($id1);
        return $this->modelLevel;
    }

    public function getAll(){

        return $this->modelLevel->getAllLevel();

        
    }

}

?>