import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProduitService} from "../../produit/service/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {EtatService} from "../../etat/service/etat.service";

@Component({
  selector: 'app-produit-index',
  templateUrl: './produit-index.component.html',
  styleUrls: ['./produit-index.component.css']
})
export class ProduitIndexComponent implements OnInit {


  public produitList = [];
  public listEtat = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public loadingShowMore = false;
  public etat_id;
  public societeStorage;
  public isCreating = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private produitService: ProduitService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private etatService: EtatService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.societeStorage = localStorage.getItem('societe');
    this.activatedRoute.queryParams.subscribe(params => {
      this.etat_id = params['etat'];
    });
    if (this.etat_id) {
      this.loadData({'etat_id': this.etat_id});
    } else {
      this.loadData({});
    }

  }

  public handleGetEtatResponse(data): any {
    this.loading = false;
    this.listEtat = data;
  }

  public handleGetEtatError(data): any {
  }

  showChildModal(): void {
      this.isCreating=true;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.isCreating = false;
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
    this.first = false;
    if (this.loadingShowMore) {
      this.produitList = this.produitList.concat(data);
    } else {
      this.produitList = data;
    }
    if (data.length < this.searchobject.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;

    this.etatService.getEtatList().subscribe(
      data => this.handleGetEtatResponse(data),
      error => this.handleGetEtatError(error)
    );

  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.searchobject.offset = this.produitList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    //this.hideChildModal();
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.produitService.produitSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
