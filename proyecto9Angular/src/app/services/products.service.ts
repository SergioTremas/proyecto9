import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';



@Injectable({
  providedIn:'root'
})
export class ProductsService {




  constructor(private http: HttpClient) {

    console.log("servicio listo para usar");
   }

    getProducts() {

   return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=0&description=0&photo=0&category=0&CCAA=0&action=getAll');

  }

  getCategories() {

    // tslint:disable-next-line:max-line-length
    let url = 'http://localhost/proyecto9/core/Controllers/CategoryController.php';


       let category = new Category();

     category.action="getAll";
     category.idCategory="4";
     category.idCategoryFather="";
     category.nameCategory="";

    // return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=0&description=0&photo=0&category=0&CCAA=0&action=getCategory');

    return this.http.post(url, JSON.stringify(category));

     }


  getByLetter(letter :string){

    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name='+letter+'&description=0&photo=0&category=0&CCAA=0&action=letter');
  }

  getByLetterCat(letter: string, category: string){

    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name='+letter+'&description=0&photo=0&category='+category+'&CCAA=0&action=letterAndCat');


  }

  getbyCategory(category:string){
    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=0&description=0&photo=0&category='+ category +'&CCAA=0&action=getByCategory');

  }

  getById( id ){

    console.log("dentro servicio");

    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id='+ id +'&name=&description=0&photo=0&category=0&CCAA=0&action=getById');

  }

}
