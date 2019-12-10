import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;
  public opcion:boolean;

  constructor(private service: UserService, private login: LoginService) {

    this.opcion=true;


    this.service.getByToken().subscribe((data :User)=>{

      console.log('getByToke user');

      this.user = data;

    });

   }

   setOpcion(){
     this.opcion= !this.opcion;
   }

  ngOnInit() {


  }



}
