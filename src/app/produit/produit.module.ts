import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProduitRoutingModule} from './produit-routing.module';
import {ProduitCreateComponent} from "./produit-create/produit-create.component";
import {ProduitIndexComponent} from "./produit-index/produit-index.component";
import {ProduitListComponent} from "./produit-list/produit-list.component";
import {ProduitSearshComponent} from "./produit-searsh/produit-searsh.component";
import {ProduitViewComponent} from "./produit-view/produit-view.component";
import {ProduitService} from "./service/produit.service";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {NgxPrintModule} from "ngx-print";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [ProduitCreateComponent, ProduitIndexComponent, ProduitListComponent,
    ProduitSearshComponent, ProduitViewComponent],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ModalModule,
    NgxPrintModule,
    SharedComponentsModule,

  ],
  exports: [],
  providers: [ProduitService]

})
export class ProduitModule {
}
