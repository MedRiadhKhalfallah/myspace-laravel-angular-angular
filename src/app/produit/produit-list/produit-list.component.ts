import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProduitService} from "../../produit/service/produit.service";
import jsPDF from 'jspdf';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {


  @Input() produitList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public produit;
  public loading;
  public produitId = null;

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.produitList.length).fill(null).map((_, i) => false);
  }

  showChildModal(produit): void {
    if (produit) {
      this.produit = produit;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(produit): void {
    if (produit) {
      this.produit = produit;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(produit): void {
    if (produit) {
      this.produit = produit;
      this.produitId = produit.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.produitId = null;
  }

  public deleteMarque(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.produitService.deleteProduitById(id).subscribe(
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
