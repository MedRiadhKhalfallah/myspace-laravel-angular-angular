import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ProduitUtilisateurService} from "../service/produit-utilisateur.service";
import {CategorieService} from "../../categorie/service/categorie.service";
import {MarqueService} from "../../marque/service/marque.service";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";

export interface ProduitUtilisateurType {
  id: string,
  titre: string,
  description: string,
  prix: string,
  modele_id: number,
  marque_id: number,
  gouvernorat_id: string,
  delegation_id: string,
  adresse: string,
  complement_adresse: string,
  sous_category_id: string,
  category_id: string,
  reference: string,
  etat_produit: string,
  etat: number,
  sous_category,
  modele,
  autre_marque,
  autre_modele,
  autre_gouvernorat,
  autre_delegation,
  typeTransaction,
  chambres,
  superficie,
  couleur,
  typeCarrosserie,
  boite,
  cylindre,
  kilometrage,
  annee,
  carburant,
  puissanceFiscale
}

@Component({
  selector: 'app-produit-utilisateur-create',
  templateUrl: './produit-utilisateur-create.component.html',
  styleUrls: ['./produit-utilisateur-create.component.css']
})
export class ProduitUtilisateurCreateComponent implements OnInit {

  @Input() produitUtilisateur: ProduitUtilisateurType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingModele = false;
  public modeleListe = [];
  public marqueListe = [];
  public loadingSousCategorie = false;
  public sousCategorieListe = [];
  public categorieListe = [];
  public selectedFile: File[] = null;
  Nouveau = 'Nouveau';
  Utilise = 'Utilisé';
  Reconditionne = 'Reconditionné';
  Vendre = 'Vendre';
  Louer = 'Louer';
  public first = true;
  public listGouvernorat = [];
  public listDelegation = [];

  constructor(private produitUtilisateurService: ProduitUtilisateurService,
              private marqueService: MarqueService,
              private categorieService: CategorieService,
              private toastr: ToastrService,
              private gouvernoratService: GouvernoratService,
              private delegationService: DelegationService
  ) {
  }

  ngOnInit(): void {
    if (this.produitUtilisateur) {
      console.log(this.produitUtilisateur);
      this.produitUtilisateur.category_id = this.produitUtilisateur.sous_category.category.id;
      this.produitUtilisateur.marque_id = this.produitUtilisateur.modele.marque.id;
    } else {
      this.produitUtilisateur = new class implements ProduitUtilisateurType {
        description: string;
        etat: number;
        etat_produit: string;
        id: string;
        modele_id: number;
        marque_id: number;
        prix: string;
        reference: string;
        sous_category_id: string;
        category_id: string;
        titre: string;
        gouvernorat_id: string;
        delegation_id: string;
        adresse: string;
        complement_adresse: string;
        sous_category;
        modele;
        autre_marque;
        autre_modele;
        autre_gouvernorat;
        autre_delegation;
        typeTransaction;
        chambres;
        superficie;
        couleur;
        typeCarrosserie;
        boite;
        cylindre;
        kilometrage;
        annee;
        carburant;
        puissanceFiscale;

      };
    }
    this.loadingModele = true;
    this.loadingSousCategorie = true;
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

  public findSousCategorie(): any {
    this.categorieListe.forEach(categorie => {
      if (this.produitUtilisateur.category_id == categorie.id) {
        this.sousCategorieListe = categorie.sousCategories
      }
    });
  }

  public findModele(): any {
    this.marqueListe.forEach(marque => {
      if (this.produitUtilisateur.marque_id == marque.id) {
        this.modeleListe = marque.modeles
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


  public onSubmit(): any {
    var autoriseAcion = false;
    this.loading = true;
    const formData: FormData = new FormData();

    var filesLength = 0;
    if (this.selectedFile) {
      filesLength = this.selectedFile.length
    }
    if (filesLength != 0) {
      if (filesLength > 5) {
        alert("Vous pouvez ajouter au maximum 5 images");
        autoriseAcion = false;
        this.loading = false;
      } else {
        autoriseAcion = true;
        for (let i = 0; i < filesLength; i++) {
          formData.append('selectedFile[]', this.selectedFile[i], this.selectedFile[i].name);
        }
      }
    } else {
      if (this.produitUtilisateur.id) {
        autoriseAcion = true;
        formData.append('selectedFile', null);
      } else {
        autoriseAcion = false;
        this.loading = false;
        alert("image est un champ obligatoire");
      }
    }
    if (this.produitUtilisateur.description) {
      formData.append('description', this.produitUtilisateur.description);
    }
    formData.append('prix', this.produitUtilisateur.prix);
    formData.append('sous_category_id', this.produitUtilisateur.sous_category_id);
    formData.append('category_id', this.produitUtilisateur.category_id);
    formData.append('titre', this.produitUtilisateur.titre);
    formData.append('adresse', this.produitUtilisateur.adresse);
    formData.append('quantite', "1");
    formData.append('prix_achat', "0");

    if (this.produitUtilisateur.typeTransaction) {
      formData.append('typeTransaction', this.produitUtilisateur.typeTransaction);
    }

    if (this.produitUtilisateur.chambres) {
      formData.append('chambres', this.produitUtilisateur.chambres);
    }

    if (this.produitUtilisateur.superficie) {
      formData.append('superficie', this.produitUtilisateur.superficie);
    }
    if (this.produitUtilisateur.couleur) {
      formData.append('couleur', this.produitUtilisateur.couleur);
    }

    if (this.produitUtilisateur.typeCarrosserie) {
      formData.append('typeCarrosserie', this.produitUtilisateur.typeCarrosserie);
    }

    if (this.produitUtilisateur.boite) {
      formData.append('boite', this.produitUtilisateur.boite);
    }

    if (this.produitUtilisateur.cylindre) {
      formData.append('cylindre', this.produitUtilisateur.cylindre);
    }
    if (this.produitUtilisateur.kilometrage) {
      formData.append('kilometrage', this.produitUtilisateur.kilometrage);
    }

    if (this.produitUtilisateur.annee) {
      formData.append('annee', this.produitUtilisateur.annee);
    }

    if (this.produitUtilisateur.carburant) {
      formData.append('carburant', this.produitUtilisateur.carburant);
    }


    if (this.produitUtilisateur.puissanceFiscale) {
      formData.append('puissanceFiscale', this.produitUtilisateur.puissanceFiscale);
    }


    if (this.produitUtilisateur.complement_adresse) {
      formData.append('complement_adresse', this.produitUtilisateur.complement_adresse);
    }
    formData.append('reference', this.produitUtilisateur.reference);
    if (this.produitUtilisateur.etat_produit) {
      formData.append('etat_produit', this.produitUtilisateur.etat_produit);
    }
    if (this.produitUtilisateur.gouvernorat_id != '0') {
      formData.append('gouvernorat_id', this.produitUtilisateur.gouvernorat_id);
    } else {
      formData.append('gouvernorat_id', '0');
      formData.append('autre_gouvernorat', this.produitUtilisateur.autre_gouvernorat);

    }
    if (this.produitUtilisateur.delegation_id) {
      formData.append('delegation_id', this.produitUtilisateur.delegation_id);
    } else {
      formData.append('delegation_id', '0');
      formData.append('autre_delegation', this.produitUtilisateur.autre_delegation);

    }
    if (this.produitUtilisateur.modele_id == 0) {
      formData.append('modele_id', '0');
      formData.append('autre_modele', this.produitUtilisateur.autre_modele);
    } else if(this.produitUtilisateur.modele_id > 0) {
      formData.append('modele_id', this.produitUtilisateur.modele_id.toString());
    }

    if (this.produitUtilisateur.marque_id == 0) {
      formData.append('marque_id', '0');
      formData.append('autre_marque', this.produitUtilisateur.autre_marque);
    } else if(this.produitUtilisateur.marque_id > 0) {
      formData.append('marque_id', this.produitUtilisateur.marque_id.toString());
    }
    formData.append('etat', '1');
    if (this.produitUtilisateur.id) {
      if (autoriseAcion) {
        return this.produitUtilisateurService.updateProduitUtilisateur(this.produitUtilisateur.id, formData).subscribe(
          data => this.handleUpdateResponse(data),
          error => this.handleError(error)
        );
      }
    } else {
      if (autoriseAcion) {
        return this.produitUtilisateurService.createProduitUtilisateur(formData).subscribe(
          data => this.handleSubmitResponse(data),
          error => this.handleError(error)
        );
      }
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
    this.produitUtilisateur = data.data;
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
    this.selectedFile = <File[]>event.target.files;
  }

  public findDelegation(): any {
    if (!this.first) {
      this.produitUtilisateur.delegation_id = null;
    }
    this.first = false;
    this.delegationService.delegationSearchWithCriteria({'gouvernorat_id': this.produitUtilisateur.gouvernorat_id}).subscribe(
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

}
