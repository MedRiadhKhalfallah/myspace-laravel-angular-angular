import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {ReclamationService} from "../service/reclamation.service";

@Component({
  selector: 'app-reclamation-index',
  templateUrl: './reclamation-index.component.html',
  styleUrls: ['./reclamation-index.component.css']
})
export class ReclamationIndexComponent implements OnInit {

  public reclamationList = [];
  public error;
  public societeStorage;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private reclamationService: ReclamationService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.societeStorage = localStorage.getItem('societe');
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
    this.reclamationList = data;
  }

  public loadData(): any {
    this.hideChildModal();
    this.loading = true;
    this.reclamationService.getReclamationList().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
