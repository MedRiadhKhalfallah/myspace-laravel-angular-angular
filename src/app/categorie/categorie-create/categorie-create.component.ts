import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {CategorieService} from "../service/categorie.service";
import {ProduitType} from "../../produit/produit-create/produit-create.component";

export interface CategorieType {
  id: number,
  nom: string,
  order: string,
  description: string,
  created_at: string,
  societe: string,
  sousCategories: string,
}

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {

  @Input() categorie: CategorieType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;

  constructor(private categorieService: CategorieService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.categorie) {
      this.categorie = new class implements CategorieType {
        description: string;
        id: number;
        nom: string;
        order: string;
        created_at: string;
        societe: string;
        sousCategories: string;
      };
    }
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.categorie.id) {
      delete this.categorie.created_at;
      delete this.categorie.societe;
      delete this.categorie.sousCategories;
      return this.categorieService.updateCategorie(this.categorie).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleError(error)
      );
    } else {
      return this.categorieService.createCategorie(this.categorie).subscribe(
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
    this.categorie = data.data;
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
