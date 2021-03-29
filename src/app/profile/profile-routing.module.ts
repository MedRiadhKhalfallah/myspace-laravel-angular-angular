import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {BeforeLoginService} from "../services/before-login.service";
import {AfterLoginService} from "../services/after-login.service";
import {VerificationMailComponent} from "./verification-mail/verification-mail.component";

const routes: Routes = [
  {path: '', component: ProfileEditComponent, canActivate: [AfterLoginService]},
  {path: ':id', component: ProfileViewComponent, canActivate: [BeforeLoginService]},
  {path: 'response-mail-verification', component: VerificationMailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
