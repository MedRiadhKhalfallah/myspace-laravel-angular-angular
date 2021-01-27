import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduitService} from "../../produit/service/produit.service";
import {ToastrService} from "ngx-toastr";
import {SocieteService} from "../../societe/service/societe.service";
import {EtatService} from "../../etat/service/etat.service";

export interface ProduitType {
  id: number,
  nom: string,
  nom_client: string,
  telephone: string,
  email: string,
  etat_id: string,
  reference: string,
  description_agent: string,
  description_client: string,
  client_id: string,
  created_at: string,
  societe: unknown
}

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  @Input() produit: ProduitType;
  @Input() produitResultat: ProduitType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public error;
  public errors;
  public societe;
  public listEtat;
  public loading = false;

  constructor(private etatService: EtatService,private produitService: ProduitService, private societeService: SocieteService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.etatService.getEtatList().subscribe(
      data => this.handleGetEtatResponse(data),
      error => this.handleSubmitError(error)
    );
    if (!this.produit) {
      this.produit = new class implements ProduitType {
        client_id: string;
        created_at: string;
        description_agent: string;
        description_client: string;
        email: string;
        etat_id: string;
        id: number;
        nom: string;
        nom_client: string;
        reference: string;
        telephone: string;
        societe: unknown;
      };
      this.produit.reference = String(Date.now());
      return this.societeService.getCurrentSociete().subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleSubmitError(error)
      );

    }
  }

  public onSubmit(): any {
    this.loading = true;
    if (this.produit.id) {
      return this.produitService.updateProduit(this.produit).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleSubmitError(error)
      );
    } else {
      return this.produitService.createProduit(this.produit).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success(data.message, 'succe message',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
    this.produitResultat = data.data;
    // this.printPDF();
  }

  public handleUpdateResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('produit modifie avec succée', 'succe message',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
  }

  public handleGetSocieteResponse(data): any {
    this.societe = data;
    this.loading = false;
  }
  public handleGetEtatResponse(data): any {
    this.listEtat = data;
    this.loading = false;
  }

  public handleSubmitError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }


}
