import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ReclamationService} from "../service/reclamation.service";
export interface ReclamationType {
  id: string,
  reference: string,
  etat: string,
  image_path: string,
  description: string
}

@Component({
  selector: 'app-reclamation-create',
  templateUrl: './reclamation-create.component.html',
  styleUrls: ['./reclamation-create.component.css']
})
export class ReclamationCreateComponent implements OnInit {


  @Input() reclamation: ReclamationType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;
  public selectedFile: File = null;
  public rolesString: string;
  public roles = null;
  public adminRole;
  public utilisateurRole;
  public adminSocieteRole;

  constructor(private reclamationService: ReclamationService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.rolesString = localStorage.getItem('roles');
    if (this.rolesString) {
      this.roles = this.rolesString.split(",");
    }

    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true;
      }
      if (this.roles.indexOf('utilisateur') !== -1) {
        this.utilisateurRole = true;
      }
      if (this.roles.indexOf('admin_societe') !== -1) {
        this.adminSocieteRole = true;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true;
      } else if (this.roles === 'utilisateur') {
        this.utilisateurRole = true;
      } else if (this.roles === 'admin_societe') {
        this.adminSocieteRole = true;
      }

    }

    if (!this.reclamation) {
      this.reclamation = new class implements ReclamationType {
        id: string;
        reference: string;
        etat: string;
        image_path: string;
        description: string
      };
      this.reclamation.reference = String(Date.now());
      this.reclamation.etat='en attend';
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  public onFileSelect(event): any {
    // this.selectedFile = <File[]>event.target.files;
    this.selectedFile = <File>event.target.files[0];
  }

  public onSubmit(): any {
    this.loading = true;
    const formData: FormData = new FormData();
    if (this.selectedFile) {
      formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    }
    formData.append('reference', this.reclamation.reference);
    formData.append('etat', this.reclamation.etat);
    formData.append('description', this.reclamation.description);

    if (this.reclamation.id) {
      formData.append('id', this.reclamation.id);

      return this.reclamationService.updateReclamation(this.reclamation.id,formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.reclamationService.createReclamation(formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {

    this.loading = false;
    this.error = null;
    this.errors = null;

    if (this.reclamation.id) {
      this.toastr.success('reclamation modifié avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataEdit.emit();
    } else {
      this.toastr.success('reclamation ajouté avec succée', 'Opération effectuée avec succès',
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
