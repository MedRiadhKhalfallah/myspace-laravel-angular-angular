import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ModeleService} from "../../modele/service/modele.service";
import {MarqueService} from "../../marque/service/marque.service";

@Component({
  selector: 'app-modele-create',
  templateUrl: './modele-create.component.html',
  styleUrls: ['./modele-create.component.css']
})
export class ModeleCreateComponent implements OnInit, OnChanges {

  @Input() modele: any;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    name: null,
    marque_id: null,
    etat: null
  };
  public error;
  public errors;
  public loading = false;
  public marqueList;
  public loadingMarque = false;

  constructor(private modeleService: ModeleService, private marqueService: MarqueService) {
  }

  ngOnInit(): void {
    this.loadMarqueData({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.modele) {
      this.form.name = this.modele.modele_name;
      this.form.etat = this.modele.etat;
      this.form.marque_id = this.modele.marque.id;
    }
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.modele) {
      return this.modeleService.updateModele(this.modele.modele_id, this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.modeleService.createModele(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.form = {
      name: null, marque_id: null, etat: true
    };
    if (this.modele) {
      return this.loadDataEdit.emit({});
    } else {
      return this.loadDataAjout.emit({});
    }
  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public loadMarqueData(searchobject: any): any {
    this.loadingMarque = true;
    this.marqueService.marqueSearchWithCriteria(searchobject).subscribe(
      data => this.handleMarqueResponse(data),
      error => this.handleMarqueError(error)
    );

  }

  public handleMarqueError(error): any {
    this.loadingMarque = false;
    this.error = error.error.message;
  }

  public handleMarqueResponse(data): any {
    this.loadingMarque = false;
    this.marqueList = data;
  }

}
