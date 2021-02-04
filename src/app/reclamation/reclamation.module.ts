import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationCreateComponent } from './reclamation-create/reclamation-create.component';
import { ReclamationIndexComponent } from './reclamation-index/reclamation-index.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationViewComponent } from './reclamation-view/reclamation-view.component';
import { ReclamationSearchComponent } from './reclamation-search/reclamation-search.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {ReclamationService} from "./service/reclamation.service";



@NgModule({
  declarations: [ReclamationCreateComponent, ReclamationIndexComponent, ReclamationListComponent, ReclamationViewComponent, ReclamationSearchComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [ReclamationService]
})
export class ReclamationModule { }
