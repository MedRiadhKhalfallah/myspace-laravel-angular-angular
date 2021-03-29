import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterLoginService} from "../services/after-login.service";
import {MarqueIndexComponent} from "./marque-index/marque-index.component";

const routes: Routes = [
  {path: '', component: MarqueIndexComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarqueRoutingModule { }
