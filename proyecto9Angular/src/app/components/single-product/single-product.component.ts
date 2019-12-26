import { Component, OnInit, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ValuationsComponent } from '../valuations/valuations.component';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';
import { ValuationsService } from '../../services/valuations.service';
import { Valuation1 } from 'src/app/models/valuation1';



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {



  @Input() id;

  Product: any;

  newValue = true;

  numberValues: number;

  imgUrl = '../../../assets/imgProducts/aneto.jpg';

  constructor(private router: ActivatedRoute, private service: ProductsService, private login: LoginService, private valuationService: ValuationsService) {

    this.newValue = this.login.checkCookie('tokenLogin');

     }

  ngOnInit() {


    this.router.params.subscribe((params: any) => {

      this.valuationService.countValue(params['id']).subscribe((data: number) => {

        this.numberValues = data;

        console.log(this.numberValues);

      });

      this.service.getById(params['id']).subscribe((params:any)=>{


         this.Product = params;
         console.log(params);

      });

     });
  }



}
