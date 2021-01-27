import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {EtatService} from "../service/etat.service";

@Component({
  selector: 'app-etat-index',
  templateUrl: './etat-index.component.html',
  styleUrls: ['./etat-index.component.css']
})
export class EtatIndexComponent implements OnInit {

  public etatList = [];
  public error;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private etatService: EtatService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  public handleError(error): any {
    this.loading = false;
    // this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
      this.etatList = data;
  }

  public loadData(): any {
    this.hideChildModal();
    this.loading = true;
    this.etatService.getEtatList().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
