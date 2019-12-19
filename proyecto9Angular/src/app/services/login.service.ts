import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CookieService } from 'ngx-cookie-service';
import { Country } from '../models/country';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   public url = 'http://localhost/proyecto9/core/Controllers/LoginController.php';
   public urlCountry = 'http://localhost/proyecto9/core/Controllers/CountryController.php';


  constructor(private http: HttpClient, private cookie: CookieService) { }


  checklogin(login: string) {

    return this.http.post(this.url, login );

  }
  checkEmailForLetter(letter){


    let login = new Login();

    login.action="checkEmail";
    login.email=letter;
    login.idLogin="";
    login.pass="";
    login.token="";


    return this.http.post(this.url, JSON.stringify(login));
  }

  getCountryByLetter(letter:string){

    let country= new Country();

    country.countryName = letter;
    country.idCountry = '';
    country.action = 'getByLetter';

    return this.http.post(this.urlCountry, JSON.stringify(country));


  }

  checkToken(login){

   return this.http.post(this.url, JSON.stringify(login));

  }

  checktokenExist(){
    if (this.checkCookie("tokenLogin")){

      let login = new Login();

      login.token= this.getCookie('tokenLogin');

      login.action= 'check';

      this.checkToken(login).subscribe((data:string)=>{

        if (data.length >4){
          return true;
        }else {
          this.deleteCookie('tokenLogin');
          return false;
        }

      });

    }else{
      return false;
    }
  }

  setCookie(name: string, valor:string){

    this.cookie.set(name, valor);
  }

  getCookie(name) {
   return this.cookie.get(name);
  }

  checkCookie(name): boolean{
   return  this.cookie.check(name);
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



