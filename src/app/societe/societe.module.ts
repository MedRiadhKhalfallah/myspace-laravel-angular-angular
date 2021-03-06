import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocieteCreateComponent} from './societe-create/societe-create.component';
import {SocieteIndexComponent} from './societe-index/societe-index.component';
import {SocieteListComponent} from './societe-list/societe-list.component';
import {SocieteSearchComponent} from './societe-search/societe-search.component';
import {SocieteViewComponent} from './societe-view/societe-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SocieteService} from "./service/societe.service";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {SocieteMapComponent} from './societe-map/societe-map.component';
import {SocietePayementComponent} from './societe-payement/societe-payement.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {SocieteRechercheAvanceComponent} from './societe-recherche-avance/societe-recherche-avance.component';
import {RechercheProduitComponent} from "./recherche-produit/recherche-produit.component";


@NgModule({
  declarations: [SocieteCreateComponent, SocieteIndexComponent, SocieteListComponent,
    SocieteSearchComponent, SocieteViewComponent, SocieteMapComponent, SocietePayementComponent,
    SocieteRechercheAvanceComponent,RechercheProduitComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [SocieteService]
})
export class SocieteModule {
}
