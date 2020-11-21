import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../service/profile.service';
import {TokenService} from "../../services/token.service";
import {UserServiceService} from "../../services/user-service.service";

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
  public loadingPassword = false;
  public loadingDesactiverProfile = false;
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
  public adminRole;
  public loggedIn: boolean;
  public roles: string;
  public user: string;
  public utilisateurRole;
  public id=null;

  hidePassword() {
    this.hide = !this.hide;
    if (this.hide) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  constructor(private profileService: ProfileService, private router: Router, private token: TokenService,private route: ActivatedRoute,private userService: UserServiceService) {
    this.adminRole = false;
  }

  ngOnInit(): void {
    if (!this.token.loggedIn) {
      this.router.navigateByUrl('/home');
    } else {
      this.roles = localStorage.getItem('roles');
      this.user = localStorage.getItem('user');
    }

    if (Array.isArray(this.roles)) {
      if (this.roles.indexOf('admin') !== -1) {
        this.adminRole = true && this.token.loggedIn;
      } else if (this.roles.indexOf('utilisateur') !== -1) {
        this.utilisateurRole = true && this.token.loggedIn;
      }
    } else {
      if (this.roles === 'admin') {
        this.adminRole = true && this.token.loggedIn;
      } else if (this.roles === 'utilisateur') {
        this.utilisateurRole = true && this.token.loggedIn;
      }
    }
    this.route.queryParams.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');
    });
if(this.id){
  this.loadUserData(this.id);
}else{
  this.loadData();
}
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/home');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    console.log(data);
    this.profile = data;
  }

  public loadData(): any {
    this.loading = true;
    this.profileService.getProfile().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  public loadUserData(id): any {
    this.loading = true;
    this.userService.findUserById(id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public onSubmit(): any {
    return this.profileService.updateProfile(this.profile).subscribe(
      data => this.handleSubmitResponse(data),
      error => this.handleSubmitError(error)
    );

  }

  public handleSubmitResponse(data): any {
    this.loading = false;
    console.log(data);
  }

  public handleSubmitError(error): any {
    console.log(error);
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
  }

  public handleSubmitDePasseError(error): any {
    this.loadingPassword = false;
    this.errorPassword = error.error.error;
  }
  public desactiverProfile(): any {
    if (this.formPassword.password !== this.formPassword.password_confirmation) {
      this.errorPassword = 'mot de passe non conforme';
    } else {
      this.loadingDesactiverProfile = true;
      this.profile.etat=false;
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
