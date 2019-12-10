import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: any[] = [];

  constructor(private servicePro: ProductsService, private router: Router) {

    this.servicePro.getProducts().subscribe((data: any) => {
    console.log(data);

    this.productos = data;

   });

   }

  ngOnInit() {
  }

  singleProduct(id: string) {

    this.router.navigate(['singleProduct', id]);

    console.log('single product' + id);
  }

}
