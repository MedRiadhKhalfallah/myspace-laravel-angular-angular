import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  public error;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error
  }

  handleResponse(data) {
    this.users = data;
  }

}
