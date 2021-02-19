import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SousCategorieCreateComponent } from './sous-categorie-create/sous-categorie-create.component';
import { SousCategorieIndexComponent } from './sous-categorie-index/sous-categorie-index.component';
import { SousCategorieListComponent } from './sous-categorie-list/sous-categorie-list.component';
import { SousCategorieSearchComponent } from './sous-categorie-search/sous-categorie-search.component';
import { SousCategorieViewComponent } from './sous-categorie-view/sous-categorie-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";



@NgModule({
  declarations: [SousCategorieCreateComponent, SousCategorieIndexComponent, SousCategorieListComponent, SousCategorieSearchComponent, SousCategorieViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,

  ]
})
export class SousCategorieModule { }
