import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ActivatedRoute, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {NewProduitService} from "../../new-produit/service/new-produit.service";

@Component({
  selector: 'app-produits-index',
  templateUrl: './produits-index.component.html',
  styleUrls: ['./produits-index.component.css']
})
export class ProduitsIndexComponent implements OnInit {

  public produitList = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public loadingShowMore = false;
  public sousCategorie_id;
  public categorie_id;
  public marque_id;
  public modele_id;
  public delegation_id;
  public gouvernorat_id;

  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private produitService: NewProduitService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.queryParams.subscribe(params => {
      this.sousCategorie_id = params['sousCategory'];
      this.categorie_id = params['category'];
      this.marque_id = params['marque'];
      this.modele_id = params['modele'];
      this.delegation_id = params['delegation'];
      this.gouvernorat_id = params['gouvernorat'];

    });
    if (this.sousCategorie_id) {
      this.loadData({'sous_category_id': this.sousCategorie_id,'limit': 10,
        'offset': 0});
    } else if (this.modele_id) {
      this.loadData({'modele_id': this.modele_id,'limit': 10,
        'offset': 0});
    } else if (this.delegation_id) {
      this.loadData({'delegation_id': this.delegation_id,'limit': 10,
        'offset': 0});
    } else {
      this.loadData({});
    }
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
    if (data.length < this.searchobject.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.searchobject.offset = this.produitList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.produitService.newProduitSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
