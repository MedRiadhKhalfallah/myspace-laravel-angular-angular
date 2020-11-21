import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppModule} from '../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProfileViewComponent } from './profile-view/profile-view.component';


@NgModule({
  declarations: [ProfileEditComponent, ProfileViewComponent],
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
