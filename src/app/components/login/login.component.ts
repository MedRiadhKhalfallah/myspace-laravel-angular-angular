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

  constructor(private jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService
  ) {
  }

  onSubmit() {
    return this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit(): void {
  }

}
