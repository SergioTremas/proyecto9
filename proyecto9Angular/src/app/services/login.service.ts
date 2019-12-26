import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CookieService } from 'ngx-cookie-service';
import { Country } from '../models/country';
import { Url } from '../models/urlfather';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   url: string;
   urlCountry: string;
   urlC: Url;


  constructor(private http: HttpClient, private cookie: CookieService) {
    this.urlC= new Url();
    this.url=this.urlC.urlCommon + 'LoginController.php';
    this.urlCountry=this.urlC.urlCommon +'CountryController.php';

  }


  checklogin(login: string) {

    return this.http.post(this.url, login );

  }
  checkEmailForLetter(letter){


    let login = new Login();

    login.action = 'checkEmail';
    login.email = letter;
    login.idLogin = '';
    login.pass = '';
    login.token = '';


    return this.http.post(this.url, JSON.stringify(login));
  }

  getCountryByLetter(letter: string) {

    const country = new Country();

    country.countryName = letter;
    country.idCountry = '';
    country.action = 'getByLetter';

    return this.http.post(this.urlCountry, JSON.stringify(country));

  }

  checkToken(login) {

   return this.http.post(this.url, JSON.stringify(login));

  }

  checktokenExist() {
    if (this.checkCookie('tokenLogin')) {

      const login = new Login();

      login.token = this.getCookie('tokenLogin');

      login.action = 'check';

      this.checkToken(login).subscribe((data: string) => {

        if (data.length > 7) {
          return true;
        } else {
          this.deleteCookie('tokenLogin');
          return false;
        }

      });

    } else {
      return false;
    }
  }

  setCookie(name: string, valor: string) {

    this.cookie.set(name, valor);
  }

  getCookie(name) {
   return this.cookie.get(name);
  }

  checkCookie(name): boolean{
   return  this.cookie.check(name);
  }

  delCookie(name){
    this.cookie.delete(name);
  }

  deleteCookie(name){

   let login= new Login();
    login.action='deleteToken';
    login.idLogin='';
    login.email='';
    login.pass='';
    login.token=name;


    this.cookie.delete('tokenLogin');

    this.http.post(this.url,JSON.stringify(login) ).subscribe();

  }

  insert(login:Login){

     login.action="insert";
     login.token="";

     return this.http.post(this.url, JSON.stringify(login));
  }

}



