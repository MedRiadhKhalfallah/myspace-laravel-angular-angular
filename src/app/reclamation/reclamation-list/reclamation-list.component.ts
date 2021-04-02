import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ReclamationService} from "../service/reclamation.service";

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {

  @Input() reclamationList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;

  public error;
  public reclamation;
  public loading;
  public reclamationId = null;
  public rolesString = null;
  public roles = [];
  public adminRole = false;
  public utilisateurRole = false;
  public adminSocieteRole = false;

  constructor(private reclamationService: ReclamationService) {
  }

  ngOnInit(): void {
    this.rolesString = localStorage.getItem('roles');
    if (this.rolesString) {
      this.roles = this.rolesString.split(",");
    }

    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true;
      }
      if (this.roles.indexOf('utilisateur') !== -1) {
        this.utilisateurRole = true;
      }
      if (this.roles.indexOf('admin_societe') !== -1) {
        this.adminSocieteRole = true;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true;
      } else if (this.roles === 'utilisateur') {
        this.utilisateurRole = true;
      } else if (this.roles === 'admin_societe') {
        this.adminSocieteRole = true;
      }

    }

    // utiliser pour la supprision loading
    this.loading = Array(this.reclamationList.length).fill(null).map((_, i) => false);
  }

  showChildModal(reclamation): void {
    if (reclamation) {
      this.reclamation = reclamation;
      this.childModal.show();

    }
  }
  showChildModalView(reclamation): void {
    if (reclamation) {
      this.reclamation = reclamation;
      this.childModalView.show();

    }
  }
  hideChildModalView(): void {
    this.childModalView.hide();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalDelete(reclamation): void {
    if (reclamation) {
      this.reclamation = reclamation;
      this.reclamationId = reclamation.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.reclamationId = null;
  }

  public deleteReclamation(id): void {
    this.hideChildModalDelete();
    console.log(id);
    if (id) {
      this.loading[id] = true;
      this.reclamationService.deleteReclamation(id).subscribe(
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
