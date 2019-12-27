import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/category';
import { CCAA } from '../../models/ccaa';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  product: Products;
  categories: Category[];
  CCAA: CCAA[];

  @ViewChild('name') name: ElementRef;
  @ViewChild('des') description: ElementRef;
  @ViewChild('category') category: ElementRef;
  @ViewChild('ccaa') ccaa: ElementRef;
  //@ViewChild('photo') photo: ElementRef;

  phto2;


  constructor(private productservice: ProductsService, private categoryservice: CategoryService) {

    this.categoryservice.getCategories().subscribe((data: Category[]) => {

      this.categories = data;

    });

    this.categoryservice.getCCAA().subscribe((data: CCAA[]) => {

      this.CCAA = data;

    });

    this.product= new Products();

   }

  ngOnInit() {
  }

  insert(cat){
    console.log(cat);
    cat = {idCategory: "", nameCategory: cat, action: 'insert', idCategoryFather: ""}

    this.categoryservice.insert(cat).subscribe((data: Category) => {
      this.categories.push(data);
    });
  }


  delete(idCat, index) {
    this.categories.splice(index, 1);
    this.categoryservice.delteCat(idCat).subscribe();
  }

  inserProduct() {

    this.product.nameProduct = this.name.nativeElement.value;
   // this.product.photo = this.photo.nativeElement.value;
    this.product.idCategory = this.category.nativeElement.value;
    this.product.description = this.description.nativeElement.value;
    console.log(this.product, this.ccaa.nativeElement.value);

    this.categoryservice.updateCategory(this.product.idCategory, this.ccaa.nativeElement.value).subscribe();
    this.productservice.insert(this.product).subscribe();

  }

  getName(){
    console.log('hola');
  }

}
