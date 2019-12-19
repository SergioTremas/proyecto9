import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='http://localhost/proyecto9/core/Controllers/UserController.php';

  constructor(private http: HttpClient, private login : LoginService) {}

   generarCookieIDUser(valor){

    this.login.setCookie('iduser', valor);

  }


getByToken() {

  let user: User ;
  user = new User();

  user = new User();
  user.idUser = '';
  user.names = '';
  user.surname = '';
  user.email = '';
  user.idCountry = '';
  user.country = '';
  user.idCity = '';
  user.city = '';
  user.numberAsses = '';
  user.dataAdd = '';
  user.rol = '';
  user.login = '';
  user.level = '';
  user.action = '';
  user.token = '';

   let url ='http://localhost/proyecto9/core/Controllers/UserController.php';

    const token = this.login.getCookie('tokenLogin');
    console.log("getByToken userService: "+ token);

    user.token = token;
    user.action = 'getByToken';


     return this.http.post(url,JSON.stringify(user));




}

insert(user: User) {

  let url ='http://localhost/proyecto9/core/Controllers/UserController.php';


  user.action = 'insert';

  return this.http.post(url, JSON.stringify(user));
}


}