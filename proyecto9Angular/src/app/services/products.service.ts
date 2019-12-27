import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Url } from '../models/urlfather';
import { Products } from '../models/products';



@Injectable({
  providedIn:'root'
})
export class ProductsService {


urlC: Url;

  constructor(private http: HttpClient) {

    this.urlC= new Url();

    console.log("servicio listo para usar");
   }

    getProducts() {
      const objeto = new Products();
      objeto.action = 'getAll';

      return  this.http.post( this.urlC.urlCommon + 'ProductController.php', JSON.stringify(objeto));

  }

  getCategories() {

    // tslint:disable-next-line:max-line-length
    const url =  this.urlC.urlCommon + 'CategoryController.php';


    let category = new Category();

    category.action = 'getAll';
    category.idCategory = '';
    category.idCategoryFather = '';
    category.nameCategory = '';
    console.log(JSON.stringify(category));

    // return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=0&description=0&photo=0&category=0&CCAA=0&action=getCategory');

    return this.http.post(url, JSON.stringify(category));

     }


  getByLetter(letter: string) {


    let objeto = new Products();
    objeto.nameProduct=letter;
    objeto.action='letter';


    // tslint:disable-next-line:max-line-length
    return  this.http.post(this.urlC.urlCommon + 'ProductController.php', JSON.stringify(objeto));
  }

  getByLetterCat(letter: string, category: string){



    let objeto = new Products();
    objeto.action = 'letterAndCat';
    objeto.nameProduct= letter;
    objeto.idCategory=category;

    // tslint:disable-next-line:max-line-length
    return  this.http.post(this.urlC.urlCommon +'ProductController.php',JSON.stringify(objeto));


  }

  getbyCategory(category: string) {



    let objeto = new Products();
    objeto.action = 'getByCategory';
    objeto.idCategory = category;


    // tslint:disable-next-line:max-line-length
    return  this.http.post(this.urlC.urlCommon + 'ProductController.php',JSON.stringify(objeto));

  }

  getById( id ) {


    let objeto = new Products();
    objeto.action = 'getById';
    objeto.idProduct = id;


    // tslint:disable-next-line:max-line-length
    return  this.http.post(this.urlC.urlCommon + 'ProductController.php', JSON.stringify(objeto));

  }

  delete(product:Products){

    let url =  this.urlC.urlCommon + 'ProductController.php';

    product.action = "delete";

    return this.http.post( url , JSON.stringify(product));

  }

  insert(product: Products){

    product.action = "insert";

    return this.http.post(this.urlC.urlCommon + 'ProductController.php', JSON.stringify(product));
  }

}
