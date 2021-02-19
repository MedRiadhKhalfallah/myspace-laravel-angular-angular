import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModeleService} from "../../modele/service/modele.service";
import {ToastrService} from "ngx-toastr";
import {NewProduitService} from "../service/new-produit.service";
import {SousCategorieService} from "../../sous-categorie/service/sous-categorie.service";

export interface NewProduitType {
  id: string,
  titre: string,
  description: string,
  quantite: string,
  seuil_min: string,
  prix: string,
  modele_id: string,
  sous_category_id: string
}

@Component({
  selector: 'app-new-produit-create',
  templateUrl: './new-produit-create.component.html',
  styleUrls: ['./new-produit-create.component.css']
})
export class NewProduitCreateComponent implements OnInit {

  @Input() newProduit: NewProduitType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingModele = false;
  public modeleListe = [];
  public loadingSousCategorie = false;
  public sousCategorieListe = [];
  public selectedFile: File = null;

  constructor(private newProduitService: NewProduitService,
              private modeleService: ModeleService,
              private sousCategorieService: SousCategorieService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.newProduit = new class implements NewProduitType {
      description: string;
      id: string;
      modele_id: string;
      prix: string;
      quantite: string;
      seuil_min: string;
      sous_category_id: string;
      titre: string;
    };
    this.loadingModele = true;
    this.loadingSousCategorie = true;
    this.modeleService.modeleSearchWithCriteria({}).subscribe(
      data => this.handleModeleSearchResponse(data),
      error => this.handleError(error));
    return this.sousCategorieService.sousCategorieSearchWithCriteria({}).subscribe(
      data => this.handleSousCategorieSearchResponse(data),
      error => this.handleError(error));

  }

  public handleModeleSearchResponse(data): any {
    this.loadingModele = false;
    this.modeleListe = data;
  }

  public handleSousCategorieSearchResponse(data): any {
    this.loadingSousCategorie = false;
    this.sousCategorieListe = data;
  }


  public onSubmit(): any {
    this.loading = true;
    const formData: FormData = new FormData();

    if (this.selectedFile) {
      formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    } else {
      formData.append('selectedFile', null);
    }
    formData.append('description', this.newProduit.description);
    formData.append('modele_id', this.newProduit.modele_id);
    formData.append('prix', this.newProduit.prix);
    formData.append('quantite', this.newProduit.quantite);
    formData.append('seuil_min', this.newProduit.seuil_min);
    formData.append('sous_category_id', this.newProduit.sous_category_id);
    formData.append('titre', this.newProduit.titre);

    if (this.newProduit.id) {
      return this.newProduitService.updateNewProduit(this.newProduit.id, formData).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleError(error)
      );
    } else {
      return this.newProduitService.createNewProduit(formData).subscribe(
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
    this.newProduit = data.data;
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

  public onFileSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
  }

}
