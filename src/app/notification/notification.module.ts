import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationCreateComponent } from './notification-create/notification-create.component';
import { NotificationIndexComponent } from './notification-index/notification-index.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import { NotificationViewComponent } from './notification-view/notification-view.component';


@NgModule({
  declarations: [NotificationCreateComponent, NotificationIndexComponent, NotificationListComponent, NotificationViewComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,

  ]
})
export class NotificationModule { }
