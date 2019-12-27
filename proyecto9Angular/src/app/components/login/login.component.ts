import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { AuthGuard } from '../../guard/auth.guard';
import { CanActivate, Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   login: Login;

   loginOk = false;
   loginType = true;
   errorAdmin = false;

   loginError = false;
   userM: User;


  constructor(private service: LoginService, private auth: AuthGuard, private router: Router, private user: UserService) {

    console.log(this.getCookie());
    this.login = new Login();

    this.user.getByToken().subscribe((data: User) => {

      console.log(data, 'dentro de login ok' );
      this.userM = data;

      if(this.userM.rol === '2') {
        this.service.setCookie('admin', 'ok');
        console.log("admin ok user ok ");
        this.errorAdmin=true;
        this.loginOk=true;


      }else{
        console.log("user ok ");

        this.errorAdmin=false;

      }

      this.loginOk = false;
      this.loginError = false;




    });
  }

  ngOnInit() {
  }

  checkLoginAdming(form: NgForm){

    this.login.action = 'check';
     this.login.token = '';

   if (form.invalid) {return; }

    this.service.checklogin(JSON.stringify(this.login)).subscribe((data: String) => {


    if (this.service.checkCookie('tokenLogin')) {

      const cookie = this.service.getCookie('tokenLogin');

      this.service.deleteCookie(cookie);

  }

    this.generarCookie(data);

    console.log(data, 'cookie nueva');

    if ( data.length > 10) {

        location.reload();

    } else {

      this.loginError = true;
    }

   });
  }

  loginTypeChang(){
    this.loginType = !this.loginType;
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
