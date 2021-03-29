import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {ReclamationIndexComponent} from "./reclamation-index/reclamation-index.component";

const routes: Routes = [
  {path: '', component: ReclamationIndexComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
