import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent  {

  constructor( public id: string, public name: string) { }
        selectedCountrylist = new Countrylist('IND', 'India');
    Countries = [
      new Countrylist('USA', 'America'),
      new Countrylist('CAN', 'Canada'),
      new Countrylist('PAK', 'Pakisthan'),
      new Countrylist('BAN', 'Bangaladesh')
    ];

}
