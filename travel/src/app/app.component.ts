import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponent]
})
export class AppComponent {
  date: Date;
  show = false;


  country = [{id: 'IND', name: 'India'},
    {id:'USA', name:'United States of America'},
    {id:'AFR', name:'Africa'}
    ];
consructor() {
  this.date = new Date();
}
}

