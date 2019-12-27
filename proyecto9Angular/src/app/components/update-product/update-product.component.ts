import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { CCAA } from '../../models/ccaa';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Products;
  categories: Category[];
  CCAA: CCAA[];


  @ViewChild('name') name: ElementRef;
  @ViewChild('des') description: ElementRef;
  @ViewChild('category') category: ElementRef;
  @ViewChild('ccaa') ccaa: ElementRef;
  //@ViewChild('photo') photo: ElementRef;



  constructor(private categoryservice: CategoryService, private productservice: ProductsService,private router: ActivatedRoute) {

    this.product = new Products();

    this.router.params.subscribe((data) => {

    this.productservice.getById(data['id']).subscribe(( data: Products) => {

      this.product = data;

      this.description.nativeElement.value = this.product.description;
      this.name.nativeElement.value = this.product.nameProduct;
      this.category.nativeElement.value = this.product.nameCategory;


    });

  });



  this.categoryservice.getCategories().subscribe((data: Category[]) => {

    this.categories = data;

  });

  this.categoryservice.getCCAA().subscribe((data: CCAA[]) => {

    this.CCAA = data;

  });



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
