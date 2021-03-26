import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ProduitUtilisateurService} from "../service/produit-utilisateur.service";

@Component({
  selector: 'app-produit-utilisateur-list',
  templateUrl: './produit-utilisateur-list.component.html',
  styleUrls: ['./produit-utilisateur-list.component.css']
})
export class ProduitUtilisateurListComponent implements OnInit {

  @Input() produitUtilisateurList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public produitUtilisateur;
  public loading;
  public produitUtilisateurId = null;
  public showCreate=false;
  public showview=false;
  constructor(private produitUtilisateurService: ProduitUtilisateurService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.produitUtilisateurList.length).fill(null).map((_, i) => false);
  }

  showChildModal(produitUtilisateur): void {

    if (produitUtilisateur) {
      this.showCreate=true;
      this.produitUtilisateur = produitUtilisateur;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.showCreate=false;
    this.childModal.hide();
  }

  showChildModalView(produitUtilisateur): void {
    if (produitUtilisateur) {
      this.showview=true;
      this.produitUtilisateur = produitUtilisateur;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.showview=false;
    this.childModalView.hide();
  }

  showChildModalDelete(produitUtilisateur): void {
    if (produitUtilisateur) {
      this.produitUtilisateur = produitUtilisateur;
      this.produitUtilisateurId = produitUtilisateur.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.produitUtilisateurId = null;
  }

  public deleteProduitUtilisateur(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.produitUtilisateurService.deleteProduitUtilisateur(id).subscribe(
        data => this.handleResponse(data, id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit({});
  }

}
