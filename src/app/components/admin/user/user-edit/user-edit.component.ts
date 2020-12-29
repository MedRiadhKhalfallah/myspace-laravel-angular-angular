import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProfileService} from "../../../../profile/service/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnChanges {

  public selectedFile: File = null;
  public error;
  public errorPassword;
  public successPassword;
  public loading = false;
  public loadingPassword = false;
  public loadingDesactiverProfile = false;
  public profileEtat;
  @Input() item: any; // decorate the property with @Input()
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public formPassword = {
    id: null,
    oldPassword: null,
    password: null,
    password_confirmation: null
  };
  public profile = {
    id: null,
    nom: null,
    prenom: null,
    email: null,
    telephone: null,
    email_verified_at: null,
    created_at: null,
    username: null,
    image_profile_path: null,
    image_profile_name: null,
    image_coverture_path: null,
    image_coverture_name: null,
    etat: null,
    site_web: null,
    site_fb: null,
    sex: null,
    description: null,
    date_de_naissance: null
  };
  hide: boolean = true;
  passwordType = 'password';

  hidePassword() {
    this.hide = !this.hide;
    if (this.hide) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  constructor(private profileService: ProfileService, private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.loadData();
    }
  }

  ngOnInit(): void {
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    console.log(data);
    this.profile = data;
    this.profileEtat=this.profile.etat;
  }

  public loadData(): any {
    this.loading = true;
    this.profileService.getProfileById(this.item.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  public onSubmit(): any {
    this.loading = true;
    return this.profileService.updateProfile(this.profile).subscribe(
      data => this.handleSubmitResponse(data),
      error => this.handleSubmitError(error)
    );

  }

  public handleSubmitResponse(data): any {
    this.loading = false;
    return this.loadDataEdit.emit();
  }

  public handleSubmitError(error): any {
    this.loading = false;
    this.error = error.error.message;
  }

  public onSubmitMotDePasse(): any {
    if (this.formPassword.password !== this.formPassword.password_confirmation) {
      this.errorPassword = 'mot de passe non conforme';
    } else {
      this.loadingPassword = true;
      this.formPassword.id = this.profile.id;
      return this.profileService.updatePassword(this.formPassword).subscribe(
        data => this.handleSubmitDePasseResponse(data),
        error => this.handleSubmitDePasseError(error)
      );
    }
  }

  public handleSubmitDePasseResponse(data): any {
    this.loadingPassword = false;
    this.successPassword = 'mot de passe a jour';
    return this.loadDataEdit.emit();

  }

  public handleSubmitDePasseError(error): any {
    this.loadingPassword = false;
    this.errorPassword = error.error.error;
  }

  public desactiverProfile(): any {
    if (confirm('Are you sure you want to desactive user?')) {
      this.loadingDesactiverProfile = true;
      this.profile.etat = false;
      return this.profileService.updateProfile(this.profile).subscribe(
        data => this.handleDesactiverProfileResponse(data),
        error => this.handleDesactiverProfileError(error)
      );
    }
  }
  public activerProfile(): any {
    if (confirm('Are you sure you want to active user?')) {
      this.loadingDesactiverProfile = true;
      this.profile.etat = true;
      return this.profileService.updateProfile(this.profile).subscribe(
        data => this.handleDesactiverProfileResponse(data),
        error => this.handleDesactiverProfileError(error)
      );
    }
  }

  public handleDesactiverProfileResponse(data): any {
    this.loadingDesactiverProfile = false;
    this.successPassword = 'profile desactivé';
    return this.loadDataEdit.emit();

  }

  public handleDesactiverProfileError(error): any {
    this.loadingDesactiverProfile = false;
    this.errorPassword = error.error.error;
  }

  public onFileSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loading = true;
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.profileService.updateImageProfile(this.profile.id, formData).subscribe(
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );

  }

  public handleImageProfileResponse(data): any {
    this.loadData();
  }

  public handleImageProfileError(error): any {
    console.log(error);
    this.loading = false;
  }

  public onFileCovertureSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loading = true;
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.profileService.updateImageCoverture(this.profile.id, formData).subscribe(
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );

  }


}
