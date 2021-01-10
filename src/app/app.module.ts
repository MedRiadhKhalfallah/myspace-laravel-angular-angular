import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JarwisService} from './services/jarwis.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {UserComponent} from './components/admin/user/user.component';
import {UserSearchComponent} from './components/admin/user/user-search/user-search.component';
import {CommonModule} from '@angular/common';
import {RoleComponent} from './components/admin/role/role.component';
import {EditComponent} from './components/admin/role/edit/edit.component';
import {MarqueModule} from './marque/marque.module';
import {ProfileModule} from './profile/profile.module';
import {LoadingComponent} from './components/loading/loading.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {ToastrModule} from 'ngx-toastr';

// RECOMMENDED
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {UserEditComponent} from './components/admin/user/user-edit/user-edit.component';
import {VerificationMailComponent} from './verification/verification-mail/verification-mail.component';
import {DeleteComponent} from './components/delete/delete.component';
import {HttpRequestInterceptor} from "./HttpRequestInterceptor";
import { MapsViewComponent } from './maps/maps-view/maps-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UserComponent,
    UserSearchComponent,
    RoleComponent,
    EditComponent,
    LoadingComponent,
    UserEditComponent,
    VerificationMailComponent,
    DeleteComponent,
    MapsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    CommonModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults}, BsModalRef,
    SnotifyService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ],
  exports: [
    LoadingComponent,
    DeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
