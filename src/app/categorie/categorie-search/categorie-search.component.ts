import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categorie-search',
  templateUrl: './categorie-search.component.html',
  styleUrls: ['./categorie-search.component.css']
})
export class CategorieSearchComponent implements OnInit {

  @Output() searchCategorie: EventEmitter<any> = new EventEmitter<any>();

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
    this.form.limit=10;
    this.form.offset=0;
    return this.searchCategorie.emit(this.form);
  }

}
