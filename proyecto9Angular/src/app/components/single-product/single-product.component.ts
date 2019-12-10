import { Component, OnInit, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ValuationsComponent } from '../valuations/valuations.component';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() id;

  Product: any;

  newValue= true;

  constructor(private router: ActivatedRoute, private service: ProductsService, private login: LoginService) {

    this.newValue = this.login.checkCookie('tokenLogin');

     }

  ngOnInit() {


    this.router.params.subscribe((params: any) => {

      this.service.getById(params['id']).subscribe((params:any)=>{

         this.Product = params;
         console.log(params);

      });

     });
  }



}
