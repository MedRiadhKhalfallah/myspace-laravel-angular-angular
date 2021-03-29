import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import {MarqueIndexComponent} from "./marque-index/marque-index.component";
import {MarqueCreateComponent} from "./marque-create/marque-create.component";
import {MarqueListComponent} from "./marque-list/marque-list.component";
import {MarqueSearchComponent} from "./marque-search/marque-search.component";
import {MarqueViewComponent} from "./marque-view/marque-view.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [MarqueIndexComponent, MarqueCreateComponent, MarqueListComponent,
    MarqueSearchComponent, MarqueViewComponent],
  imports: [
    CommonModule,
    MarqueRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,

  ]
})
export class MarqueModule { }
