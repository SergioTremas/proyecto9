import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getByLetter(letter :string){

    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name='+letter+'&description=0&photo=0&category=0&CCAA=0&action=letter');
  }





  getById( id ){

    console.log("dentro servicio");

    return  this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id='+ id +'&name=&description=0&photo=0&category=0&CCAA=0&action=getById');

  }






}
