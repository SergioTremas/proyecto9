import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Valuation } from '../models/valuation';


@Injectable({
  providedIn: 'root'
})
export class ValuationsService {

  constructor(private http: HttpClient) { }



  getByProduct(objeto:string) {

   return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto)

  }

  introValuation(objeto: string) {

    return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);

  }

  getByProductUser(objeto: Valuation){

    objeto.action='getByIdProIdUser';

    return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);

  }

}
