import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Valuation } from '../models/valuation';
import { Url } from '../models/urlfather';


@Injectable({
  providedIn: 'root'
})
export class ValuationsService {

  urlC:Url;

  constructor(private http: HttpClient) {
    this.urlC= new Url();
  }



  getByProduct(objeto: string) {

   return this.http.post(this.urlC.urlCommon +'AssesController.php', objeto);

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

    return this.http.post(this.urlC.urlCommon + 'AssesController.php', JSON.stringify(objeto));

   }

  introValuation(objeto: string) {

    return this.http.post(this.urlC.urlCommon + 'AssesController.php', objeto);

  }

  upDateValue(objeto: string) {

    return this.http.post(this.urlC.urlCommon +'AssesController.php', objeto);

  }

  getByProductUser(objeto: Valuation){

    objeto.action='getByIdProIdUser';

    return this.http.post(this.urlC.urlCommon + 'AssesController.php', objeto);

  }

  countValue(id: string){

    let objeto = new Valuation();
    objeto.asses="";
    objeto.assesfirst="";
    objeto.idUser="";
    objeto.nameProduct="";
    objeto.nameUser="";
    objeto.opinion="";
    objeto.idProduct=id;
    objeto.action= "countAsses";

    return this.http.post(this.urlC.urlCommon + 'AssesController.php', JSON.stringify(objeto));


  }

  deleteByUser(idUser: string, idProduct: string) {

    let objeto = new Valuation();
    objeto.asses="";
    objeto.assesfirst="";
    objeto.idUser=idUser;
    objeto.nameProduct="";
    objeto.nameUser="";
    objeto.opinion="";
    objeto.idProduct=idProduct;
    objeto.action="delete";

   return this.http.post(this.urlC.urlCommon + 'AssesController.php',JSON.stringify(objeto));
  }

  getAll(){
    let objeto = new Valuation();
    objeto.asses="";
    objeto.assesfirst="";
    objeto.idUser="";
    objeto.nameProduct="";
    objeto.nameUser="";
    objeto.opinion="";
    objeto.idProduct="";
    objeto.action="getAll";

    return this.http.post(this.urlC.urlCommon + 'AssesController.php',JSON.stringify(objeto));
  }

}
