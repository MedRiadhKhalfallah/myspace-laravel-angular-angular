import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProduitService} from "../../produit/service/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit-index',
  templateUrl: './produit-index.component.html',
  styleUrls: ['./produit-index.component.css']
})
export class ProduitIndexComponent implements OnInit {
  public produitList;
  public error;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private produitService: ProduitService, private router: Router) {
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
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/home');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.produitList = data;
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.produitService.produitSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
