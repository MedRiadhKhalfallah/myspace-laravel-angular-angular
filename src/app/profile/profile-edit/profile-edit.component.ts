import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from '../service/profile.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  public selectedFile: File = null;
  public error;
  public errorPassword;
  public successPassword;
  public loading = false;
  public loadingUpdate = false;
  public loadingPassword = false;
  public loadingDesactiverProfile = false;
  public loadingSendMail = false;
  public loadingMessage;
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

  constructor(private profileService: ProfileService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      // this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.profile = data;
    localStorage.setItem('profileImg', this.profile.image_profile_path);

  }

  public loadData(): any {
    this.loadingMessage='Chargement profile ...';
    this.loading = true;
    this.profileService.getProfile().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public sendMailVerificationLink(): any {
    this.loadingSendMail = true;
    return this.profileService.sendMailVerificationLink({'email': this.profile.email}).subscribe(
      data => this.handleSendMailResponse(data),
      error => this.handleSubmitError(error)
    );

  }

  public onSubmit(): any {
    this.loadingMessage='Chargement profile';
    this.loadingUpdate = true;
    return this.profileService.updateProfile(this.profile).subscribe(
      data => this.handleSubmitResponse(data),
      error => this.handleSubmitError(error)
    );

  }

  public handleSubmitResponse(data): any {
    this.toastr.success('profile modifié avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loadingUpdate = false;
  }
  public handleSendMailResponse(data): any {
    this.toastr.success('mail envoie avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loadingSendMail = false;
  }

  public handleSubmitError(error): any {
    this.loadingUpdate = false;
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
    this.toastr.success('mot de passe modifié avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
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

  public handleDesactiverProfileResponse(data): any {
    this.loadingDesactiverProfile = false;
    this.successPassword = 'profile desactivé';
  }

  public handleDesactiverProfileError(error): any {
    this.loadingDesactiverProfile = false;
    this.errorPassword = error.error.error;
  }

  public onFileSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loading = true;
    this.loadingMessage='Téléchargement photo profile merci de patienter ...';
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.profileService.updateImageProfile(this.profile.id, formData).subscribe(
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );

  }

  public handleImageProfileResponse(data): any {
    this.toastr.success('Image modifie avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });

    this.loadData();
  }

  public handleImageProfileError(error): any {
    this.errorPassword = error.error.error;
    this.loading = false;
  }

  public onFileCovertureSelect(event): any {
    this.selectedFile = <File>event.target.files[0];
    this.loadingMessage='Téléchargement photo coverture merci de patienter ...';
    this.loading = true;
    const formData: FormData = new FormData();
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    return this.profileService.updateImageCoverture(this.profile.id, formData).subscribe(
      data => this.handleImageProfileResponse(data),
      error => this.handleImageProfileError(error)
    );

  }


}
