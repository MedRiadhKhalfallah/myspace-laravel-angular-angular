import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {RoueClientIndexComponent} from "./roue-client-index/roue-client-index.component";

const routes: Routes = [
  {path: '', component: RoueClientIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoueClientRoutingModule { }
