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
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
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

  public loadData(): any {
    this.loading=true;
    this.hideChildModal();
    this.userService.getUsers().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  public deleteItem(item): any {
    this.loading=true;
    if (confirm('Are you sure you want to delete user?')) {
      if (item) {
        this.profileService.deleteById(item.id).subscribe(
          data => this.handleResponseDelete(data),
          error => this.handleError(error)
        );
      }
    }
  }
  handleResponseDelete(data) {
    this.loadData();
  }


}
