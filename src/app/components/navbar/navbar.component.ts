import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
