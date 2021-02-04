import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JarwisService} from "../../services/jarwis.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  public form = {email: null, password: null};
  hide: boolean = true;
  loading: boolean = false;
  passwordType = 'password';

  constructor(private jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService
  ) {
  }

  onSubmit() {
    this.loading = true;
    return this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.loading = false;
    this.error = error.error.error;
  }

  handleResponse(data) {

    this.loading = false;
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('user', data.user.original);
    localStorage.setItem('date_fin_abonnement_societe', data.date_fin_abonnement_societe);
    localStorage.setItem('societe', data.societe);
    localStorage.setItem('profileImg', data.user.original.image_profile_path);

    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  hidePassword() {
    this.hide = !this.hide;
    if (this.hide) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  ngOnInit(): void {
  }

}
