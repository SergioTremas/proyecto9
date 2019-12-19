import { Component, OnInit } from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
import { UserService } from '../../services/user.service';

import { Valuation1 } from 'src/app/models/valuation1';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-values-user',
  templateUrl: './values-user.component.html',
  styleUrls: ['./values-user.component.css']
})
export class ValuesUserComponent implements OnInit {


  idUser;
  valuation: Valuation1;
  valuations:Valuation1[]=[];

  constructor(private service: ValuationsService, private user: UserService, private router: ActivatedRoute, private route: Router) {

    this.router.params.subscribe((params:any) =>{

    this.idUser = params['idUser'];
      //console.log(params['leter']);

    this.getByUser(params['idUser']).subscribe((data:any)=>{

      console.log(data);
      this.valuations = data;
      console.log(this.valuations);

    });

    });

  }

  ngOnInit() {

  }

  getByUser(idUser:string){
    this.valuation= new Valuation1();
    this.valuation.action='getByUser';
    this.valuation.asses='';
    this.valuation.opinion='';
    this.valuation.idUser= idUser;
    this.valuation.idProduct='';

   return this.service.getByProduct(JSON.stringify(this.valuation));

  }

  modify(idProduct: string){

   this.route.navigate(["/modify", this.idUser, idProduct]);

  }

}
