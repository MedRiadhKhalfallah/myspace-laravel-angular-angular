import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {SocieteService} from "../service/societe.service";
import {TypeActiviteService} from "../../type-activite/service/type-activite.service";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";

export interface SocieteType {
  id: number,
  nom: string,
  adresse: string,
  email: string,
  complement_adresse: string,
  code_postal: number,
  gouvernorat_id: string,
  delegation_id: string,
  telephone_mobile: number,
  telephone_fix: number,
  numero_tva: string,
  image_societe_path: string,
  image_societe_name: string,
  image_coverture_path: string,
  image_coverture_name: string,
  site_web: string,
  site_fb: string,
  description: string,
  notre_code_invitation: string,
  votre_code_invitation: string,
  reference_societe: string,
  type_activite_id: string,
  slug: string,
}

@Component({
  selector: 'app-societe-create',
  templateUrl: './societe-create.component.html',
  styleUrls: ['./societe-create.component.css']
})
export class SocieteCreateComponent implements OnInit {
  @Input() societe: SocieteType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public selectedFile: File = null;
  public error;
  public errors;
  public loading = false;
  public loadingUpdate = false;
  public first = true;
  public user;
  public listTypeActivite = [];
  public listGouvernorat = [];
  public listDelegation = [];

  constructor(private societeService: SocieteService,
              private typeActiviteService: TypeActiviteService,
              private toastr: ToastrService,
              private gouvernoratService: GouvernoratService,
              private delegationService: DelegationService
  ) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.gouvernoratService.gouvernoratSearchWithCriteria({}).subscribe(
      data => this.handleGetGouvernoratResponse(data),
      error => this.handleGetError(error)
    );
    this.typeActiviteService.getTypeActiviteList().subscribe(
      data => this.handleGetTypeActiviteResponse(data),
      error => this.handleGetError(error)
    );
    return this.societeService.getCurrentSociete().subscribe(
      data => this.handleGetSocieteResponse(data),
      error => this.handleGetSocieteError(error)
    );
  }

  public checkSlug(): any {
    this.societeService.checkSlug({'nom':this.societe.nom}).subscribe(
      data => this.handlecheckSlugResponse(data),
      error => this.handleGetError(error)
    );
  }
  public handlecheckSlugResponse(data): any {
    this.societe.slug = data.slug;
    console.log(data);
  }

  public findDelegation(): any {
    if (!this.first){
      this.societe.delegation_id=null;
    }
    this.first=false;
    this.delegationService.delegationSearchWithCriteria({'gouvernorat_id':this.societe.gouvernorat_id}).subscribe(
      data => this.handleGetDelegationResponse(data),
      error => this.handleGetError(error)
    );
  }
  public handleGetTypeActiviteResponse(data): any {
    this.listTypeActivite = data;
  }
  public handleGetGouvernoratResponse(data): any {
    this.listGouvernorat = data;
  }
  public handleGetDelegationResponse(data): any {
    this.listDelegation = data;
  }

  public handleGetError(error): any {
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data) {
      this.societe = data;
      if (this.societe.gouvernorat_id){
        this.findDelegation();
      }

    } else {
      this.societe = new class implements SocieteType {
        adresse: string;
        code_postal: number;
        complement_adresse: string;
        description: string;
        email: string;
        id: number;
        image_coverture_name: string;
        image_coverture_path: string;
        image_societe_name: string;
        image_societe_path: string;
        nom: string;
        numero_tva: string;
        site_fb: string;
        site_web: string;
        telephone_fix: number;
        telephone_mobile: number;
        gouvernorat_id: string;
        delegation_id: string;
        notre_code_invitation: string;
        votre_code_invitation: string;
        reference_societe: string;
        type_activite_id: string;
        slug: string;

      };
      this.societe.reference_societe = String(Date.now());
      this.societe.notre_code_invitation = this.generateUniqueString();

    }
    this.loading = false;
  }

  public generateUniqueString() {
    var ts = String(new Date().getTime()),
      i = 0,
      out = '';

    for (i = 0; i < ts.length; i += 2) {
      out += Number(ts.substr(i, 2)).toString(36);
    }
    return out;
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }


  public onSubmit(): any {
    this.loadingUpdate = true;
    delete this.societe.image_coverture_name;
    delete this.societe.image_coverture_path;
    delete this.societe.image_societe_name;
    delete this.societe.image_societe_path;
    if (this.societe.id) {
      delete this.societe.notre_code_invitation;
      delete this.societe.reference_societe;
      return this.societeService.updateSociete(this.societe).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    } else {
      return this.societeService.createSociete(this.societe).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data.data) {
      this.societe = data.data;
      localStorage.setItem('date_fin_abonnement_societe', data.data.date_fin_abonnement);
      localStorage.setItem('societe', String(true));
    }
    this.toastr.success(data.message, 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loadingUpdate = false;
  }

  public handleSubmitError(error): any {
    this.loadingUpdate = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public onFileSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loading = true;
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.societeService.updateImageProfile(this.societe.id, formData).subscribe(
      data => this.handleImageSocieteResponse(data),
      error => this.handleImageSocieteError(error)
    );

  }

  public handleImageSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('Image modifie avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
    return this.societeService.getCurrentSociete().subscribe(
      data => this.handleGetSocieteResponse(data),
      error => this.handleGetSocieteError(error)
    );

  }

  public handleImageSocieteError(error): any {
    this.error = error.error.message;
    this.errors = error.error.errors;
    this.loading = false;
  }

  public onFileCovertureSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loading = true;
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.societeService.updateImageCoverture(this.societe.id, formData).subscribe(
      data => this.handleImageSocieteResponse(data),
      error => this.handleImageSocieteError(error)
    );
  }

}
