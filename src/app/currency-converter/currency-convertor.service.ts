import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CurrencyConverterService {
  constructor(private http: HttpClient) {}

  getConversionRate() {
    let currency = {};

    return this.http
      .get(
        'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_2qB6MTKYLrFeIJuwDUQHfmlj9j4nfE6ZvK4Wwo5O'
      )
      .pipe(
        map((responseData) => {
          //   console.log(responseData);
          for (const key in responseData) {
            // console.log(responseData[key]);
            for (const currencyKey in responseData[key]) {
              //   console.log(currencyKey);
              const amount = responseData[key][currencyKey];
              currency[currencyKey] = amount;
              //   console.log(currencyKey + ': ' + responseData[key][currencyKey]);
            }
          }
          return currency;
        })
      );
  }
}
