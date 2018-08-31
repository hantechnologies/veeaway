import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponent]
})
export class AppComponent {

  msg1: string;
  date: Date;
  show = false;


  country = [{id: 'IND', name: 'India'},
    {id:'USA', name:'United States of America'},
    {id:'AFR', name:'Africa'}
    ];
  selectCountry = this.country;

onSelect(country){
this.selectCountry = this.country;
}
consructor() {
  this.date = new Date();
}
 // setMsg(data:string) {
   // this.msg1 = data;
 // }

}


