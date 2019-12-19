import { Component} from '@angular/core';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { AutocompleteService } from '../../services/autocomplete.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

 // country : string=['espanya', 'catalunya', 'francia', 'navarra'];



    brands: Country[] = [];

    filteredBrands: any[];

    brand: string;



    constructor(private autocompleteService: AutocompleteService) {

this.getCountries();

     }


     getCountries() {
console.log("getcountries");
      this.autocompleteService.getCountries().subscribe((data: any[])=>{

        console.log(data);

          this.brands = data;

      });
     }

    filterBrands(event) {
        this.filteredBrands = [];
        for(let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i].countryName;
            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }

}
