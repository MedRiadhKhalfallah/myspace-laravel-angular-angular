import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {SousCategorieService} from "../service/sous-categorie.service";

@Component({
  selector: 'app-sous-categorie-index',
  templateUrl: './sous-categorie-index.component.html',
  styleUrls: ['./sous-categorie-index.component.css']
})
export class SousCategorieIndexComponent implements OnInit {

  public sousCategorieList = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public loadingShowMore = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private sousCategorieService: SousCategorieService,
              private router: Router) {
  }

  ngOnInit(): void {
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
      this.sousCategorieList = this.sousCategorieList.concat(data);
    } else {
      this.sousCategorieList = data;
    }
    if (data.length < this.searchobject.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.searchobject.offset = this.sousCategorieList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.sousCategorieService.sousCategorieSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
