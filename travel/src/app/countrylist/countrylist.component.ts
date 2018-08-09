import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent  {

  constructor( public id: string, public name: string) { }

    Countries = [{'name': 'USA', 'value':'America'},
      {'name':'CAN','value':'Canada'}
    ];
  selectedCountrylist = this.Countries[0];
    // ),
  new Countrylist('PAK', 'Pakisthan'),
  new Countrylist('BAN', 'Bangaladesh')

}
