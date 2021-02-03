import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {EtatService} from "../service/etat.service";
import {ProduitType} from "../../produit/produit-create/produit-create.component";
export interface EtatType {
  id: number,
  nom: string,
  order: number,
}

@Component({
  selector: 'app-etat-create',
  templateUrl: './etat-create.component.html',
  styleUrls: ['./etat-create.component.css']
})
export class EtatCreateComponent implements OnInit {

  @Input() etat: EtatType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;

  constructor(private etatService: EtatService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.etat) {
      this.etat = new class implements EtatType {
        id: number;
        nom: string;
        order: number;
      };
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.etat.id) {
      return this.etatService.updateEtat(this.etat).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.etatService.createEtat(this.etat).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {

    this.loading = false;
    this.error = null;
    this.errors = null;

    if (this.etat.id) {
      this.toastr.success('etat modifié avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataEdit.emit();
    } else {
      this.toastr.success('etat ajouté avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataAjout.emit();
    }

  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
