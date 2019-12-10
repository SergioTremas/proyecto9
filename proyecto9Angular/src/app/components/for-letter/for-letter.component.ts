import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-for-letter',
  templateUrl: './for-letter.component.html'
})
export class ForLetterComponent implements OnInit {

  productos: any[] = [];

  constructor(private router :ActivatedRoute, private service: ProductsService) {

    this.router.params.subscribe((params:any) =>{


      //console.log(params['leter']);

    this.getbyletter(params['leter']);



    });
   }

   getbyletter(letra: string){
    this.service.getByLetter(letra).subscribe((para:any)=>{
      this.productos=para;
      console.log(para);
    });
   }

  ngOnInit() {



  }

}
