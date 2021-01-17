import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCreateComponent } from './produit-create/produit-create.component';
import { ProduitIndexComponent } from './produit-index/produit-index.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitSearshComponent } from './produit-searsh/produit-searsh.component';
import { ProduitViewComponent } from './produit-view/produit-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {ProduitService} from "./service/produit.service";



@NgModule({
  declarations: [ProduitCreateComponent, ProduitIndexComponent, ProduitListComponent, ProduitSearshComponent, ProduitViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [ProduitService]
})
export class ProduitModule { }
