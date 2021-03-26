import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
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
import { ToastrModule } from 'ngx-toastr';
import {SocieteModule} from './societe/societe.module';
import {ProduitModule} from './produit/produit.module';
import {HistoriqueModule} from './historique/historique.module';
import {EtatModule} from './etat/etat.module';
import {TypeActiviteModule} from './type-activite/type-activite.module';
import {ReclamationModule} from './reclamation/reclamation.module';
import {NgxPrintModule} from 'ngx-print';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserEditComponent } from './components/admin/user/user-edit/user-edit.component';
import { VerificationMailComponent } from './verification/verification-mail/verification-mail.component';
import { DeleteComponent } from './components/delete/delete.component';
import {HttpRequestInterceptor} from "./HttpRequestInterceptor";
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import {LeafletMarkerClusterModule} from "@asymmetrik/ngx-leaflet-markercluster";
import { FooterComponent } from './components/footer/footer.component';
import {StatistiqueEtatComponent} from "./statistique-etat/statistique-etat.component";
import { RechercheSocieteComponent } from './recherche-societe/recherche-societe.component';
import { TarificationComponent } from './tarification/tarification/tarification.component';
import { PaymentComponent } from './tarification/payment/payment.component';
import { RoueChanceModule } from './roue-chance/roue-chance.module';
import { NewProduitModule } from './new-produit/new-produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { SousCategorieModule } from './sous-categorie/sous-categorie.module';
import { ModeleModule } from './modele/modele.module';
import { ProduitsModule } from './produits/produits.module';
import { RoueClientModule } from './roue-client/roue-client.module';
import { ProduitUtilisateurModule } from './produit-utilisateur/produit-utilisateur.module';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";
import {Router} from "@angular/router";
import { ListProduitComponent } from './list-produit/list-produit.component';

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
    HomeComponent,
    MapComponent,
    FooterComponent,
    StatistiqueEtatComponent,
    RechercheSocieteComponent,
    TarificationComponent,
    PaymentComponent,
    ListProduitComponent
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
    ToastrModule.forRoot(), // ToastrModule added
    LeafletMarkerClusterModule,
    NgxPrintModule,
    CarouselModule
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
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    BsModalRef,
    SnotifyService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  exports: [
    LoadingComponent,
    DeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
