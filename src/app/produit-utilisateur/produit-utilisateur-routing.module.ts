import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {ProduitUtilisateurIndexComponent} from "./produit-utilisateur-index/produit-utilisateur-index.component";

const routes: Routes = [
  {path: '', component: ProduitUtilisateurIndexComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitUtilisateurRoutingModule { }
