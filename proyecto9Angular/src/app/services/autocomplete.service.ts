import { Injectable } from '@angular/core';

import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { Url } from '../models/urlfather';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  url: string;
  urlC: Url;

  constructor(private http: HttpClient) {

    this.urlC = new Url();
    this.url = this.urlC.urlCommon + 'CountryController.php';

  }

  getCountries() {

    const country = new Country();
    country.action = 'getCountry';
    //country.countryName = letter;

    return this.http.post(this.url, JSON.stringify(country));

  }
}
