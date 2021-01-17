import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {SocieteService} from "../service/societe.service";

@Component({
  selector: 'app-societe-index',
  templateUrl: './societe-index.component.html',
  styleUrls: ['./societe-index.component.css']
})
export class SocieteIndexComponent implements OnInit {

  public societeList = [];
  public error;
  public limit;
  public searchobject;
  public first = true;
  public disableShowMore = false;
  public offset;
  public loading = false;
  public loadingShowMore = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private societeService: SocieteService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.limit = 10;
    this.offset = 0;
    this.loadData({});
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  public handleError(error): any {
    this.loading = false;
    this.loadingShowMore = false;
    // this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.first = false;
    if (this.loadingShowMore) {
      this.societeList = this.societeList.concat(data);
    } else {
      this.societeList = data;
    }
    if (data.length < this.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.offset = this.societeList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.searchobject = searchobject;
    searchobject.limit = this.limit;
    searchobject.offset = this.offset;
    this.societeService.societeSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
