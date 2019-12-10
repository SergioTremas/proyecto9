import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { AuthGuard } from '../../guard/auth.guard';
import { CanActivate } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   login: Login;


  constructor(private service: LoginService, private auth: AuthGuard) {

    console.log(this.getCookie());
    this.login = new Login();
  }

  ngOnInit() {
  }



  checkLogin(form: NgForm) {

   this.login.action = 'check';
   this.login.token = '';

   if (form.invalid) {return; }

   this.service.checklogin(JSON.stringify(this.login)).subscribe((data: Login) => {

    this.generarCookie(data);


   });

  }

  generarCookieIDUser(valor){

    this.service.setCookie('iduser', valor);

  }

  generarCookie(valor){

    this.service.setCookie('tokenLogin', valor);

  }

  getCookie() {
   return this.service.getCookie('tokenLogin');
  }


  checkToken(){

   return this.service.checktokenExist();


  }





}
