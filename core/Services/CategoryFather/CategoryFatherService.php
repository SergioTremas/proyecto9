<?php



class CategoryFatherService{

  
   
    private $modelCategoryFather;

    public function __construct(){

        $this->modelCategoryFather = new CategoryFatherModel();
       

    }


    public function deleteCategory($idCategory){

        $this->modelCategoryFather->deleteCategory($idCategory);

    }

    public function updateCategory(CategoryFatherModel $model){

        $this->modelCategoryFather->updateCategory($model);        
     
    }
 
    public function getByID($id1){

        $this->modelCategoryFather->getById($id1);
        return $this->modelCategoryFather;
    }
    public function getAllCat(){

        return $this->modelCategoryFather->getAllCategory();

        
    }

    public function getByFather($idFather){
        return $this->modelCategoryFather->getByCategoryFhater($idFather);
    }



  


}


?>