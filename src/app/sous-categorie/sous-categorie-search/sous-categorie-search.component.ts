import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sous-categorie-search',
  templateUrl: './sous-categorie-search.component.html',
  styleUrls: ['./sous-categorie-search.component.css']
})
export class SousCategorieSearchComponent implements OnInit {

  @Output() searchSousCategorie: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    'nom': null,
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
    return this.searchSousCategorie.emit(this.form);
  }

}
