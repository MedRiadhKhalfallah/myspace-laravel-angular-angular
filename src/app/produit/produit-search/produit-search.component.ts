import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-produit-search',
  templateUrl: './produit-search.component.html',
  styleUrls: ['./produit-search.component.css']
})
export class ProduitSearchComponent implements OnInit {

  @Output() searchProduit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    nom: null
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    return this.searchProduit.emit(this.form);
  }

}
