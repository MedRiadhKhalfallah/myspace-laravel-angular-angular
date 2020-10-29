import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
// import {MarqueService} from "../../../services/marque.service";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public usersRoles;
  public tabUsersRoles = [];
  public error;

  constructor(private userService: UserServiceService
              // ,private marqueService: MarqueService
  ) {
  }

  ngOnInit(): void {
/*
    this.marqueService.deleteMarque().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
*/
/*
    this.marqueService.getMarqueList().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
*/
/*
  ngOnInit(): void {
    this.marqueService.getMarque().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
*/
/*
    this.marqueService.createMarque().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
*/
/*
    this.marqueService.updateMarque().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
*/
    this.userService.getUsers().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.message
  }

  handleResponse(data) {
    this.usersRoles = data;

    this.usersRoles.forEach(user => {
      let tabUserRoles=[];
      user.roles.forEach(role => {
        tabUserRoles.push(role.name);
      });
      let tabUser = [{'nomPrenom':user.nom + ' ' + user.prenom},{'email':user.email},{'roles':tabUserRoles}];
      this.tabUsersRoles.push(tabUser);
    });
  }

}
