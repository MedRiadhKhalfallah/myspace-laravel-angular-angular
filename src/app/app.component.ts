import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {TokenService} from "./services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private auth: AuthService, private router: Router, private token: TokenService) {
  }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
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

  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.router.navigateByUrl('/login');

  }
}
