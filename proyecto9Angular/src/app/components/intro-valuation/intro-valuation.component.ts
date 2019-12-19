import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
import { Valuation } from '../../models/valuation';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { stringify } from 'querystring';
import { isNullOrUndefined } from 'util';
import { Valuation1 } from '../../models/valuation1';



@Component({
  selector: 'app-intro-valuation',
  templateUrl: './intro-valuation.component.html',
  styleUrls: ['./intro-valuation.component.css']
})
export class IntroValuationComponent implements OnInit {

  @Input() id: any;
  @ViewChild("star1") star1: ElementRef;
  @ViewChild("star2") star2: ElementRef;
  @ViewChild("star3") star3: ElementRef;
  @ViewChild("star4") star4: ElementRef;
  @ViewChild("star5") star5: ElementRef;
  @ViewChild("boton") boton: ElementRef;


  numb = 0;

  valuation: Valuation1;
  ValueDone: boolean;
  justDone = false;

  constructor( private service: ValuationsService, private user: UserService, private login: LoginService, private renderer: Renderer2) {


   }




  insertValuations(){

    let objeto = {

      asses: this.valuation.asses,
      idProduct: this.id,
      idUser: this.valuation.idUser,
      opinion: this.valuation.opinion,
      action: "insert"

    }

  this.service.introValuation(JSON.stringify(objeto)).subscribe((data:any)=>{


    console.log(data);


  });

  this.renderer.setAttribute(this.boton.nativeElement, "disabled", "true");
  this.justDone=true;



  }

 ngOnInit() {



  this.valuation = new Valuation1();

    this.valuation.idProduct=this.id;

    this.valuation.idUser=this.login.getCookie('iduser');

    console.log(this.valuation);


  this.service.getByUserProduct(this.valuation.idUser, this.valuation.idProduct).subscribe((data: Valuation) => {


    if (isNullOrUndefined(data.nameProduct) ) {
        this.ValueDone = true;

      }else{
        this.ValueDone = false;
      }

    });
  }

  insertStars(value: any, num: string) {

    this.valuation.asses = value;

    console.log(this.valuation.asses, num);

      this.renderer.removeClass(this.star1.nativeElement, "active");
      this.renderer.removeClass(this.star2.nativeElement, "active");
      this.renderer.removeClass(this.star3.nativeElement, "active");
      this.renderer.removeClass(this.star4.nativeElement, "active");
      this.renderer.removeClass(this.star5.nativeElement, "active");

    if(num){
     let num1=parseInt(num);

     console.log(num1, this.numb);


      this.numb=this.numb+num1;
      console.log(this.numb);}

    if(this.valuation.asses =='1')
    { this.renderer.addClass(this.star1.nativeElement, "active");

    this.valuation.asses='1';


    if(this.numb===2){
      this.renderer.removeClass(this.star1.nativeElement, "active");
      this.renderer.removeClass(this.star2.nativeElement, "active");
      this.renderer.removeClass(this.star3.nativeElement, "active");
      this.renderer.removeClass(this.star4.nativeElement, "active");
      this.renderer.removeClass(this.star5.nativeElement, "active");

      this.numb=0;
      this.valuation.asses='0';
    }

      }else if(this.valuation.asses =='2')
       {
        this.valuation.asses='2';

        this.renderer.addClass(this.star1.nativeElement, "active");
        this.renderer.addClass(this.star2.nativeElement, "active");

      }else if(this.valuation.asses =='3')
     {
      this.valuation.asses='3';

        this.renderer.addClass(this.star1.nativeElement, "active");
        this.renderer.addClass(this.star2.nativeElement, "active");
        this.renderer.addClass(this.star3.nativeElement, "active");

     }else if(this.valuation.asses =='4')
       {
        this.valuation.asses='4';

      this.renderer.addClass(this.star1.nativeElement, "active");
      this.renderer.addClass(this.star2.nativeElement, "active");
      this.renderer.addClass(this.star3.nativeElement, "active");
      this.renderer.addClass(this.star4.nativeElement, "active");

   }else if(this.valuation.asses =='5')
     {
      this.valuation.asses='5';

      this.renderer.addClass(this.star1.nativeElement, "active");
      this.renderer.addClass(this.star2.nativeElement, "active");
      this.renderer.addClass(this.star3.nativeElement, "active");
      this.renderer.addClass(this.star4.nativeElement, "active");
      this.renderer.addClass(this.star5.nativeElement, "active");

 }




  }

  imprimir(){
    console.log(this.valuation.asses);
  }


}
