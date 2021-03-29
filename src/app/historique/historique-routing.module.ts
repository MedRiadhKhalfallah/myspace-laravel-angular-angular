import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from "../profile/profile-edit/profile-edit.component";
import {AfterLoginService} from "../services/after-login.service";
import {HistoriqueIndexComponent} from "./historique-index/historique-index.component";

const routes: Routes = [
  {path: '', component: HistoriqueIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriqueRoutingModule { }
