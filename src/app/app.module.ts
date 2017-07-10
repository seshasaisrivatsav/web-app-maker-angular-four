import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import {routing} from "./app.routing";
import { RegisterComponent } from './components/user/register/register.component';
import {UserService} from "./services/userService.client";
import { ProfileComponent } from './components/user/profile/profile.component';
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";

// add client side services to providers

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileComponent,
    WebsiteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
