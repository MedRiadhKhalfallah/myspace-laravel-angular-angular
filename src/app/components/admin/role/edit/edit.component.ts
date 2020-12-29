import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {RolesService} from "../../../../services/roles.service";
import {ProfileService} from "../../../../profile/service/profile.service";

// @ts-ignore
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
  @Input() item: any; // decorate the property with @Input()
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public loading = false;
  public loadingUpdate = false;
  public error;
  public roles;
  public rolesName = [];
  public rolesNameData = [];
  public tabUsersRoles;

  constructor(private roleService: RolesService,
              private profileService: ProfileService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.item.roles.forEach(role => {
        this.rolesNameData.push(role.name);
      });
    }
  }

  ngOnInit(): void {
    this.item={};
    this.loading = true;
    this.roleService.getRoles().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  handleError(error) {
    this.loading = false;
    this.loadingUpdate = false;
    this.error = error.error.message
  }

  handleResponse(data) {
    this.loading = false;
    this.roles = data;
    this.roles.forEach(role => {
      this.rolesName.push(role.role_name);
    });
  }

  updateCheckedOptions(role, event) {
    if (event.target.checked) {
      this.rolesNameData.push(role);
    } else {
      this.rolesNameData.splice(this.rolesNameData.indexOf(role),1);
    }
  }

  onSubmit() {
    this.loadingUpdate=true;
        this.profileService.updateUserRoles(this.rolesNameData, this.item.id).subscribe(
          data => this.handleResponseUpdate(data),
          error => this.handleError(error)
        );
  }

  handleResponseUpdate(data) {
    this.loadingUpdate = false;
    return this.loadDataEdit.emit();

  }

  findRole(role) {
    if (this.item.roles) {
      return this.item.roles.map(x => x.name).indexOf(role);
    }
  }
}
