import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsIndexComponent } from './produits-index/produits-index.component';
import { ProduitsSearchComponent } from './produits-search/produits-search.component';
import { ProduitsListComponent } from './produits-list/produits-list.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ProduitsIndexComponent, ProduitsSearchComponent, ProduitsListComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
  ]
})
export class ProduitsModule { }
