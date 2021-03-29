import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home/home.component";
import {StatistiqueEtatComponent} from "./statistique-etat/statistique-etat.component";
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {FormsModule} from "@angular/forms";
import {CarouselModule} from "ngx-owl-carousel-o";
import {ModalModule} from "ngx-bootstrap/modal";
import {LeafletMarkerClusterModule} from "@asymmetrik/ngx-leaflet-markercluster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [HomeComponent,StatistiqueEtatComponent,ListProduitComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ModalModule,
    CarouselModule,
    SharedComponentsModule,
    // LeafletMarkerClusterModule,
  ]
})
export class HomeModule { }
