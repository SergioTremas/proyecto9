import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../models/urlfather';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: Url;
  url_servidor:string;

  constructor(private http: HttpClient) {
      let url = new Url();
      this.url_servidor = url.urlCommon + 'ImageController.php';

   }



  public postFileImagen(imagenParaSubir: FormData) {

    return this.http.post(this.url_servidor, imagenParaSubir);
    //JSON.stringify(product)

	}
}
