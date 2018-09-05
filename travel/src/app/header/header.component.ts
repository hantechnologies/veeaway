import { Component, OnInit } from '@angular/core';
import { DataserviceService} from "../dataservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // selectedCountry: country = new Country('IND', 'India');
  private Country: any;
 // countries = this.Country[];

 constructor(private _dataservice: DataserviceService){
   this.Country = this._dataservice.country;
   console.log(this.Country);
 }

}

