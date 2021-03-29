import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import {ReclamationCreateComponent} from "./reclamation-create/reclamation-create.component";
import {ReclamationIndexComponent} from "./reclamation-index/reclamation-index.component";
import {ReclamationListComponent} from "./reclamation-list/reclamation-list.component";
import {ReclamationViewComponent} from "./reclamation-view/reclamation-view.component";
import {ReclamationSearchComponent} from "./reclamation-search/reclamation-search.component";
import {ReclamationService} from "./service/reclamation.service";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [ReclamationCreateComponent, ReclamationIndexComponent, ReclamationListComponent,
    ReclamationViewComponent, ReclamationSearchComponent],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule,
    ModalModule,
    BsDatepickerModule.forRoot(),
    SharedComponentsModule,

  ],
  providers: [ReclamationService]

})
export class ReclamationModule { }
