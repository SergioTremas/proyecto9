import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Url } from '../models/urlfather';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string;
  urlC: Url;

  constructor(private http: HttpClient) {
    this.urlC = new Url();
    this.url = this.urlC.urlCommon + 'CategoryController.php';
  }




getCategories() {

  console.log("dentro getcategories");

  let category = new Category();

  category.action="getAll";
  category.idCategory="";
  category.idCategoryFather="";
  category.nameCategory="";
  return this.http.post(this.url, JSON.stringify(category));
}

}
