import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {ModalDirective, BsModalRef} from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';
import {UserServiceService} from "../../services/user-service.service";

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
  public first = true;
  public disableShowMore = false;
  public offset;
  public loadingShowMore = false;
  public limit;
  public searchobject;

  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  currentItem = {};

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.limit = 10;
    this.offset = 0;
    this.loadData();
  }

  handleError(error) {
    this.error = error.error.message;
    this.loading = false;
  }

  handleResponse(data) {
    this.loading = false;
    this.first = false;
    if (this.loadingShowMore) {
      this.usersRoles = this.usersRoles.concat(data);
    } else {
      this.usersRoles = data;
    }
    if (data.length < this.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;


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

  public showMore(): any {
    this.loadingShowMore = true;
    this.offset = this.usersRoles.length;
    this.loadData(this.searchobject);
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
    this.searchobject = searchobject;
    searchobject.limit = this.limit;
    searchobject.offset = this.offset;

    this.loading = true;
    this.userService.userSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


}
