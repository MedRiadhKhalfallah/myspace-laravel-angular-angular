import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatRoutingModule } from './etat-routing.module';
import {EtatCreateComponent} from "./etat-create/etat-create.component";
import {EtatIndexComponent} from "./etat-index/etat-index.component";
import {EtatListComponent} from "./etat-list/etat-list.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {RouterModule} from "@angular/router";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [EtatCreateComponent, EtatIndexComponent, EtatListComponent],
  imports: [
    CommonModule,
    EtatRoutingModule,
    FormsModule,
    ModalModule,
    RouterModule,
    SharedComponentsModule,

  ]
})
export class EtatModule { }
