import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {RequestResetComponent} from "./password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./password/response-reset/response-reset.component";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";


@NgModule({
  declarations: [LoginComponent,SignupComponent
    ,RequestResetComponent,ResponseResetComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ModalModule,

  ]
})
export class AuthentificationModule { }
