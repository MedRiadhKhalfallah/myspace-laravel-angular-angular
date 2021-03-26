import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MarqueService} from "../../marque/service/marque.service";
import {CategorieService} from "../../categorie/service/categorie.service";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";

@Component({
  selector: 'app-produit-utilisateur-search',
  templateUrl: './produit-utilisateur-search.component.html',
  styleUrls: ['./produit-utilisateur-search.component.css']
})
export class ProduitUtilisateurSearchComponent implements OnInit {

  @Output() searchProduitUtilisateur: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingModele = false;
  public modeleListe = [];
  public marqueListe = [];
  public loadingSousCategorie = false;
  public sousCategorieListe = [];
  public categoryId;
  public marqueId;
  public categorieListe = [];
  Nouveau = 'Nouveau';
  Utilise = 'Utilisé';
  Reconditionne = 'Reconditionné';
  public first = true;
  public listGouvernorat = [];
  public listDelegation = [];

  public form = {
    'titre': null,
    'prix_min': null,
    'prix_max': null,
    'facilite': null,
    'marque': null,
    'modele_id': null,
    'etat_produit': null,
    'category': null,
    'sous_category_id': null,
    'delegation_id': null,
    'gouvernorat_id': null,
    'limit': 10,
    'offset': 0
  };

  constructor(private marqueService: MarqueService,
              private categorieService: CategorieService,
              private gouvernoratService: GouvernoratService,
              private delegationService: DelegationService) {
  }

  ngOnInit(): void {
    this.gouvernoratService.gouvernoratSearchWithCriteria({}).subscribe(
      data => this.handleGetGouvernoratResponse(data),
      error => this.handleError(error)
    );

    this.marqueService.marqueSearchWithCriteria({}).subscribe(
      data => this.handleMarqueSearchResponse(data),
      error => this.handleError(error));
    return this.categorieService.categorieSearchWithCriteria({}).subscribe(
      data => this.handleCategorieSearchResponse(data),
      error => this.handleError(error));

  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    this.form.limit=10;
    this.form.offset=0;
    return this.searchProduitUtilisateur.emit(this.form);
  }
  public resetForm(): any {
  this.form.titre = null;
  this.form.delegation_id = null;
  this.form.gouvernorat_id = null;
  this.form.etat_produit = null;
  this.form.prix_min = null;
  this.form.prix_max = null;
  this.form.facilite = null;
  this.form.modele_id = null;
  this.form.sous_category_id = null;
  this.form.limit = 10;
  this.form.offset = 0;
  this.categoryId = null;
  this.marqueId = null;
  }

  public findDelegation(): any {
    if (!this.first){
      this.form.delegation_id=null;
    }
    this.first=false;
    this.delegationService.delegationSearchWithCriteria({'gouvernorat_id':this.form.gouvernorat_id}).subscribe(
      data => this.handleGetDelegationResponse(data),
      error => this.handleError(error)
    );
  }
  public handleGetGouvernoratResponse(data): any {
    this.listGouvernorat = data;
    this.findDelegation();
  }
  public handleGetDelegationResponse(data): any {
    this.listDelegation = data;
  }

  public findSousCategorie(): any {
    this.categorieListe.forEach(categorie => {
      if(this.categoryId == categorie.id){
        this.sousCategorieListe=categorie.sousCategories
      }
    });
  }
  public findModele(): any {
    this.marqueListe.forEach(marque => {
      if(this.marqueId == marque.id){
        this.modeleListe=marque.modeles
      }
    });
  }
  public handleMarqueSearchResponse(data): any {
    this.loadingModele = false;
    this.marqueListe = data;
    this.findModele();
  }

  public handleCategorieSearchResponse(data): any {
    this.loadingSousCategorie = false;
    this.categorieListe = data;
    this.findSousCategorie();
  }
  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
