import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../profile/service/profile.service";

@Component({
  selector: 'app-verification-mail',
  templateUrl: './verification-mail.component.html',
  styleUrls: ['./verification-mail.component.css']
})
export class VerificationMailComponent implements OnInit {
  public token;
  public loading=false;
  public btn;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {
    route.queryParams.subscribe(params => {
      this.token = params['token']
    });

  }

  ngOnInit(): void {
  }
  handleError(error) {
    this.loading=false
  }

  handleResponse(data) {
    this.loading=false
    if(localStorage.getItem('token')){
      this.btn='profile';
      this.router.navigate(['/profile']);
    }else{
      this.router.navigate(['/']);
    }
  }
  valide() {
    this.loading=true;
    this.profileService.verificationMail({'token':this.token}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

}
