import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../produit/service/produit.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public reference;
  public produit;
  public loading=false;
  public errors=null;
  public error=null;

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
  }
  public handleGetProduitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.produit = data;
    this.loading = false;
  }

  public handleGetProduitError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }
  public searchProduit() {
    this.loading = true;
    return this.produitService.getProduitByReference(this.reference).subscribe(
      data => this.handleGetProduitResponse(data),
      error => this.handleGetProduitError(error)
    );
  }

}
