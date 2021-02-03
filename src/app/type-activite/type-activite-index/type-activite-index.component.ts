import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {TypeActiviteService} from "../service/type-activite.service";

@Component({
  selector: 'app-type-activite-index',
  templateUrl: './type-activite-index.component.html',
  styleUrls: ['./type-activite-index.component.css']
})
export class TypeActiviteIndexComponent implements OnInit {

  public typeActiviteList = [];
  public error;
  public societeStorage;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private typeActiviteService: TypeActiviteService,
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
    this.typeActiviteList = data;
  }

  public loadData(): any {
    this.hideChildModal();
    this.loading = true;
    this.typeActiviteService.getTypeActiviteList().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
