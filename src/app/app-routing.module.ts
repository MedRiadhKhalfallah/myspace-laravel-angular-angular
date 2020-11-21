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
import {ModeleIndexComponent} from "./modele/modele-index/modele-index.component";
import {ProduitIndexComponent} from "./produit/produit-index/produit-index.component";
import {ProduitViewComponent} from "./produit/produit-view/produit-view.component";

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
    path: 'modeles',
    component: ModeleIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'produits',
    component: ProduitIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'produits/view',
    component: ProduitViewComponent,
  },
  {
    path: 'profile',
    component: ProfileEditComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'profile/:id',
    component: ProfileViewComponent
  },
  {
    path: 'profile/edit/:id',
    component: ProfileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
