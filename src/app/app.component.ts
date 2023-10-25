import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currency-converter/currency-convertor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // List containing the currency selection
  currencyList: string[] = [];

  // Store the currency data into dictionary
  // currency = {};
  currency = {
    AUD: 1.5781902621,
    BGN: 1.8354703205,
    BRL: 5.0132907926,
    CAD: 1.3690302353,
    CHF: 0.8910201124,
    CNY: 7.3155410716,
    CZK: 23.0428638558,
    DKK: 6.993880806,
    EUR: 0.9373801815,
    GBP: 0.8164801417,
    HKD: 7.8235514522,
    HRK: 7.0425510075,
    HUF: 357.1250609795,
    IDR: 15913.357856681,
    ILS: 4.0659906972,
    INR: 82.9943706251,
    ISK: 138.2929218429,
    JPY: 149.7775384634,
    KRW: 1341.2071845229,
    MXN: 18.1443931045,
    MYR: 4.7913106355,
    NOK: 11.0758821653,
    NZD: 1.7095302232,
    PHP: 56.8295389441,
    PLN: 4.1766505862,
    RON: 4.6571806013,
    RUB: 94.2666947846,
    SEK: 10.975202125,
    SGD: 1.3665401906,
    THB: 36.2931062935,
    TRY: 28.0800549663,
    USD: 1,
    ZAR: 18.9554832274,
  };

  // Input and output values connected to the DOM
  inputValue: number = 0;
  outputValue: number = 0;

  // Default selection
  selectedFrom: string = 'CAD';
  selectedTo: string = 'USD';

  constructor(private currencyConverterService: CurrencyConverterService) {}

  ngOnInit(): void {
    // this.currencyConverterService.getConversionRate().subscribe((data) => {
    //   this.currency = data;
    //   for (const key in this.currency) {
    //     this.currencyList.push(key);
    //   }
    // });
    for (const key in this.currency) {
      this.currencyList.push(key);
    }
  }

  convertAmount() {
    const convertedAmount = this.inputValue / this.currency[this.selectedFrom];

    const destinationAmount = convertedAmount * this.currency[this.selectedTo];

    this.outputValue = Math.round(destinationAmount * 100) / 100;
  }
}
