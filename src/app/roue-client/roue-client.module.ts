import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoueClientIndexComponent } from './roue-client-index/roue-client-index.component';
import { RoueClientListComponent } from './roue-client-list/roue-client-list.component';
import { RoueClientSearchComponent } from './roue-client-search/roue-client-search.component';
import { RoueClientViewComponent } from './roue-client-view/roue-client-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {RoueClientService} from "./service/roue-client.service";



@NgModule({
  declarations: [RoueClientIndexComponent, RoueClientListComponent, RoueClientSearchComponent, RoueClientViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [RoueClientService]

})
export class RoueClientModule { }
