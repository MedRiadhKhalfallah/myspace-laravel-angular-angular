import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarqueService} from "../../marque/service/marque.service";
import {CategorieService} from "../../categorie/service/categorie.service";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";

@Component({
  selector: 'app-produits-search',
  templateUrl: './produits-search.component.html',
  styleUrls: ['./produits-search.component.css']
})
export class ProduitsSearchComponent implements OnInit {

  @Output() searchProduit: EventEmitter<any> = new EventEmitter<any>();
  @Input() sousCategorie_id;
  @Input() categorie_id;
  @Input() marque_id;
  @Input() modele_id;
  @Input() delegation_id;
  @Input() gouvernorat_id;
  @Input() titre;

  public error;
  public errors;
  public loading = false;
  public loadingModele = false;
  public modeleListe = [];
  public marqueListe = [];
  public loadingSousCategorie = false;
  public sousCategorieListe = [];
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
    'marque_id': null,
    'modele_id': null,
    'etat_produit': null,
    'sous_category_id': null,
    'category_id': null,
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
    if(this.categorie_id){
      this.form.category_id=this.categorie_id;
      if(this.sousCategorie_id){
        this.form.sous_category_id=this.sousCategorie_id;
      }
    }
    if(this.marque_id){
      this.form.marque_id=this.marque_id;
      if(this.modele_id){
        this.form.modele_id=this.modele_id;
      }
    }
    if(this.gouvernorat_id){
      this.form.gouvernorat_id=this.gouvernorat_id;
      if(this.delegation_id){
        this.form.delegation_id=this.delegation_id;
      }
    }
    if(this.titre){
      this.form.titre=this.titre;
    }

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
    return this.searchProduit.emit(this.form);
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
    this.form.category_id = null;
    this.form.marque_id = null;
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
      if(this.form.category_id == categorie.id){
        this.sousCategorieListe=categorie.sousCategories
      }
    });
  }
  public findModele(): any {
    this.marqueListe.forEach(marque => {
      if(this.form.marque_id == marque.id){
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
