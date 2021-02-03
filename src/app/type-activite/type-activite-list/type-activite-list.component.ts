import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {TypeActiviteService} from "../service/type-activite.service";

@Component({
  selector: 'app-type-activite-list',
  templateUrl: './type-activite-list.component.html',
  styleUrls: ['./type-activite-list.component.css']
})
export class TypeActiviteListComponent implements OnInit {

  @Input() typeActiviteList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public typeActivite;
  public loading;
  public typeActiviteId = null;

  constructor(private typeActiviteService: TypeActiviteService) {
  }

  ngOnInit(): void {
    // utiliser pour la supprision loading
    this.loading = Array(this.typeActiviteList.length).fill(null).map((_, i) => false);
  }

  showChildModal(typeActivite): void {
    if (typeActivite) {
      this.typeActivite = typeActivite;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalDelete(typeActivite): void {
    if (typeActivite) {
      this.typeActivite = typeActivite;
      this.typeActiviteId = typeActivite.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.typeActiviteId = null;
  }

  public deleteTypeActivite(id): void {
    this.hideChildModalDelete();
    console.log(id);
    if (id) {
      this.loading[id] = true;
      this.typeActiviteService.deleteTypeActivite(id).subscribe(
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
