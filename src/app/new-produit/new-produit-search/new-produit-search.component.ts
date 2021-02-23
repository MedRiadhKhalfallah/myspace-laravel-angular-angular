import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-produit-search',
  templateUrl: './new-produit-search.component.html',
  styleUrls: ['./new-produit-search.component.css']
})
export class NewProduitSearchComponent implements OnInit {



  @Output() searchNewProduit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    'titre': null,
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
    this.form.limit=10;
    this.form.offset=0;
    return this.searchNewProduit.emit(this.form);
  }

}
