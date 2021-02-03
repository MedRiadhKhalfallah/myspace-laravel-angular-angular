import {Component, OnInit} from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public errors = null;
  public loading = false;
  public form = {
    password: null,
    password_confirmation: null,
    token: null
  };
  hide: boolean = true;
  passwordType = 'password';

  constructor(private jarwis: JarwisService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router
  ) {
    route.queryParams.subscribe(params => {
      this.form.token = params['token']
    });
  }

  onSubmit() {
    this.loading=true;
    return this.jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.loading=false;
    this.errors = error.error.errors;
  }

  handleResponse(data) {
    this.loading=false;
    this.toastr.success('mot de passe modifié avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });

    this.router.navigateByUrl('/login');
  }
  hidePassword() {
    this.hide = !this.hide;
    if (this.hide) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  ngOnInit(): void {
  }

}
