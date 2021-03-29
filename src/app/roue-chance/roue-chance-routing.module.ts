import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {RoueChanceViewComponent} from "./roue-chance-view/roue-chance-view.component";
import {LoginRoueChanceComponent} from "./login-roue-chance/login-roue-chance.component";
import {RoueChanceCreateComponent} from "./roue-chance-create/roue-chance-create.component";
import {RoueChanceElementIndexComponent} from "./roue-chance-element-index/roue-chance-element-index.component";

const routes: Routes = [
  {path: 'login', component:LoginRoueChanceComponent },
  {path: 'create', component:RoueChanceCreateComponent,canActivate: [AfterLoginService] },
  {path: 'elements', component:RoueChanceElementIndexComponent,canActivate: [AfterLoginService] },
  {path: ':id', component:RoueChanceViewComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoueChanceRoutingModule { }
