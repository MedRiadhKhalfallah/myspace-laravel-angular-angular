import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {NewProduitIndexComponent} from "./new-produit-index/new-produit-index.component";
import {NewProduitViewComponent} from "./new-produit-view/new-produit-view.component";

const routes: Routes = [
  {path: '', component: NewProduitIndexComponent, canActivate: [AfterLoginService]},
  {path: 'view/:id', component: NewProduitViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProduitRoutingModule { }
