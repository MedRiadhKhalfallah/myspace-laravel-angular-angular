import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {CategorieService} from "../service/categorie.service";

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  @Input() categorieList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public categorie;
  public loading;
  public categorieId = null;

  constructor(private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.categorieList.length).fill(null).map((_, i) => false);
  }

  showChildModal(categorie): void {
    if (categorie) {
      this.categorie = categorie;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(categorie): void {
    if (categorie) {
      this.categorie = categorie;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(categorie): void {
    if (categorie) {
      this.categorie = categorie;
      this.categorieId = categorie.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.categorieId = null;
  }

  public deleteCategorie(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.categorieService.deleteCategorie(id).subscribe(
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
