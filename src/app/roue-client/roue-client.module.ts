import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoueClientRoutingModule } from './roue-client-routing.module';
import {RoueClientService} from "./service/roue-client.service";
import {RoueClientIndexComponent} from "./roue-client-index/roue-client-index.component";
import {RoueClientListComponent} from "./roue-client-list/roue-client-list.component";
import {RoueClientSearchComponent} from "./roue-client-search/roue-client-search.component";
import {RoueClientViewComponent} from "./roue-client-view/roue-client-view.component";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [RoueClientIndexComponent, RoueClientListComponent, RoueClientSearchComponent,
    RoueClientViewComponent],
  imports: [
    CommonModule,
    RoueClientRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,

  ],
  providers: [RoueClientService]

})
export class RoueClientModule { }
