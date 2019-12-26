import { Component, OnInit } from '@angular/core';
import { Valuation1 } from '../../models/valuation1';
import { ValuationsService } from '../../services/valuations.service';


@Component({
  selector: 'app-list-rev',
  templateUrl: './list-rev.component.html',
  styleUrls: ['./list-rev.component.css']
})
export class ListRevComponent implements OnInit {

  idUser;
  valuation: Valuation1;
  valuations: Valuation1[] = [];

  constructor(private service: ValuationsService) {

    this.valuations = [];

    this.service.getAll().subscribe((data:Valuation1[])=>{
      this.valuations=data;
    });


   }

  ngOnInit() {
  }

  delete(idUser, idProduct, index1 ){
console.log('hola', index1);
this.valuations.splice(index1, 1);
this.service.deleteByUser(idUser, idProduct).subscribe();
  }

}
