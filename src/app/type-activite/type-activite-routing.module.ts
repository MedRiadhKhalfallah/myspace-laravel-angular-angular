import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {TypeActiviteIndexComponent} from "./type-activite-index/type-activite-index.component";

const routes: Routes = [
  {path: '', component: TypeActiviteIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeActiviteRoutingModule { }
