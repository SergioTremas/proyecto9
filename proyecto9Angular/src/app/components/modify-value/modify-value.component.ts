import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valuation1 } from 'src/app/models/valuation1';
import { ValuationsService } from '../../services/valuations.service';

@Component({
  selector: 'app-modify-value',
  templateUrl: './modify-value.component.html',
  styleUrls: ['./modify-value.component.css']
})
export class ModifyValueComponent implements OnInit {

  idUser;
  idProduct;
  valuation: Valuation1;
  num= 0;



  constructor(private router: ActivatedRoute, private service : ValuationsService, private route: Router) {

    this.router.params.subscribe((params:any)=>{

      this.idUser= params['idUser'];
      this.idProduct=params['idProduct'];

    });

   }

  ngOnInit() {

this.service.getByUserProduct(this.idUser,this.idProduct).subscribe((data:Valuation1)=>{

    this.valuation=data;

});
  }


  insertStars(value: any, num: string) {


    if(num){

    let num1 = parseInt(num);

    this.num = this.num + num1;
  }

    if(this.num<2){


    this.valuation.assesfirst = value;

  }else{
    this.valuation.assesfirst='0';
    this.num=0;

  }


  }

  modify(){

    this.valuation.action = 'insert';
    this.valuation.asses = this.valuation.assesfirst;

    this.service.deleteByUser(this.idUser, this.idProduct).subscribe();
    this.service.introValuation(JSON.stringify(this.valuation)).subscribe();
    this.route.navigate(["/valuesUser", this.idUser]);
  }

}
