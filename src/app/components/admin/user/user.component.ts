import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProfileService} from "../../../profile/service/profile.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  public error;
  public loading=true;
  public userId=null;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  currentItem = {};

  constructor(private userService: UserServiceService, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  handleError(error) {
    this.loading=false;
    this.error = error.error.message
  }

  handleResponse(data) {
    this.loading=false;
    this.users = data;
  }

  showChildModal(data): void {
    this.currentItem = data;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.currentItem = null;
    this.childModal.hide();
  }

  public loadData(searchobject: any={}): any {
    this.loading=true;
    this.hideChildModal();
    this.userService.userSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }
  showChildModalDelete(user): void {
    if (user) {
      this.userId = user.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.userId = null;
  }

  public deleteItem(id): any {
    this.childModalDelete.hide();
    if (id) {
        this.loading=true;
        this.profileService.deleteById(id).subscribe(
          data => this.handleResponseDelete(data),
          error => this.handleError(error)
        );
      }
  }

  handleResponseDelete(data) {
    this.loadData({});
  }


}
