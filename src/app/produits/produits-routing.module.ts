import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {ProduitsIndexComponent} from "./produits-index/produits-index.component";

const routes: Routes = [
  {path: '', component: ProduitsIndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
