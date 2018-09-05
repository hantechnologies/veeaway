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



consructor() {
  this.date = new Date();
}
 // setMsg(data:string) {
   // this.msg1 = data;
 // }

}


