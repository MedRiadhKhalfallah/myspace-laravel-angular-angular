import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {SousCategorieIndexComponent} from "./sous-categorie-index/sous-categorie-index.component";

const routes: Routes = [
  {path: '', component: SousCategorieIndexComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousCategorieRoutingModule { }
