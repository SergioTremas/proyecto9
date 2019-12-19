import { Injectable } from '@angular/core';

import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  url = 'http://localhost/proyecto9/core/Controllers/CountryController.php';

  constructor(private http: HttpClient) {}

  getCountries() {

    const country = new Country();
    country.action = 'getCountry';
    //country.countryName = letter;

    return this.http.post(this.url, JSON.stringify(country));

  }
}
