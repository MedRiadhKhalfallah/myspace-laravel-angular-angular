import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SocieteService} from "../service/societe.service";
import {ToastrService} from "ngx-toastr";
export interface SocieteType {
  id: number,
  nom: string,
  email: string,
  telephone_mobile: number,
  telephone_fix: number,
  reference_societe: string,
  date_fin_abonnement: string,
  type_abonnement: string,
  image_coverture_name: string,
  image_coverture_path: string,
  image_societe_name: string,
  image_societe_path: string,
}

@Component({
  selector: 'app-societe-payement',
  templateUrl: './societe-payement.component.html',
  styleUrls: ['./societe-payement.component.css'],

})
export class SocietePayementComponent implements OnInit {

  @Input() societe: SocieteType;
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public error;
  public errors;
  public loadingUpdate = false;
  constructor(private societeService: SocieteService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
/*
  this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.myDateValue = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
*/

  }

  /**
   *
   */
  public onSubmit(): any {
    this.loadingUpdate = true;
    if (this.societe.id) {
      delete this.societe.image_coverture_name;
      delete this.societe.image_coverture_path;
      delete this.societe.image_societe_name;
      delete this.societe.image_societe_path;
      delete this.societe.reference_societe;
      return this.societeService.updateSociete(this.societe).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  /**
   *
   * @param data
   */
  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data.data) {
      this.societe = data.data;
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

  /**
   *
   * @param error
   */
  public handleSubmitError(error): any {
    this.loadingUpdate = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
