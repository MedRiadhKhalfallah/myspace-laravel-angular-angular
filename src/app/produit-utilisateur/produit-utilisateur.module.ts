import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitUtilisateurCreateComponent } from './produit-utilisateur-create/produit-utilisateur-create.component';
import { ProduitUtilisateurIndexComponent } from './produit-utilisateur-index/produit-utilisateur-index.component';
import { ProduitUtilisateurListComponent } from './produit-utilisateur-list/produit-utilisateur-list.component';
import { ProduitUtilisateurSearchComponent } from './produit-utilisateur-search/produit-utilisateur-search.component';
import { ProduitUtilisateurViewComponent } from './produit-utilisateur-view/produit-utilisateur-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {CarouselModule} from "ngx-owl-carousel-o";



@NgModule({
  declarations: [ProduitUtilisateurCreateComponent, ProduitUtilisateurIndexComponent, ProduitUtilisateurListComponent, ProduitUtilisateurSearchComponent, ProduitUtilisateurViewComponent],
    imports: [
        CommonModule,
        AppModule,
        FormsModule,
        ModalModule,
        CarouselModule,
    ]
})
export class ProduitUtilisateurModule { }
