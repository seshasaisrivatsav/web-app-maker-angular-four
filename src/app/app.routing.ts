/**
 * Created by sesha on 6/2/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

// Import components
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const APP_ROUTES : Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent}
];

// Export the routes as module providers
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
