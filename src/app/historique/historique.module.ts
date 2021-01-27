import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueIndexComponent } from './historique-index/historique-index.component';
import { HistoriqueListComponent } from './historique-list/historique-list.component';
import { HistoriqueSearchComponent } from './historique-search/historique-search.component';
import { HistoriqueViewComponent } from './historique-view/historique-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [HistoriqueIndexComponent, HistoriqueListComponent, HistoriqueSearchComponent, HistoriqueViewComponent],
    imports: [
      CommonModule,
      AppModule,
      FormsModule,
      ModalModule,
      AppRoutingModule,
      BrowserModule,
    ]
})
export class HistoriqueModule { }
