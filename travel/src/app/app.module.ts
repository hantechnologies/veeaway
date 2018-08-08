import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TestDirective } from './test.directive';

const Routes : Routes = [
  { path: "", component: HeaderComponent},
  { path: "Login", component: LoginComponent },
  { path: "register", component: RegisterComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidemenuComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
