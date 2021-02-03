import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {SocieteService} from "../service/societe.service";

@Component({
  selector: 'app-societe-list',
  templateUrl: './societe-list.component.html',
  styleUrls: ['./societe-list.component.css']
})
export class SocieteListComponent implements OnInit {

  @Input() societeList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;
  @ViewChild('childModalPayement', {static: true}) childModalPayement: ModalDirective;

  public error;
  public societe;
  public loading;
  public societeId = null;

  constructor(private societeService: SocieteService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.societeList.length).fill(null).map((_, i) => false);
  }

  showChildModal(societe): void {
    if (societe) {
      this.societe = societe;
      this.childModal.show();

    }
  }
  showChildModalPayement(societe): void {
    if (societe) {
      this.societe = societe;
      this.childModalPayement.show();

    }
  }

  hideChildModalPayement(): void {
    this.childModalPayement.hide();
  }
  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(societe): void {
    if (societe) {
      this.societe = societe;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(societe): void {
    if (societe) {
      this.societe = societe;
      this.societeId = societe.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.societeId = null;
  }

  public deleteMarque(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.societeService.deleteSocieteById(id).subscribe(
        data => this.handleResponse(data, id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
    this.error = error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit({});
  }

}
