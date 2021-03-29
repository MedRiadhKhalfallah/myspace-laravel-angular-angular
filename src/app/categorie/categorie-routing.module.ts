import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {CategorieIndexComponent} from "./categorie-index/categorie-index.component";

const routes: Routes = [
  {path: '', component: CategorieIndexComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
