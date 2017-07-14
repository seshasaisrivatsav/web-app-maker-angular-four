import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { Routing } from "./app.routing";
import { RegisterComponent } from './components/user/register/register.component';
import { UserService } from "./services/userService.client";
import { ProfileComponent } from './components/user/profile/profile.component';
import { WebsiteListComponent } from "./components/website/website-list/website-list.component";
import { WebsiteNewComponent } from "./components/website/website-new/website-new.component";
import {WebsiteService} from "./services/website.service.client";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';



// add client side services to providers

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageNewComponent,
    PageListComponent,
    PageEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [UserService, WebsiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
