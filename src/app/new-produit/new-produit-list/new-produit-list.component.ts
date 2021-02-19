import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {NewProduitService} from "../service/new-produit.service";

@Component({
  selector: 'app-new-produit-list',
  templateUrl: './new-produit-list.component.html',
  styleUrls: ['./new-produit-list.component.css']
})
export class NewProduitListComponent implements OnInit {

  @Input() newProduitList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public newProduit;
  public loading;
  public newProduitId = null;

  constructor(private newProduitService: NewProduitService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.newProduitList.length).fill(null).map((_, i) => false);
  }

  showChildModal(newProduit): void {
    if (newProduit) {
      this.newProduit = newProduit;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(newProduit): void {
    if (newProduit) {
      this.newProduit = newProduit;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(newProduit): void {
    if (newProduit) {
      this.newProduit = newProduit;
      this.newProduitId = newProduit.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.newProduitId = null;
  }

  public deleteNewProduit(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.newProduitService.deleteNewProduit(id).subscribe(
        data => this.handleResponse(data, id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit({});
  }

}
