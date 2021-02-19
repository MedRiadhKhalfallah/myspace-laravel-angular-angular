import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {CategorieService} from "../../categorie/service/categorie.service";
import {SousCategorieService} from "../service/sous-categorie.service";

@Component({
  selector: 'app-sous-categorie-list',
  templateUrl: './sous-categorie-list.component.html',
  styleUrls: ['./sous-categorie-list.component.css']
})
export class SousCategorieListComponent implements OnInit {

  @Input() sousCategorieList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public sousCategorie;
  public loading;
  public sousCategorieId = null;

  constructor(private sousCategorieService: SousCategorieService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.sousCategorieList.length).fill(null).map((_, i) => false);
  }

  showChildModal(sousCategorie): void {
    if (sousCategorie) {
      this.sousCategorie = sousCategorie;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(sousCategorie): void {
    if (sousCategorie) {
      this.sousCategorie = sousCategorie;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(sousCategorie): void {
    if (sousCategorie) {
      this.sousCategorie = sousCategorie;
      this.sousCategorieId = sousCategorie.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.sousCategorieId = null;
  }

  public deleteSousCategorie(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.sousCategorieService.deleteSousCategorie(id).subscribe(
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
