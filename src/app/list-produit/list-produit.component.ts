import {Component, Input, OnInit} from '@angular/core';
import {NewProduitService} from "../new-produit/service/new-produit.service";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  @Input() searchObject;
  @Input() titre;
  @Input() url;
  public newProduitList = [];
  public loading;
  public error;
  public errors;

  constructor(private newProduitService: NewProduitService) {
  }

  ngOnInit(): void {
    this.loading = true;

    return this.newProduitService.newProduitSearchWithCriteria(this.searchObject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  public handleResponse(data): any {
    this.error = null;
    this.errors = null;
    this.newProduitList = data;
    this.loading = false;
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
