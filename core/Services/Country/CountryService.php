<?php

class CountryService{
  
    private $modelCountry;

    public function __construct(){

        $this->modelCountry = new CountryModel();
       

    }

    public function insert( $countryString){
        $this->modelCountry->insertcountry($countryString);

    }


    public function deleteCountry($idCountry){

        $this->modelCountry->deletecountry($idCountry);

    }

    public function updateCountry(CountryModel $model){

        $this->modelCountry->updatecountry($model);        
     
    }
 
    public function getByID($id1){

        $this->modelCountry->getById($id1);
        return $this->modelCountry;
    }

    public function getAll(){

        return $this->modelCountry->getAllcountry();

        
    }

}

?>