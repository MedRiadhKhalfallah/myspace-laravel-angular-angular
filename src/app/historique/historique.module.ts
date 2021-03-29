import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriqueRoutingModule } from './historique-routing.module';
import {HistoriqueIndexComponent} from "./historique-index/historique-index.component";
import {HistoriqueListComponent} from "./historique-list/historique-list.component";
import {HistoriqueSearchComponent} from "./historique-search/historique-search.component";
import {HistoriqueViewComponent} from "./historique-view/historique-view.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";


@NgModule({
  declarations: [HistoriqueIndexComponent, HistoriqueListComponent, HistoriqueSearchComponent,
    HistoriqueViewComponent],
  imports: [
    CommonModule,
    HistoriqueRoutingModule,
    FormsModule,
    ModalModule,

  ]
})
export class HistoriqueModule { }
