import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {MarqueService} from "../../marque/service/marque.service";
import {ToastrService} from "ngx-toastr";
import {RoueChanceService} from "../service/roue-chance.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-roue-chance',
  templateUrl: './login-roue-chance.component.html',
  styleUrls: ['./login-roue-chance.component.css']
})
export class LoginRoueChanceComponent implements OnInit {

  public form = {
    nom: null,
    prenom: null,
    num_tel: null,
    email: null,
    roue_id: null
  };
  public error;
  public errors;
  public roue_id;
  public loading = false;

  constructor(private roueChanceService: RoueChanceService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.roue_id = this.route.snapshot.paramMap.get('id');
    this.form.roue_id=this.roue_id;
  }


  public onSubmit(): any {
    this.loading = true;
      return this.roueChanceService.VerificationClient(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  public handleResponse(data): any {

    this.loading = false;
/*
    this.form = {
      nom: null,
      prenom: null,
      num_tel: null,
      email: null,
      roue_id: null
    };
*/
    this.error = null;
    this.errors = null;

      this.toastr.success('marque ajouté avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
    this.router.navigate([]).then(result => {  window.open('/roue-chance/'+this.form.roue_id+'?num_tel='+this.form.num_tel, '_blank'); });
  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }
}
