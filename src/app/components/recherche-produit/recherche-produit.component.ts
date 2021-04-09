import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NewProduitService} from "../../new-produit/service/new-produit.service";

@Component({
  selector: 'app-recherche-produit',
  templateUrl: './recherche-produit.component.html',
  styleUrls: ['./recherche-produit.component.css']
})
export class RechercheProduitComponent implements OnInit {

  public error = null;
  public errors = null;
  public listNewProduit = [];
  public loading = false;
  public searchObject;
  public societeId;

  constructor(private newProduitService: NewProduitService,
              private router: Router,
              private route: ActivatedRoute,) {
    this.societeId = this.route.snapshot.paramMap.get('id');

    this.router.events.subscribe(Event => {
      this.searchObject = "";
      this.listNewProduit = [];
    })
  }

  ngOnInit(): void {
    this.searchObject = "";
  }

  search() {
    if (this.searchObject.length > 2) {
      this.loading = true;
      let obj = {'titre': this.searchObject,'societe_id':1};
      return this.newProduitService.newProduitSearchWithCriteria(obj).subscribe(
        data => this.handleGetNewProduitResponse(data),
        error => this.handleGetNewProduitError(error)
      );
    }

  }

  public handleGetNewProduitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.listNewProduit = data;
    this.loading = false;
  }

  public handleGetNewProduitError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
