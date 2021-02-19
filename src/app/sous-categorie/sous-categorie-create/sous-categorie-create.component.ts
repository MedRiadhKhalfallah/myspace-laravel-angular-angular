import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {SousCategorieService} from "../service/sous-categorie.service";
import {CategorieService} from "../../categorie/service/categorie.service";
export interface SousCategorieType {
  id: number,
  nom: string,
  order: string,
  description: string,
  category_id: string
}

@Component({
  selector: 'app-sous-categorie-create',
  templateUrl: './sous-categorie-create.component.html',
  styleUrls: ['./sous-categorie-create.component.css']
})
export class SousCategorieCreateComponent implements OnInit {

  @Input() sousCategorie: SousCategorieType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingCategorie = false;
  public categorieListe = [];

  constructor(private sousCategorieService: SousCategorieService,
              private categorieService: CategorieService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.sousCategorie) {
      this.sousCategorie = new class implements SousCategorieType {
        category_id: string;
        description: string;
        id: number;
        nom: string;
        order: string;
      }
    }

    this.loadingCategorie=true;
    return this.categorieService.categorieSearchWithCriteria({}).subscribe(
      data => this.handleCategorieSearchResponse(data),
      error => this.handleError(error));

  }

  public handleCategorieSearchResponse(data): any {
    this.loadingCategorie = false;
    this.categorieListe = data;
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.sousCategorie.id) {
      return this.sousCategorieService.updateSousCategorie(this.sousCategorie).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleError(error)
      );
    } else {
      return this.sousCategorieService.createSousCategorie(this.sousCategorie).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleError(error)
      );
    }
  }
  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success(data.message, 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
    this.sousCategorie = data.data;
    return this.loadDataAjout.emit({});
  }

  public handleUpdateResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('produit modifie avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
    return this.loadDataEdit.emit({});
  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
