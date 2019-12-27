import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Url } from '../models/urlfather';
import { CCAA } from '../models/ccaa';


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


getCCAA(){

  const category = new CCAA();

  category.action = 'getAll';
  category.idCategory = '';
  category.nameCCAA = '';

  return this.http.post(this.urlC.urlCommon + 'CategoryFatherController.php', JSON.stringify(category));



}

getCategories() {



  let category = new Category();

  category.action="getAll";
  category.idCategory="";
  category.idCategoryFather="";
  category.nameCategory="";
  return this.http.post(this.url, JSON.stringify(category));
}

insert(cat: Category){

  return this.http.post(this.url, JSON.stringify(cat));

}

delteCat(id) {

  const category = new Category();
  category.action = 'delete';
  category.idCategory = id;
  category.nameCategory = "";
  category.idCategoryFather = "";

  return this.http.post(this.url, JSON.stringify(category));

}

updateCategory(idCat, idCatFather) {

  const category = new Category();
  category.action = 'update';
  category.idCategory = idCat;
  category.nameCategory = "";
  category.idCategoryFather = idCatFather;

  return this.http.post(this.url, JSON.stringify(category));

}

}
