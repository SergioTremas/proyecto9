import { Component, OnInit, Input } from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
import { Valuation1 } from '../../models/valuation1';



@Component({
  selector: 'app-valuations',
  templateUrl: './valuations.component.html',
  styleUrls: ['./valuations.component.css']
})
export class ValuationsComponent implements OnInit {

  private valuation: Valuation1;
  public valuationsUser: any[] = [];

  @Input() id: any;
  @Input() idUser: any;

  valuations: any[] = [];

  constructor(private serviceValuations: ValuationsService) {

    this.valuation = new Valuation1();

  }

  ngOnInit() {

    console.log("dentro valuaton ", this.idUser);

    this.getById(this.id);

    this.getByUser(this.idUser);


   // console.log("hola");

  }

  getByUser(idv){

    if(idv){

    this.valuation.action="getByUser";
    this.valuation.idProduct="";
    this.valuation.nameProduct="";
    this.valuation.idUser=idv;
    this.valuation.nameUser="";
    this.valuation.asses="";
    this.valuation.opinion="";
    this.valuation.assesfirst= 0;





      //valuacion.accion="getByProduct";
     //valuacion.idProduct=idv;
    // console.log(valuation);


  this.serviceValuations.getByProduct(JSON.stringify(this.valuation)).subscribe((data:any)=>{

      console.log(data);
      this.valuationsUser = data;

  });

    }
  }







  getById(idv){

    this.valuation.action="getByProduct";
    this.valuation.idProduct=idv;
    this.valuation.nameProduct="";
    this.valuation.idUser="";
    this.valuation.nameUser="";
    this.valuation.asses="";
    this.valuation.opinion="";
    this.valuation.assesfirst=0;

    this.serviceValuations.getByProduct(JSON.stringify(this.valuation)).subscribe((data:any)=>{

console.log(data);
      this.valuations = data;

  });
  }




}
