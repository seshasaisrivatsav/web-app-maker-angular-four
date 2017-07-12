/**
 * Created by sesha on 6/2/17.
 */
// Import components
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {PageListComponent} from "./components/page/page-list/page-list.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
const APP_ROUTES : Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user/:userId/website', component: WebsiteListComponent},
  {path: 'user/:userId/website/new', component: WebsiteNewComponent},
  {path: 'user/:userId/website/:websiteId', component: WebsiteEditComponent},
  {path: 'user/:userId/website/:websiteId/page', component: PageListComponent},
  {path: 'user/:userId/website/:websiteId/page/:pageId', component: PageEditComponent},
  {path: 'user/:userId/website/:websiteId/page/new', component: PageNewComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
