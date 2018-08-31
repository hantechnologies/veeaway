import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  country = [{id: 'IND', name: 'India'},
    {id:'USA', name:'United States of America'},
    {id:'AFR', name:'Africa'},
    {id:'CAN', name:'Canada'}
  ];
  selectCountry = this.country;

  onSelect(countryId){
    this.selectCountry = null;
    for(var i = 0; i < this.country.length; i++){
      if(this.country[i].id == countryId){
        this.selectCountry = this.country[i];
      }
    }

  }
}

