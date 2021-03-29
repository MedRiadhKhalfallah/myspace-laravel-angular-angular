import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import {SocieteService} from "./service/societe.service";
import {RechercheProduitComponent} from "./recherche-produit/recherche-produit.component";
import {SocieteRechercheAvanceComponent} from "./societe-recherche-avance/societe-recherche-avance.component";
import {SocietePayementComponent} from "./societe-payement/societe-payement.component";
import {SocieteMapComponent} from "./societe-map/societe-map.component";
import {SocieteViewComponent} from "./societe-view/societe-view.component";
import {SocieteSearchComponent} from "./societe-search/societe-search.component";
import {SocieteListComponent} from "./societe-list/societe-list.component";
import {SocieteIndexComponent} from "./societe-index/societe-index.component";
import {SocieteCreateComponent} from "./societe-create/societe-create.component";
import {RechercheSocieteComponent} from "./recherche-societe/recherche-societe.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [SocieteCreateComponent, SocieteIndexComponent, SocieteListComponent,
    SocieteSearchComponent, SocieteViewComponent, SocieteMapComponent, SocietePayementComponent,
    SocieteRechercheAvanceComponent, RechercheProduitComponent, RechercheSocieteComponent],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    // AppModule,
    FormsModule,
    ModalModule,
    // BrowserModule,
    BsDatepickerModule.forRoot(),
    SharedComponentsModule,

  ],
  exports: [
    RechercheSocieteComponent
  ],
  providers: [SocieteService]
})
export class SocieteModule { }
