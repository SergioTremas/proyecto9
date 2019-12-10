<?php



class AssesService{

  
    private $asses;
    private $modelUser;

    public function __construct(){

        $this->asses = new AssesModel();
        $this->modelUser= new UserModel();
        $this->userService= new UserService();

    }

    public function insert($idUser, $idProduct, $asses, $opinion){

        $assesf=$asses;

        $this->modelUser->getUserByField("IdUser", $idUser);

       if($this->modelUser->level==2){

            $asses= $asses *2;

        }else if($this->modelUser->level==3 ){

            $asses= $asses *3;
        }

        $this->asses->idProduct=$idProduct;
        $this->asses->idUser=$idUser;
        $this->asses->asses=$asses;
        $this->asses->opinion=$opinion;
        $this->asses->assesfirst=$assesf;

        $this->asses->insertAsses($this->asses);

        $this->userService->checkLevel($this->modelUser);

        return $this->asses;

    }

    public function deleteAsses(AssesModel $model){

        $this->asses->deleteAsses($model);

    }

    public function updateAsses(AssesModel $model){

        $this->asses->updateAsses($model);        
     
    }
 
    public function getByUser($id1){

        return $this->asses->getByUser($id1);
              
    }

    public function getByProduct($idProduct){
       return $this->asses->getByProduct($idProduct);
    }

    public function getByIdProIdUser($model){
        return $this->asses->getByIdProIdUser($model);
    }

    public function getAllAsses() {
        return $this->asses->getAllAsses();
    }
  


}


?>