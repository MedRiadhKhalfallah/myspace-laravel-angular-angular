import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocieteCreateComponent } from './societe-create/societe-create.component';
import { SocieteIndexComponent } from './societe-index/societe-index.component';
import { SocieteListComponent } from './societe-list/societe-list.component';
import { SocieteSearchComponent } from './societe-search/societe-search.component';
import { SocieteViewComponent } from './societe-view/societe-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SocieteService} from "./service/societe.service";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [SocieteCreateComponent, SocieteIndexComponent, SocieteListComponent, SocieteSearchComponent, SocieteViewComponent],
    imports: [
        CommonModule,
        AppModule,
        FormsModule,
        ModalModule,
        AppRoutingModule,
        BrowserModule,
    ],
  providers: [SocieteService]
})
export class SocieteModule { }