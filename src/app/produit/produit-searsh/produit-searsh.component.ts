import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-produit-searsh',
  templateUrl: './produit-searsh.component.html',
  styleUrls: ['./produit-searsh.component.css']
})
export class ProduitSearshComponent implements OnInit {


  @Output() searchProduit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    nom: null,
    'limit': 10,
    'offset': 0
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
