import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JarwisService} from "../../services/jarwis.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  public form = {email: null, password: null};
  hide: boolean = true;
  passwordType = 'password';

  user: SocialUser;
  loggedIn: boolean;

  constructor(private jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService,
              private authService: SocialAuthService
  ) {
  }

  onSubmit() {
    return this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }


  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    console.log(data);
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('user', data.user.original);

    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile').then(() => {
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
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      var data = {
        'email': this.user.email,
        'provider_id': this.user.id,
        'photoUrl': this.user.photoUrl,
        'prenom': this.user.firstName,
        'nom': this.user.lastName,
        'password': 'jvrdsogrjoi&kjsdflmsdf45sdfsdf3q7834sqf5sd4f3sdq4g8fd4g2fd24gh8f5dh44fgd58h'
      };
      return this.jarwis.login(data).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    });

  }

}
