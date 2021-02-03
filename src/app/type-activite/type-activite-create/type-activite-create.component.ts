import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {TypeActiviteService} from "../service/type-activite.service";
export interface TypeActiviteType {
  id: number,
  nom: string,
  coleur: string,
  iconUrl: string,
  map_legende: string,
  map_description: string
}

@Component({
  selector: 'app-type-activite-create',
  templateUrl: './type-activite-create.component.html',
  styleUrls: ['./type-activite-create.component.css']
})
export class TypeActiviteCreateComponent implements OnInit {

  @Input() typeActivite: TypeActiviteType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;

  constructor(private typeActiviteService: TypeActiviteService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.typeActivite) {
      this.typeActivite = new class implements TypeActiviteType {
        id: number;
        nom: string;
        coleur: string;
        iconUrl: string;
        map_legende: string;
        map_description: string
      };
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.typeActivite.id) {
      return this.typeActiviteService.updateTypeActivite(this.typeActivite).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.typeActiviteService.createTypeActivite(this.typeActivite).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {

    this.loading = false;
    this.error = null;
    this.errors = null;

    if (this.typeActivite.id) {
      this.toastr.success('typeActivite modifié avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataEdit.emit();
    } else {
      this.toastr.success('typeActivite ajouté avec succée', 'Opération effectuée avec succès',
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
