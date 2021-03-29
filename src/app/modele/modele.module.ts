import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeleRoutingModule } from './modele-routing.module';
import {ModeleCreateComponent} from "./modele-create/modele-create.component";
import {ModeleIndexComponent} from "./modele-index/modele-index.component";
import {ModeleListComponent} from "./modele-list/modele-list.component";
import {ModeleSearchComponent} from "./modele-search/modele-search.component";
import {ModeleViewComponent} from "./modele-view/modele-view.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [ModeleCreateComponent, ModeleIndexComponent, ModeleListComponent,
    ModeleSearchComponent, ModeleViewComponent],
  imports: [
    CommonModule,
    ModeleRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,


  ]
})
export class ModeleModule { }
