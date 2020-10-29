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
              private auth:AuthService) {
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
    if (data === this.form.password) {
      this.isMutch = true;
      // this.form.password_confirmation.setErrors({'incorrect': false})
    } else {
      this.isMutch = false;
      // this.form.password_confirmation.setErrors({'incorrect': true})

    }
  }

  handleResponse(data) {
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('user', data.user);
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    console.log(error);
    this.errors = error.error.errors
  }

}
