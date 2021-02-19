import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MarqueService} from '../service/marque.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-marque-create',
  templateUrl: './marque-create.component.html',
  styleUrls: ['./marque-create.component.css']
})
export class MarqueCreateComponent implements OnInit, OnChanges {
  @Input() marque: any;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    nom: null,
    selectedFile: null,
    etat: null
  };
  public error;
  public errors;
  public loading = false;
  // public selectedFile: File[] = null;
  public selectedFile: File = null;

  constructor(private marqueService: MarqueService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.marque) {
      this.form.nom = this.marque.nom;
    }
  }


  public onSubmit(): any {
    this.loading = true;
    const formData: FormData = new FormData();
    /*
        const filesLength = this.selectedFile.length;
        for (let i = 0; i < filesLength; i++) {
          formData.append('selectedFile[]', this.selectedFile[i], this.selectedFile[i].name);
        }
    */
    if (this.selectedFile) {
      formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    } else {
      formData.append('selectedFile', null);
    }
    formData.append('nom', this.form.nom);
    formData.append('etat', 'true');
    if (this.marque) {
      return this.marqueService.updateMarque(this.marque.id, formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.marqueService.createMarque(formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {

    this.loading = false;
    this.form = {
      nom: null, selectedFile: null, etat: true
    };
    this.error = null;
    this.errors = null;

    if (this.marque) {
      this.toastr.success('marque modifié avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataEdit.emit({});
    } else {
      this.toastr.success('marque ajouté avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });

      return this.loadDataAjout.emit({});
    }

  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public onFileSelect(event): any {
    // this.selectedFile = <File[]>event.target.files;
    this.selectedFile = <File>event.target.files[0];
  }

}
