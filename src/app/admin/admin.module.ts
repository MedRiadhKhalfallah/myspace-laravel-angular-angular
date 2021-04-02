import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {UserSearchComponent} from "./user/user-search/user-search.component";
import {RoleComponent} from "./role/role.component";
import {EditComponent} from "./role/edit/edit.component";
import {UserComponent} from "./user/user.component";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";


@NgModule({
  declarations: [UserEditComponent,UserSearchComponent,RoleComponent,EditComponent,UserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AdminModule { }
