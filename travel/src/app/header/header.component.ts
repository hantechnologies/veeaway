import { Component, OnInit } from '@angular/core';
import { DataserviceService} from "../dataservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  private Country: any;
 countries = this.Country;

 constructor(private _dataservice: DataserviceService){
   this.countries = this._dataservice.country;
 }

}

