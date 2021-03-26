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
  loading: boolean = false;

  constructor(private jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading=true;
    return this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  // custom validator to check that two fields match
  mustMatch(data) {
    if (this.form.password_confirmation === this.form.password) {
      this.isMutch = true;
    } else {
      this.isMutch = false;
    }
  }

  handleResponse(data) {
    this.auth.changeAuthStatus(true);
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('user', data.user);
    localStorage.setItem('profileImg', data.user.image_profile_path);
    localStorage.setItem('date_fin_abonnement_societe', data.date_fin_abonnement_societe);
    localStorage.setItem('societe', data.societe);
    this.token.handle(data.access_token);
    this.loading=false;
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.loading=false;
    this.errors = error.error.errors
  }

}
