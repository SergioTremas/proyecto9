import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Country } from '../../models/country';
import { User } from '../../models/user';
import { Login } from '../../models/login';
import { UserService } from 'src/app/services/user.service';
import {AutoCompleteModule} from 'primeng/autocomplete';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('boton') boton: ElementRef;
  @ViewChild('aviso') aviso: ElementRef;

  @ViewChild('pass1') pass1: ElementRef;
  @ViewChild('pass2') pass2: ElementRef;
  @ViewChild('avisoPass') avisoPass: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('surname') surname: ElementRef;
  @ViewChild('country') country: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('ok') ok: ElementRef;




  constructor(private render: Renderer2, private service: LoginService, private userService: UserService) {

   }

  ngOnInit() {
    this.repeatPass();
  }



repeatPass(){
  if(this.pass1.nativeElement.value===this.pass2.nativeElement.value){
    console.log("pass ok");
    this.render.removeClass(this.boton.nativeElement, 'hidden');
    this.render.addClass(this.avisoPass.nativeElement, 'hidden');
    this.render.removeClass(this.pass2.nativeElement, 'alert-danger');




  }else{
    console.log("pass MAL");
console.log(this.pass2);
    this.render.addClass(this.boton.nativeElement, 'hidden');
    this.render.removeClass(this.avisoPass.nativeElement, 'hidden');
    this.render.addClass(this.pass2.nativeElement, 'alert-danger');



  }
}





  checkEmailForLetter(letter: string) {

    console.log(letter);

this.service.checkEmailForLetter(letter).subscribe((data:Boolean)=>{

if(data){
  console.log("email existe ");
  this.render.addClass(this.email.nativeElement, 'alert-danger');
  this.render.addClass(this.boton.nativeElement, 'hidden');
  this.render.removeClass(this.aviso.nativeElement, 'hidden');



}else{
  console.log("email no existe");
  this.render.removeClass(this.email.nativeElement, 'alert-danger');
  this.render.removeClass(this.boton.nativeElement, 'hidden');
  this.render.addClass(this.aviso.nativeElement, 'hidden');

}

});

  }

  insert(){

    let user= new User();
    let login= new Login();

    user.email = this.email.nativeElement.value;
    login.pass = this.pass1.nativeElement.value;
    login.email = this.email.nativeElement.value;

    user.names = this.name.nativeElement.value;

    user.surname = this.surname.nativeElement.value;
    user.country = this.country.nativeElement.value;
    user.city = this.city.nativeElement.value;

    this.service.insert(login).subscribe((data: any)=>{

        user.login = data;

        console.log(data);
        user.login = data;
        this.userService.insert(user).subscribe();


    });


  }

}
