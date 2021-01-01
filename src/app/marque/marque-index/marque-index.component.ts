import {Component, OnInit, ViewChild, TemplateRef, Inject} from '@angular/core';
import {MarqueService} from '../service/marque.service';
import {ModalDirective, BsModalRef} from 'ngx-bootstrap/modal';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-marque-index',
  templateUrl: './marque-index.component.html',
  styleUrls: ['./marque-index.component.css']
})
export class MarqueIndexComponent implements OnInit {

  public marqueList = [];
  public error;
  public limit;
  public searchobject;
  public first = true;
  public disableShowMore = false;
  public offset;
  public loading = false;
  public loadingShowMore = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private marqueService: MarqueService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
/*
    window.addEventListener('scroll', function (e) {
      var a = this.document.documentElement.scrollTop;
      var b = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
      var c = a / b;
      if (c > 0.8) {
        console.log('click');
        this.document.getElementById('showMore').click();
      }
    });
*/
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
      this.marqueList = this.marqueList.concat(data);
    } else {
      this.marqueList = data;
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
    this.offset = this.marqueList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.searchobject = searchobject;
    searchobject.limit = this.limit;
    searchobject.offset = this.offset;
    this.marqueService.marqueSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
