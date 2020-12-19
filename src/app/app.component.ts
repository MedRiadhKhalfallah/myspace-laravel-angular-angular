import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TokenService} from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  public loggedIn: boolean;
  public rolesString: string;
  public roles = null;
  public user: string;
  public adminRole;
  public utilisateurRole;

  constructor(private auth: AuthService, private router: Router, private token: TokenService) {
    this.adminRole = false;
    this.utilisateurRole = false;
  }

  ngOnInit(): void {
    if (!this.token.loggedIn) {
      this.router.navigateByUrl('/home');
    } else {
      this.rolesString = localStorage.getItem('roles');
      if (this.rolesString) {
        this.roles = this.rolesString.split(",");
      }
      this.user = localStorage.getItem('user');
    }
    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true && this.token.loggedIn;
      } else if (this.roles.indexOf('utilisateur') !== -1) {
        this.utilisateurRole = true && this.token.loggedIn;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true && this.token.loggedIn;
      } else if (this.roles === 'utilisateur') {
        this.utilisateurRole = true && this.token.loggedIn;
      }

    }
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    //js
    var isNavbarTop = JSON.parse(localStorage.getItem('isNavbarTop'));
    if (isNavbarTop) {
      var navbarVertical = document.querySelector('.navbar-vertical');
      var navbarTop = document.querySelector('.content .navbar-top');
      navbarVertical.parentNode.removeChild(navbarVertical);
      navbarTop.parentNode.removeChild(navbarTop);

    } else {
      var navbarTop = document.querySelector('[data-layout] .navbar-top');
      navbarTop.parentNode.removeChild(navbarTop);
    }
    var isFluid = JSON.parse(localStorage.getItem('isFluid'));
    if (isFluid) {
      var container = document.querySelector('[data-layout]');
      container.classList.remove('container');
      container.classList.add('container-fluid');
    }
  }

  public logout(event: MouseEvent): any {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    localStorage.removeItem('roles');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
