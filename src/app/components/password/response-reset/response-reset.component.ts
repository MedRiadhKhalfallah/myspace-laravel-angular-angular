import {Component, OnInit} from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {SnotifyService} from "ng-snotify";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = null;
  public form = {
    password: null,
    password_confirmation: null,
    token: null
  };

  constructor(private jarwis: JarwisService,
              private snotifyService: SnotifyService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    route.queryParams.subscribe(params => {
      this.form.token = params['token']
    });
  }

  onSubmit() {
    return this.jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.snotifyService.error(error.error.error)
  }

  handleResponse(data) {
    this.router.navigateByUrl('/login');
    this.snotifyService.info("e-mail sent");
  }

  ngOnInit(): void {
  }

}
