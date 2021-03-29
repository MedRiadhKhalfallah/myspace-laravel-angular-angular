import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {SocieteViewComponent} from "./societe-view/societe-view.component";
import {SocieteCreateComponent} from "./societe-create/societe-create.component";
import {SocieteMapComponent} from "./societe-map/societe-map.component";
import {RechercheSocieteComponent} from "./recherche-societe/recherche-societe.component";
import {SocieteIndexComponent} from "./societe-index/societe-index.component";
import {SocieteRechercheAvanceComponent} from "./societe-recherche-avance/societe-recherche-avance.component";

const routes: Routes = [
  {path: '', component: SocieteIndexComponent, canActivate: [AfterLoginService]},
  {path: 'view/:id/sousCategory/:sousCategoryId', component: SocieteViewComponent},
  {path: 'view/:id', component: SocieteViewComponent},
  {path: 'create', component: SocieteCreateComponent, canActivate: [AfterLoginService]},
  {path: 'map', component: SocieteMapComponent, canActivate: [AfterLoginService]},
  {path: 'all', component: RechercheSocieteComponent},
  {path: 'societe-recherche-avance', component: SocieteRechercheAvanceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
