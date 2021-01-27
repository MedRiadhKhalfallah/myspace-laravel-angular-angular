import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {EtatService} from "../../etat/service/etat.service";

@Component({
  selector: 'app-etat-list',
  templateUrl: './etat-list.component.html',
  styleUrls: ['./etat-list.component.css']
})
export class EtatListComponent implements OnInit {

  @Input() etatList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public etat;
  public loading;
  public etatId = null;

  constructor(private etatService: EtatService) {
  }

  ngOnInit(): void {
    // utiliser pour la supprision loading
    this.loading = Array(this.etatList.length).fill(null).map((_, i) => false);
  }

  showChildModal(etat): void {
    if (etat) {
      this.etat = etat;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalDelete(etat): void {
    if (etat) {
      this.etat = etat;
      this.etatId = etat.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.etatId = null;
  }

  public deleteEtat(id): void {
    this.hideChildModalDelete();
    console.log(id);
    if (id) {
      this.loading[id] = true;
      this.etatService.deleteEtat(id).subscribe(
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
