import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JarwisService} from './services/jarwis.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {ToastrModule} from 'ngx-toastr';
import {NgxPrintModule} from 'ngx-print';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular";
import {Integrations} from "@sentry/tracing";
import {Router} from "@angular/router";
import {HttpRequestInterceptor} from "./HttpRequestInterceptor";
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
//***************
import {TarificationComponent} from './tarification/tarification/tarification.component';
import {PaymentComponent} from './tarification/payment/payment.component';
//***************
Sentry.init({
  dsn: "https://3f420d2efbf54340867b84407039ad5f@o517250.ingest.sentry.io/5668649",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TarificationComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    CommonModule,
    // BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    // LeafletMarkerClusterModule,
    NgxPrintModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
      },
      deps: [Sentry.TraceService],
      multi: true,
    },
    JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    BsModalRef,
    SnotifyService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
