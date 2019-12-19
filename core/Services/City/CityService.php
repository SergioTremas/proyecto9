<?php



class CItyService{

  
   
    private $modelCIty;

    public function __construct(){

        $this->modelCIty = new CItyModel();
       

    }

    public function insert( $cityString){
      return  $this->modelCIty->insertCity($cityString);

    }


    public function deleteCIty($idCIty){

        $this->modelCIty->deleteCIty($idCIty);

    }

    public function updateCIty(CItyModel $model){

        $this->modelCIty->updateCIty($model);        
     
    }
 
    public function getByID($id1){

        $this->modelCIty->getById($id1);
        return $this->modelCIty;
    }

    public function getAll(){

        return $this->modelCIty->getAllCIty();

        
    }




  


}


?>