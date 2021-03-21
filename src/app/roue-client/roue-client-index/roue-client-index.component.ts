import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {RoueClientService} from "../service/roue-client.service";

@Component({
  selector: 'app-roue-client-index',
  templateUrl: './roue-client-index.component.html',
  styleUrls: ['./roue-client-index.component.css']
})
export class RoueClientIndexComponent implements OnInit {

  public roueClientList = [];
  public error;
  public societeStorage;
  public loading = false;

  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private roueClientService: RoueClientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.societeStorage = localStorage.getItem('societe');
    this.loadData({});
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.error = error.error.error;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.roueClientList = data;
  }
  public handleResponseVide(data): any {
    this.loading = false;
  }

  public loadData(data): any {
    this.loading = true;
    this.roueClientService.roueClientSearchWithCriteria(data).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public videCadeaux(): any {
    var r = confirm("Voulez-vous vider les cadeaux!");
    if (r == true) {
      this.loading = true;
      this.roueClientService.videCadeaux({}).subscribe(
        data => this.handleResponseVide(data),
        error => this.handleError(error)
      );
    }

  }


}
