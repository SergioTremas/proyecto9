import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

import { UserService } from '../../../services/user.service';
import { User } from 'src/app/models/User';
import { CategoryService } from '../../../services/category.service';
import { Category } from 'src/app/models/category';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userModel: User;
  @ViewChild('userMenu') userMenu: ElementRef;
  @ViewChild('selectedCategory') select: ElementRef;

  @ViewChild('products') products: ElementRef;

  @ViewChild('users') users: ElementRef;
  @ViewChild('rev') rew: ElementRef;


  Categories: Category[] = [];
  cat = '*';
  letter = '*';


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private login: LoginService, private user: UserService, private render: Renderer2, private product: ProductsService) {


    if (this.userLogeado()) {

      this.user.getByToken().subscribe((data: any) => {

        this.userModel = data;
        if (this.userModel.rol === '2') {
          this.render.removeClass(this.rew.nativeElement, 'hidden');
          this.render.removeClass(this.users.nativeElement, 'hidden');
          this.render.removeClass(this.products.nativeElement, 'hidden');


        }
        this.user.generarCookieIDUser(this.userModel.idUser);
        this.render.removeClass(this.userMenu.nativeElement, 'hidden');

        console.log(this.userModel.rol, 'kdjbvksjfbfkjfsbkjbfdskjv');



      });
      console.log("dentro navbar ngonit ", this.userModel);
    }else{
      this.userModel = null;
      console.log(this.userModel);

    }

    this.product.getCategories().subscribe( (data: any) => {

    this.Categories = data;

  });

  }

renderUser() {



}



  getUser(){
    this.user.getByToken().subscribe((data: any) => {

      this.userModel = data;

      this.user.generarCookieIDUser(this.userModel.idUser);
      this.render.removeClass(this.userMenu.nativeElement, 'hidden');

     });
  }



  selectCat(cate){

    this.cat= cate;
    this.router.navigate(['/byletter', this.letter, this.cat]);


  }


  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.



   // if ( this.userLogeado()) {
      // this.user.getByToken().subscribe((data: any) => {
      //  this.userModel = data;
      //  this.user.generarCookieIDUser(this.userModel.idUser);
      //  this.render.removeClass(this.userMenu.nativeElement, 'hidden');

      // });

   // }

  }

  ngOnInit() {

   // this.render.addClass(this.userMenu.nativeElement, 'hidden');
   }

   userLogeado(){

    if (this.login.checkCookie('tokenLogin')){

        return true;
    }else {
      return false;
    }
   }

  getProductsByLetter(letter: string, ) {

    this.letter = letter;

    this.router.navigate(['/byletter', letter, this.cat]);
  }

  deleteToken() {

    this.render.addClass(this.rew.nativeElement, 'hidden');
    this.render.addClass(this.users.nativeElement, 'hidden');
    this.render.addClass(this.products.nativeElement, 'hidden');


    this.userModel = null;

    const token= this.login.getCookie('tokenLogin');
    this.login.deleteCookie(token);
    this.login.delCookie('admin');
    this.render.addClass(this.userMenu.nativeElement, 'hidden');

  }


}
