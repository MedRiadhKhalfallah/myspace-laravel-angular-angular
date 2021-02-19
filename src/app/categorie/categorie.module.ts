import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieCreateComponent } from './categorie-create/categorie-create.component';
import { CategorieIndexComponent } from './categorie-index/categorie-index.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieSearchComponent } from './categorie-search/categorie-search.component';
import { CategorieViewComponent } from './categorie-view/categorie-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";



@NgModule({
  declarations: [CategorieCreateComponent, CategorieIndexComponent, CategorieListComponent, CategorieSearchComponent, CategorieViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
  ]
})
export class CategorieModule { }
