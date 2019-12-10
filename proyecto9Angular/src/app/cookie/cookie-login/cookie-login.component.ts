import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-login',
  templateUrl: './cookie-login.component.html',
  styleUrls: ['./cookie-login.component.css']
})
export class CookieLoginComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit():void {

  }


  setCookie(name: string, valor:string){

    this.cookie.set(name, valor);
  }

}
