import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoueChanceRoutingModule } from './roue-chance-routing.module';
import {RoueChanceViewComponent} from "./roue-chance-view/roue-chance-view.component";
import {RoueChanceCreateComponent} from "./roue-chance-create/roue-chance-create.component";
import {RoueChanceElementCreateComponent} from "./roue-chance-element-create/roue-chance-element-create.component";
import {RoueChanceElementIndexComponent} from "./roue-chance-element-index/roue-chance-element-index.component";
import {RoueChanceElementListComponent} from "./roue-chance-element-list/roue-chance-element-list.component";
import {LoginRoueChanceComponent} from "./login-roue-chance/login-roue-chance.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {RouterModule} from "@angular/router";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [RoueChanceViewComponent, RoueChanceCreateComponent,
    RoueChanceElementCreateComponent, RoueChanceElementIndexComponent,
    RoueChanceElementListComponent, LoginRoueChanceComponent],
  imports: [
    CommonModule,
    RoueChanceRoutingModule,
    FormsModule,
    ModalModule,
    RouterModule,
    SharedComponentsModule,

  ]
})
export class RoueChanceModule { }
