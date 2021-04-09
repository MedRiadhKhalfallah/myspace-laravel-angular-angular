import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {VerificationMailComponent} from "./verification-mail/verification-mail.component";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [ProfileEditComponent, ProfileViewComponent,VerificationMailComponent],
  exports: [
    ProfileEditComponent,ProfileViewComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        ModalModule,
        BsDatepickerModule.forRoot(),
        SharedComponentsModule,

    ]
})
export class ProfileModule { }
