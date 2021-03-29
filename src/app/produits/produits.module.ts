import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {ProduitsIndexComponent} from "./produits-index/produits-index.component";
import {ProduitsSearchComponent} from "./produits-search/produits-search.component";
import {ProduitsListComponent} from "./produits-list/produits-list.component";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [ProduitsIndexComponent, ProduitsSearchComponent, ProduitsListComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,

  ]
})
export class ProduitsModule { }
