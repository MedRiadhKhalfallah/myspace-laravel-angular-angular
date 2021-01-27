import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProduitService} from "../../produit/service/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-produit-index',
  templateUrl: './produit-index.component.html',
  styleUrls: ['./produit-index.component.css']
})
export class ProduitIndexComponent implements OnInit {


  public produitList = [];
  public error;
  public limit;
  public searchobject;
  public first = true;
  public disableShowMore = false;
  public offset;
  public loading = false;
  public loadingShowMore = false;
  public etat_id;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private produitService: ProduitService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.limit = 10;
    this.offset = 0;
    this.activatedRoute.queryParams.subscribe(params => {
      this.etat_id = params['etat'];
    });
    if(this.etat_id){
      this.loadData({'etat_id':this.etat_id});
    }else{
      this.loadData({});
    }
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
      this.produitList = this.produitList.concat(data);
    } else {
      this.produitList = data;
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
    this.offset = this.produitList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.searchobject = searchobject;
    searchobject.limit = this.limit;
    searchobject.offset = this.offset;
    this.produitService.produitSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
