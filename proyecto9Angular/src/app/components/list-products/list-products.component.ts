import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

products: Products [] = [];


  constructor(private service: ProductsService, private render: Renderer2) {


    this.service.getProducts().subscribe((data: Products[])=>{

      console.log(data);
      this.products = data;

    });

   }

  ngOnInit() {
  }

  delete(product: Products ,index){

    this.products.splice(index, 1);
    this.service.delete(product).subscribe();


  }


}
