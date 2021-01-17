import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfileService} from "../../profile/service/profile.service";
import {ToastrService} from "ngx-toastr";
import {SocieteService} from "../service/societe.service";

export interface SocieteType {
  id: number,
  nom: string,
  adresse: string,
  email: string,
  complement_adresse: string,
  code_postal: number,
  ville: string,
  telephone_mobile: number,
  telephone_fix: number,
  numero_tva: string,
  longitude: string,
  latitude: string,
  image_societe_path: string,
  image_societe_name: string,
  image_coverture_path: string,
  image_coverture_name: string,
  site_web: string,
  site_fb: string,
  description: string
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
  public user;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private societeService: SocieteService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.societe) {
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
        latitude: string;
        longitude: string;
        nom: string;
        numero_tva: string;
        site_fb: string;
        site_web: string;
        telephone_fix: number;
        telephone_mobile: number;
        ville: string;
      }
    }
      this.loading = true;
      return this.societeService.getCurrentSociete().subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleGetSocieteError(error)
      );
  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.societe = data;
    this.loading = false;
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }


  public onSubmit(): any {
    this.loadingUpdate = true;
    console.log(this.societe);
    return this.societeService.createSociete(this.societe).subscribe(
      data => this.handleSubmitResponse(data),
      error => this.handleSubmitError(error)
    );

  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('societe modifié avec succée', 'succe message',
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
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );

  }

  public handleImageProfileResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('Image modifie avec succée', 'succe message',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
  }

  public handleImageProfileError(error): any {
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
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );
  }

}
