import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitIndexComponent} from "./produit-index/produit-index.component";
import {AfterLoginService} from "../services/after-login.service";

const routes: Routes = [
  {path: '', component: ProduitIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
