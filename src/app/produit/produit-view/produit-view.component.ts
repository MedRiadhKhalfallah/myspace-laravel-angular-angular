import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../../produit/service/produit.service";

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.css']
})
export class ProduitViewComponent implements OnInit {

  @Input() produit;
  public error;
  public errors;
  public loading = false;
  public user;

  constructor(private route: ActivatedRoute, private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.produit = {};
    var produitId = this.route.snapshot.paramMap.get('id');
    if (produitId) {
      this.loading = true;
      return this.produitService.getProduitById(produitId).subscribe(
        data => this.handleGetProduitResponse(data),
        error => this.handleGetProduitError(error)
      );

    }

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

  ngOnChanges(changes: SimpleChanges): void {
  }

}
