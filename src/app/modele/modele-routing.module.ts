import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {ModeleIndexComponent} from "./modele-index/modele-index.component";

const routes: Routes = [
  {path: '', component: ModeleIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeleRoutingModule { }
