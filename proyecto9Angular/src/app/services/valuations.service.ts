import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Valuation } from '../models/valuation';


@Injectable({
  providedIn: 'root'
})
export class ValuationsService {

  constructor(private http: HttpClient) { }



  getByProduct(objeto: string) {

   return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);

  }

  getByUserProduct(idUser: string, IdProduct: string) {


    let objeto = new Valuation();
    objeto.asses="";
    objeto.assesfirst="";
    objeto.idUser=idUser;
    objeto.nameProduct="";
    objeto.nameUser="";
    objeto.opinion="";
    objeto.idProduct=IdProduct;
    objeto.action="getByIdProIdUser";

    return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', JSON.stringify(objeto));

   }

  introValuation(objeto: string) {

    return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);

  }

  getByProductUser(objeto: Valuation){

    objeto.action='getByIdProIdUser';

    return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);

  }

  deleteByUser(idUser: string, idProduct: string){

    let objeto = new Valuation();
    objeto.asses="";
    objeto.assesfirst="";
    objeto.idUser=idUser;
    objeto.nameProduct="";
    objeto.nameUser="";
    objeto.opinion="";
    objeto.idProduct=idProduct;
    objeto.action="delete";

   return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php',JSON.stringify(objeto));
  }

}
