import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost/proyecto9/core/Controllers/CategoryController.php';

  constructor(private http: HttpClient) { }

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
