import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {EtatIndexComponent} from "./etat-index/etat-index.component";

const routes: Routes = [
  {path: '', component: EtatIndexComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatRoutingModule { }
