import {Component, OnInit} from '@angular/core';
import {JarwisService} from "../../services/jarwis.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    nom: null,
    prenom: null,
    email: null,
    password: null,
    password_confirmation: null,
    telephone: null
  };
  public errors = null;
  public isMutch = false;

  constructor(private jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  // custom validator to check that two fields match
  mustMatch(data) {
    console.log("1");
    console.log(this.form.password_confirmation);
    console.log(this.form.password);
    if (this.form.password_confirmation === this.form.password) {
      this.isMutch = true;
      console.log("2");
    } else {
      this.isMutch = false;
      console.log("3");

    }
  }

  handleResponse(data) {
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('user', data.user);
    localStorage.setItem('profileImg', data.user.image_profile_path);
    localStorage.setItem('date_fin_abonnement_societe', data.date_fin_abonnement_societe);
    localStorage.setItem('societe', data.societe);
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
    window.location.reload();
  }

  handleError(error) {
    console.log(error);
    this.errors = error.error.errors
  }

}
