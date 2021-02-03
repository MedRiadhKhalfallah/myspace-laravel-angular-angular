import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';
import {UserComponent} from './components/admin/user/user.component';
import {UserRoleService} from './services/user-role.service';
import {RoleComponent} from './components/admin/role/role.component';
import {MarqueIndexComponent} from './marque/marque-index/marque-index.component';
import {ProfileEditComponent} from './profile/profile-edit/profile-edit.component';
import {ProfileViewComponent} from "./profile/profile-view/profile-view.component";
import {VerificationMailComponent} from "./verification/verification-mail/verification-mail.component";
import {SocieteIndexComponent} from "./societe/societe-index/societe-index.component";
import {SocieteViewComponent} from "./societe/societe-view/societe-view.component";
import {SocieteCreateComponent} from "./societe/societe-create/societe-create.component";
import {ProduitIndexComponent} from "./produit/produit-index/produit-index.component";
import {HomeComponent} from "./home/home.component";
import {MapComponent} from "./map/map.component";
import {HistoriqueIndexComponent} from "./historique/historique-index/historique-index.component";
import {EtatIndexComponent} from "./etat/etat-index/etat-index.component";
import {RechercheSocieteComponent} from "./recherche-societe/recherche-societe.component";
import {SocieteMapComponent} from "./societe/societe-map/societe-map.component";
import {TypeActiviteIndexComponent} from "./type-activite/type-activite-index/type-activite-index.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'users-roles',
    component: RoleComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'marques',
    component: MarqueIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'profile',
    component: ProfileEditComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'profile/:id',
    component: ProfileViewComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-mail-verification',
    component: VerificationMailComponent
  },
  {
    path: 'societes',
    component: SocieteIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'societe/view/:id',
    component: SocieteViewComponent,
  },
  {
    path: 'societe/create',
    component: SocieteCreateComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'societe/map',
    component: SocieteMapComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'societe/all',
    component: RechercheSocieteComponent
  },
  {
    path: 'produits',
    component: ProduitIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'historiques',
    component: HistoriqueIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'etats',
    component: EtatIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'typeActivites',
    component: TypeActiviteIndexComponent,
    canActivate: [AfterLoginService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
