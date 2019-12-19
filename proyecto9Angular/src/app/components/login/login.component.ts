import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { AuthGuard } from '../../guard/auth.guard';
import { CanActivate, Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   login: Login;


  constructor(private service: LoginService, private auth: AuthGuard, private router: Router, private user: UserService) {

    console.log(this.getCookie());
    this.login = new Login();
  }

  ngOnInit() {
  }



  checkLogin(form: NgForm) {

   this.login.action = 'check';
   this.login.token = '';

   if (form.invalid) {return; }

   this.service.checklogin(JSON.stringify(this.login)).subscribe((data: String) => {


console.log(data);
    this.generarCookie(data);
    if ( data.length>3) {

      let userM:User;
    this.user.getByToken().subscribe((data:User)=>{
  console.log(data);
    userM=data;

    });

   // this.router.parent.navigate('/about');
    this.router.navigate(['/navbar']);

    }

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
