import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProduitViewComponent } from './new-produit-view/new-produit-view.component';
import { NewProduitSearchComponent } from './new-produit-search/new-produit-search.component';
import { NewProduitListComponent } from './new-produit-list/new-produit-list.component';
import { NewProduitIndexComponent } from './new-produit-index/new-produit-index.component';
import { NewProduitCreateComponent } from './new-produit-create/new-produit-create.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";



@NgModule({
  declarations: [NewProduitViewComponent, NewProduitSearchComponent, NewProduitListComponent, NewProduitIndexComponent, NewProduitCreateComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,

  ]
})
export class NewProduitModule { }
