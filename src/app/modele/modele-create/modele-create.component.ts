import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ModeleService} from "../service/modele.service";
import {MarqueService} from "../../marque/service/marque.service";
export interface ModeleType {
  id: number,
  nom: string,
  description: string,
  marque_id: string
}

@Component({
  selector: 'app-modele-create',
  templateUrl: './modele-create.component.html',
  styleUrls: ['./modele-create.component.css']
})
export class ModeleCreateComponent implements OnInit {

  @Input() modele: ModeleType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public loadingMarque = false;
  public marqueListe = [];

  constructor(private modeleService: ModeleService,
              private marqueService: MarqueService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.modele= new class implements ModeleType {
      description: string;
      id: number;
      marque_id: string;
      nom: string;
    };
    this.loadingMarque=true;
    return this.marqueService.marqueSearchWithCriteria({}).subscribe(
      data => this.handleMarqueSearchResponse(data),
      error => this.handleError(error));

  }

  public handleMarqueSearchResponse(data): any {
    this.loadingMarque = false;
    this.marqueListe = data;
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.modele.id) {
      return this.modeleService.updateModele(this.modele).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleError(error)
      );
    } else {
      return this.modeleService.createModele(this.modele).subscribe(
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
    this.modele = data.data;
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
