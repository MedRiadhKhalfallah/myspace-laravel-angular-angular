import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {BeforeLoginService} from "../services/before-login.service";
import {SignupComponent} from "./signup/signup.component";
import {RequestResetComponent} from "./password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./password/response-reset/response-reset.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]},
  {path: 'request-password-reset', component: RequestResetComponent, canActivate: [BeforeLoginService]},
  {path: 'response-password-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
