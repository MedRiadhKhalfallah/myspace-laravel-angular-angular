import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {RoueClientService} from "../service/roue-client.service";

@Component({
  selector: 'app-roue-client-list',
  templateUrl: './roue-client-list.component.html',
  styleUrls: ['./roue-client-list.component.css']
})
export class RoueClientListComponent implements OnInit {

  @Input() roueClientList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;

  public error;
  public roueClient;
  public loading;
  public roueClientId = null;
  public rolesString = null;
  public roles = [];
  public adminRole = false;

  constructor(private roueClientService: RoueClientService) {
  }

  ngOnInit(): void {
    this.rolesString = localStorage.getItem('roles');
    if (this.rolesString) {
      this.roles = this.rolesString.split(",");
    }
    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true ;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true ;
      }
    }

    // utiliser pour la supprision loading
    this.loading = Array(this.roueClientList.length).fill(null).map((_, i) => false);
  }

  showChildModal(roueClient): void {
    if (roueClient) {
      this.roueClient = roueClient;
      this.childModal.show();

    }
  }
  showChildModalView(roueClient): void {
    if (roueClient) {
      this.roueClient = roueClient;
      this.childModalView.show();

    }
  }
  hideChildModalView(): void {
    this.childModalView.hide();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalDelete(roueClient): void {
    if (roueClient) {
      this.roueClient = roueClient;
      this.roueClientId = roueClient.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.roueClientId = null;
  }

  public deleteRoueClient(id): void {
    this.hideChildModalDelete();
    console.log(id);
    if (id) {
      this.loading[id] = true;
      this.roueClientService.deleteRoueClient(id).subscribe(
        data => this.handleResponse(id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit();
  }

}
