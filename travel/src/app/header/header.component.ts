import { Component, OnInit } from '@angular/core';
import { DataserviceService} from "../dataservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  private countries: any;
  private Fromcountry: any;
  private Tocountry: any;


 constructor(private _dataservice: DataserviceService){
   this.countries = this._dataservice.country;

 }

  getFromcountry(){
    console.log(this.Fromcountry);
    console.log(this.Fromcountry.id);
    console.log(this.Fromcountry.name);
  }
  getTocountry(){
    console.log(this.Tocountry);
  }

}

