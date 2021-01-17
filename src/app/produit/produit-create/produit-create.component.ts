import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduitService} from "../../produit/service/produit.service";
import {ToastrService} from "ngx-toastr";
import * as jsPDF from 'jspdf';
import {SocieteService} from "../../societe/service/societe.service";

export interface ProduitType {
  id: number,
  nom: string,
  nom_client: string,
  telephone: string,
  email: string,
  etat: string,
  reference: string,
  description_agent: string,
  description_client: string,
  client_id: string
}

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  @Input() produit: ProduitType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public error;
  public errors;
  public societe;
  public loading = false;

  constructor(private produitService: ProduitService, private societeService: SocieteService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
console.log(this.produit);
    if (!this.produit) {
      this.produit = new class implements ProduitType {
        client_id: string;
        description_agent: string;
        description_client: string;
        email: string;
        etat: string;
        id: number;
        nom: string;
        nom_client: string;
        reference: string;
        telephone: string;
      };
      this.produit.reference = String(Date.now());
      return this.societeService.getCurrentSociete().subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleSubmitError(error)
      );

    }
  }

  public onSubmit(): any {
    this.loading = true;
    if (this.produit.id) {
      return this.produitService.updateProduit(this.produit).subscribe(
        data => this.handleUpdateResponse(data),
        error => this.handleSubmitError(error)
      );
    } else {
      return this.produitService.createProduit(this.produit).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('produit cree avec succée', 'succe message',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
    this.printPDF();
  }

  public handleUpdateResponse(data): any {
    this.error = null;
    this.errors = null;
    this.toastr.success('produit modifie avec succée', 'succe message',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loading = false;
  }

  public handleGetSocieteResponse(data): any {
    this.societe = data;
    this.loading = false;
  }

  public handleSubmitError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public printPDF() {


    var today = new Date();
    var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay();

    var doc = new jsPDF();
/*
    doc.text('Societe: ' + this.societe.nom, 20, 20);
    doc.text(date, 50, 30);
    doc.text('reçu', 40, 40);
    doc.text('Reference: ' + this.produit.reference, 20, 50);
    doc.text('nom produit: ' + this.produit.nom, 20, 60);
    doc.text('nom client: ' + this.produit.nom_client, 20, 70);
    doc.text('telephone: ' + this.produit.telephone, 20, 80);
    doc.text('email: ' + this.produit.email, 20, 90);
    doc.text('', 20, 100);
    doc.text('Societe contact: ', 30, 110);
    doc.text('Adresse: ' + this.societe.adresse, 40, 120);
    doc.text(String(this.societe.complement_adresse), 40, 130);
    doc.text(String(this.societe.code_postal), 40, 140);
    doc.text(String(this.societe.ville), 40, 150);
    doc.text('Telephone mobile: ' + this.societe.telephone_mobile, 40, 160);
    doc.text('Telephone fix: ' + this.societe.telephone_fix, 40, 170);

    doc.text('This is client-side Javascript, pumping out a PDF.', 20, 30);
*/
    var elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }};
    // file:///C:/Users/MSI/Desktop/project/default%20template/pages/invoice.html
    let htlm="<html> <body> <h1>html here ...</h1></body></html>";
    doc.fromHTML(
      htlm,
      15,
      15,
      {
        'width': 180,'elementHandlers': elementHandler
      },);
    doc.autoPrint();
//This is a key for printing
    doc.output('dataurlnewwindow');

  }

}
