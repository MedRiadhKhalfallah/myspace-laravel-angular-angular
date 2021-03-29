import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {ProfileEditComponent} from "../profile/profile-edit/profile-edit.component";
import {UserComponent} from "./user/user.component";
import {RoleComponent} from "./role/role.component";

const routes: Routes = [
  {path: 'users', component: UserComponent, canActivate: [AfterLoginService]},
  {path: 'users-roles', component: RoleComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
