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
const APP_ROUTES : Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  //{path: 'website-list', component: WebsiteListComponent}

  {path: 'user/:userId/website', component: WebsiteListComponent}
];

// Export the routes as module providers
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
