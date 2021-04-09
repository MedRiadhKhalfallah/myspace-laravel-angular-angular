import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {CategorieService} from "../../categorie/service/categorie.service";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";
import {NotificationService} from "../service/notification.service";

export interface NotificationType {
  id: number,
  category_id: number,
  sous_category_id: number,
  prix_min: number,
  prix_max: number,
  gouvernorat_id: number,
  delegation_id: number,
  titre: string,
  nom: string
}

@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css']
})
export class NotificationCreateComponent implements OnInit {

  @Input() notification: NotificationType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingModele = false;
  public loadingSousCategorie = false;
  public sousCategorieListe = [];
  public categorieListe = [];
  public first = true;
  public listGouvernorat = [];
  public listDelegation = [];

  constructor(private notificationService: NotificationService,
              private categorieService: CategorieService,
              private toastr: ToastrService,
              private gouvernoratService: GouvernoratService,
              private delegationService: DelegationService
  ) {
  }

  ngOnInit(): void {
    this.notification = new class implements NotificationType {
      id: number;
      category_id: number;
      sous_category_id: number;
      prix_min: number;
      prix_max: number;
      gouvernorat_id: number;
      delegation_id: number;
      titre: string;
      nom: string
    };

    this.loadingModele = true;
    this.loadingSousCategorie = true;
    this.gouvernoratService.gouvernoratSearchWithCriteria({}).subscribe(
      data => this.handleGetGouvernoratResponse(data),
      error => this.handleError(error)
    );
    return this.categorieService.categorieSearchWithCriteria({}).subscribe(
      data => this.handleCategorieSearchResponse(data),
      error => this.handleError(error));

  }

  public findSousCategorie(): any {
    this.categorieListe.forEach(categorie => {
      if (this.notification.category_id == categorie.id) {
        this.sousCategorieListe = categorie.sousCategories
      }
    });
  }

  public handleCategorieSearchResponse(data): any {
    this.loadingSousCategorie = false;
    this.categorieListe = data;
    this.findSousCategorie();
  }


  public onSubmit(): any {
    this.loading = true;
    this.notificationService.createNotification(this.notification).subscribe(
      data => this.handleSubmitResponse(data),
      error => this.handleError(error)
    );
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
    this.notification = data.data;
    return this.loadDataAjout.emit({});
  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public findDelegation(): any {
    if (!this.first) {
      this.notification.delegation_id = null;
    }
    this.first = false;
    this.delegationService.delegationSearchWithCriteria({'gouvernorat_id': this.notification.gouvernorat_id}).subscribe(
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
