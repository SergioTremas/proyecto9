import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Country } from '../../models/country';
import { AutocompleteService } from '../../services/autocomplete.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  level='hola';
  rol='';
  countries:Country;
  datosOK=false;

  constructor( private service: UserService, private login: LoginService, private render: Renderer2, private countryServ: AutocompleteService) {

    this.countryServ.getCountries().subscribe((data:any)=>{
        this.countries = data;
    });

    this.service.getByToken().subscribe((data : User)=>{

      console.log('getByToke user', data);

      this.user = data;
      this.checklevel();
      this.checkRol();
      console.log(this.user);


      this.names.nativeElement.value = this.user.names;
      this.surname.nativeElement.value = this.user.surname;
      this.email.nativeElement.value = this.user.email;
      this.country.nativeElement.value = this.user.country;
      this.city.nativeElement.value = this.user.city;

    });

   }

   @ViewChild('names') names: ElementRef;
   @ViewChild('surname') surname: ElementRef;
   @ViewChild('email') email: ElementRef;
   @ViewChild('city') city: ElementRef;
   @ViewChild('country') country: ElementRef;


checklevel() {
  if(this.user.level==='1'){
    this.level = "Principiante";

  }else if(this.user.level==='2'){
    this.level = "Intermadio";

  }else if(this.user.level==='3'){
    this.level = 'Experto';
  }
  else{
    this.level='sin nivel';
  }
}

checkRol(){

  if(this.user.rol==='1'){
    this.rol = "Usuario";

  }else if(this.user.rol==='2'){
    this.rol = "Administrador";

  }

}

updateUser(){

  this.user.names = this.names.nativeElement.value ;
  this.user.surname = this.surname.nativeElement.value ;
  this.user.email = this.email.nativeElement.value ;
  this.user.idCountry = this.country.nativeElement.value;
  this.user.city = this.city.nativeElement.value ;

  this.service.update(this.user).subscribe();

  this.datosOK=true;

}

  ngOnInit() {




  }



}
