import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {CategorieService} from "../service/categorie.service";

@Component({
  selector: 'app-categorie-index',
  templateUrl: './categorie-index.component.html',
  styleUrls: ['./categorie-index.component.css']
})
export class CategorieIndexComponent implements OnInit {

  public categorieList = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public showCreate = false;
  public loadingShowMore = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private categorieService: CategorieService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.loadData({});
  }

  showChildModal(): void {
    this.showCreate=true;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.showCreate=false;
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
      this.categorieList = this.categorieList.concat(data);
    } else {
      this.categorieList = data;
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
    this.searchobject.offset = this.categorieList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.categorieService.categorieSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
