import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-for-letter',
  templateUrl: './for-letter.component.html'
})
export class ForLetterComponent implements OnInit {

  productos: any[] = [];
  public imgPropertie= "/src/assets/imgProducts/bosque.jpg";

  constructor(private router :ActivatedRoute, private service: ProductsService) {

    this.router.params.subscribe((params:any) =>{


      console.log(params['leter'], params['category']);

    this.getbyletter(params['leter'], params['category']);



    });
   }

   getbyletter(letra: string, category: string){


    if(letra === '*' || letra === '') {
      console.log( "letra igual a *");
      letra=null;
    }
    if(category === '*' || category === '') {
      console.log("letra igual a *");
      category=null;
    }


     if(letra ===null  && category !== null){


      this.service.getbyCategory(category).subscribe((para: any)=>{
        this.productos = para;
        console.log(para);
      });



     }else if(letra !==null  && category !==null){

      console.log("bucar por letra y categoria letra " + letra+' categoria '+ category);
      this.service.getByLetterCat(letra, category).subscribe((para: any)=>{
        this.productos=para;
        console.log(para);
      });

     }else if(letra === null  && category === null ){

      console.log('opcion dos asteriscos ok ');


      letra = '';
      category='';


        this.service.getByLetter(letra).subscribe((para: any)=>{
      this.productos=para;
      console.log(para);
    });

     }else{

      this.service.getByLetter(letra).subscribe((para: any)=>{
        this.productos=para;
        console.log(para);
      });


     }



   }

  ngOnInit() {



  }

}
