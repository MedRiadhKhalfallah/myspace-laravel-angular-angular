import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
import {ModalDirective, BsModalRef} from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public usersRoles;
  public tabUsersRoles = [];
  public error;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  currentItem = {};

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  handleError(error) {
    this.error = error.error.message;
    this.loading = false;
  }

  handleResponse(data) {
    this.usersRoles = data;

    this.usersRoles.forEach(user => {
      let tabUserRoles = [];
      user.roles.forEach(role => {
        tabUserRoles.push(role.name);
      });
      let tabUser = [{'nomPrenom': user.nom + ' ' + user.prenom}, {'email': user.email}, {'roles': tabUserRoles}];
      this.tabUsersRoles.push(tabUser);
    });
    this.loading = false;
  }

  showChildModal(data): void {
    this.currentItem = data;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.currentItem = null;
    this.childModal.hide();
  }

  public loadData(searchobject: any = {}): any {
    this.hideChildModal();
    this.loading = true;
    this.userService.userSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


}
