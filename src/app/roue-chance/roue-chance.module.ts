import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoueChanceViewComponent } from './roue-chance-view/roue-chance-view.component';
import { RoueChanceCreateComponent } from './roue-chance-create/roue-chance-create.component';
import { RoueChanceElementCreateComponent } from './roue-chance-element-create/roue-chance-element-create.component';
import { RoueChanceElementIndexComponent } from './roue-chance-element-index/roue-chance-element-index.component';
import { RoueChanceElementListComponent } from './roue-chance-element-list/roue-chance-element-list.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [RoueChanceViewComponent, RoueChanceCreateComponent, RoueChanceElementCreateComponent, RoueChanceElementIndexComponent, RoueChanceElementListComponent],
    imports: [
      CommonModule,
      AppModule,
      FormsModule,
      ModalModule,
      RouterModule,
    ]
})
export class RoueChanceModule { }
