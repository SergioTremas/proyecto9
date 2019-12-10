import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserComponent } from '../../user/user.component';
import { UserService } from '../../../services/user.service';
import { User } from 'src/app/models/user';
import { isNullOrUndefined } from 'util';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userModel: User;

  constructor(private router: Router, private login: LoginService, private user: UserService) {


    if( this.userLogeado()){
      this.user.getByToken().subscribe((data: any) => {
       this.userModel=data;
       this.user.generarCookieIDUser(this.userModel.idUser);

      });

    }


  }

  ngOnInit() {

    console.log(this.userModel);

   }

   userLogeado(){


    if (this.login.checkCookie("tokenLogin")){

        return true;
    }else {
      return false;
    }
   }





  getProductsByLetter(letter: string) {

    this.router.navigate(['/byletter', letter]);
  }

  deleteToken() {
console.log("logout");

    this.userModel=null;

    const token = this.login.getCookie('tokenLogin');
    this.login.deleteCookie(token);

  }





}
