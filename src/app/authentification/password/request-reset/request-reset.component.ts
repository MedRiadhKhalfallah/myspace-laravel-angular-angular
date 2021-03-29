import {Component, OnInit} from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public error = null;
  public loading = false;
  public form = {email: null};
  public errors = null;
  constructor(private jarwis: JarwisService,
              private toastr: ToastrService
  ) {
  }

  onSubmit() {
    this.loading = true;
    return this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.loading = false;
    this.errors = error.error.errors;
  }

  handleResponse(data) {
    this.loading = false;
    this.toastr.success('mail envoié avec succée', 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
  }

  ngOnInit(): void {
  }

}
