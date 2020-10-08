import {Component, OnInit} from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public error = null;
  public form = {email: null};

  constructor(private jarwis: JarwisService,
              private snotifyService: SnotifyService
  ) {
  }

  onSubmit() {
    return this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.snotifyService.error(error.error.error)
  }

  handleResponse(data) {
    this.snotifyService.info("e-mail sent");
    this.form.email = null;
  }

  ngOnInit(): void {
  }

}
