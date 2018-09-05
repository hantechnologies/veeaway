///<reference path="../dataservice.service.ts"/>
import { Component, OnInit } from '@angular/core';
import { DataserviceService} from "../dataservice.service";
import {constructor} from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  _selectedCountry: any;


  selectedCountry: this.countries = this.country ('IND', 'India')
   this.countries = this.Country[];

 constructor(private _dataservice: DataserviceService){
   this._selectedCountry = this._dataservice.country
   }

}

