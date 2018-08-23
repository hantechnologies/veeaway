import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponent]
})
export class AppComponent {

  ccode : string;
  ccountry: string;
  constructor() {
  }
  country = [
    {id:'IND', name:'India'},
    {id:'USA', name:'United states of america'},
    {id:'CAN',name:'Canada'}];

  onSubmit(){

    console.log(this.ccountry.length);
  }

}
