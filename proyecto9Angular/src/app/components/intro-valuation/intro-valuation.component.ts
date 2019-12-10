import { Component, OnInit, Input } from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
import { Valuation } from '../../models/valuation';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-intro-valuation',
  templateUrl: './intro-valuation.component.html',
  styleUrls: ['./intro-valuation.component.css']
})
export class IntroValuationComponent implements OnInit {

  @Input() id: any;

  public valuation: Valuation;

  constructor( private service: ValuationsService, private user:UserService, private login:LoginService) {



   }


  insertValuations(){

    let objeto = {

      asses: "5",
      idProduct: "1",
      idUser: "3",
      opinion: "mola mucho",
      action: "insert"

    }

  this.service.introValuation(JSON.stringify(objeto)).subscribe((data:any)=>{


    console.log(data);


  });



  }

 ngOnInit() {

  this.valuation = new Valuation();

    this.valuation.idProduct=this.id;

    this.valuation.idUser=this.login.getCookie('iduser');

    console.log(this.valuation);
  }


  imprimir(){
    console.log(this.valuation);
  }


}
