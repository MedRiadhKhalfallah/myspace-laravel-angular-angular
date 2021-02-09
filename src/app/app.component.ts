import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './services/auth.service';
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
  public profileImg = null;
  public user: string;
  public adminRole;
  public utilisateurRole;
  public adminSocieteRole;
  public societeStorage;
  public date_fin_abonnement_societe;
  public resNb;
  public afficheif=false;
  public routeHome=false;

  constructor(private auth: AuthService,
              private router: Router,
              private token: TokenService
  ) {
    this.adminRole = false;
    this.utilisateurRole = false;
  }
  dayDiff(d1, d2)
  {
    d1 = d1.getTime() / 86400000;
    d2 = d2.getTime() / 86400000;
    return new Number(d2 - d1 +1).toFixed(0);
  }

  ngOnInit(): void {
    if (!this.token.loggedIn()) {
      // this.router.navigateByUrl('/');
    } else {
      this.societeStorage = localStorage.getItem('societe');

      this.date_fin_abonnement_societe = localStorage.getItem('date_fin_abonnement_societe');
      setTimeout(() => {
        this.afficheif=this.token.loggedIn();
      }, 2000);

      if (this.date_fin_abonnement_societe){
        this.date_fin_abonnement_societe = new Date(this.date_fin_abonnement_societe);
        var today = new Date();
      this.resNb = this.dayDiff(today,this.date_fin_abonnement_societe);
      }
      this.rolesString = localStorage.getItem('roles');
      if (this.rolesString) {
        this.roles = this.rolesString.split(",");
      }

      this.user = localStorage.getItem('user');
    }
    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true && this.token.loggedIn;
      }
      if (this.roles.indexOf('utilisateur') !== -1) {
        this.utilisateurRole = true && this.token.loggedIn;
      }
      if (this.roles.indexOf('admin_societe') !== -1) {
        this.adminSocieteRole = true && this.token.loggedIn;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true && this.token.loggedIn;
      } else if (this.roles === 'utilisateur') {
        this.utilisateurRole = true && this.token.loggedIn;
      } else if (this.roles === 'admin_societe') {
        this.adminSocieteRole = true && this.token.loggedIn;
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
    if (localStorage.getItem('profileImg') && this.profileImg == null) {
      this.profileImg = localStorage.getItem('profileImg');
    } else {
      setTimeout(() => {
        console.log('hide');
        this.profileImg = localStorage.getItem('profileImg');
      }, 1000);
    }
  }

  public logout(event: MouseEvent): any {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    localStorage.removeItem('roles');
    localStorage.removeItem('user');
    localStorage.removeItem('profileImg');
    localStorage.removeItem('date_fin_abonnement_societe');
    localStorage.removeItem('societe');
    localStorage.removeItem('isNavbarTop');
    this.router.navigateByUrl('/login');

  }

  ngOnChanges(changes: SimpleChanges): void {


  }

  onActivate(event){
    if (this.profileImg == null) {
      this.profileImg = localStorage.getItem('profileImg');
    }

    this.routeHome=this.router.url != '/';

    console.log("here");
  }

}
