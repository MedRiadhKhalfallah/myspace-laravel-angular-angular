import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {ProduitUtilisateurService} from "../service/produit-utilisateur.service";

@Component({
  selector: 'app-produit-utilisateur-index',
  templateUrl: './produit-utilisateur-index.component.html',
  styleUrls: ['./produit-utilisateur-index.component.css']
})
export class ProduitUtilisateurIndexComponent implements OnInit {

  public produitUtilisateurList = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public loadingShowMore = false;
  public showCreate = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private produitUtilisateurService: ProduitUtilisateurService,
              private router: Router) {
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
      this.produitUtilisateurList = this.produitUtilisateurList.concat(data);
    } else {
      this.produitUtilisateurList = data;
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
    this.searchobject.offset = this.produitUtilisateurList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.produitUtilisateurService.produitUtilisateurSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
