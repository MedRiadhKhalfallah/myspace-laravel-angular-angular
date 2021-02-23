import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {SocieteService} from "../../societe/service/societe.service";
import {NewProduitService} from "../service/new-produit.service";

@Component({
  selector: 'app-new-produit-view',
  templateUrl: './new-produit-view.component.html',
  styleUrls: ['./new-produit-view.component.css']
})
export class NewProduitViewComponent implements OnInit {

  @Input() newProduit;
  loading = false;
  error;
  errors;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private newProduitService: NewProduitService,) {
  }

  ngOnInit(): void {
    this.newProduit = {};
    var newProduitId = this.route.snapshot.paramMap.get('id');
    if (newProduitId) {
      this.loading = true;
      return this.newProduitService.getNewProduitById(newProduitId).subscribe(
        data => this.handleGetNewProduitResponse(data),
        error => this.handleGetSocieteError(error)
      );
    }

  }

  public handleGetNewProduitResponse(data): any {
    this.newProduit = data;
    this.loading = false;
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  backClicked() {
    this._location.back();
  }

}
