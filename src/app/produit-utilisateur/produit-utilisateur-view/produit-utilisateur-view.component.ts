import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProduitUtilisateurService} from "../service/produit-utilisateur.service";

@Component({
  selector: 'app-produit-utilisateur-view',
  templateUrl: './produit-utilisateur-view.component.html',
  styleUrls: ['./produit-utilisateur-view.component.css']
})
export class ProduitUtilisateurViewComponent implements OnInit {

  @Input() produitUtilisateur;
  loading = false;
  error;
  errors;
// public srcImage;
  constructor(private _location: Location,
              private route: ActivatedRoute,
              private produitUtilisateurService: ProduitUtilisateurService) {
  }
  ngOnInit(): void {
    this.produitUtilisateur = {};
    var produitUtilisateurId = this.route.snapshot.paramMap.get('id');
    if (produitUtilisateurId) {
      this.loading = true;
      return this.produitUtilisateurService.getProduitUtilisateurById(produitUtilisateurId).subscribe(
        data => this.handleGetProduitUtilisateurResponse(data),
        error => this.handleGetSocieteError(error)
      );
    }

    // this.showimg(0);
  }

/*
  public showimg(arrayno) {
    console.log(arrayno);
    this.srcImage = this.produitUtilisateur.new_produit_images[arrayno].image_path;
  }
*/

  public handleGetProduitUtilisateurResponse(data): any {
    this.produitUtilisateur = data;
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
