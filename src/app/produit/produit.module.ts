import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProduitCreateComponent} from './produit-create/produit-create.component';
import {ProduitIndexComponent} from './produit-index/produit-index.component';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {ProduitSearchComponent} from './produit-search/produit-search.component';
import {ProduitViewComponent} from './produit-view/produit-view.component';
import {AppModule} from '../app.module';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";


@NgModule({
  declarations: [ProduitCreateComponent, ProduitIndexComponent, ProduitListComponent, ProduitSearchComponent, ProduitViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxGalleryModule
  ],
  exports: []
})
export class ProduitModule {
}
