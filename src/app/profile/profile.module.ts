import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppModule} from '../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
    declarations: [ProfileEditComponent, ProfileViewComponent],
    exports: [
        ProfileEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        AppModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),

    ]
})
export class ProfileModule {
}
