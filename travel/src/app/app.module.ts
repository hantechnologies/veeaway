import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DatePipe} from "@angular/common";


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TestDirective } from './test.directive';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { DataserviceService } from './dataservice.service';


const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Sidemenu', component: SidemenuComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidemenuComponent,
    TestDirective,
    CountrylistComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes)

      ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
