import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TestDirective } from './test.directive';
import { CountrylistComponent } from './countrylist/countrylist.component';


const routes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'sidemenu', component: SidemenuComponent, outlet: 'sidemenu'}
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
    BrowserModule,
    RouterModule.forRoot(routes)

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
