import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

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
  public loading = false;
  public error;
  public id;

  constructor(private profileService: ProfileService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadData();
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
    this.route.queryParams.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');
    });

    console.log(this.id);
    this.profileService.getProfileWithId(this.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


}
