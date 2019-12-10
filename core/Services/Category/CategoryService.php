<?php



class CategoryService{

  
   
    private $modelCategory;

    public function __construct(){

        $this->modelCategory = new CategoryModel();
       

    }

    public function insertCat(CategoryModel $model){

      return  $this->modelCategory->insertCategory($model);

    }


    public function deleteCategory($idCategory){

        $this->modelCategory->deleteCategory($idCategory);

    }

    public function updateCategory(CategoryModel $model){

        $this->modelCategory->updateCategory($model);        
     
    }
 
    public function getByID($id1){

        $this->modelCategory->getById($id1);
        return $this->modelCategory;
    }
    public function getAllCat(){

        return $this->modelCategory->getAllCategory();

        
    }

    public function getByFather($idFather){
        return $this->modelCategory->getByCategoryFhater($idFather);
    }



  


}


?>