import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-historique-search',
  templateUrl: './historique-search.component.html',
  styleUrls: ['./historique-search.component.css']
})
export class HistoriqueSearchComponent implements OnInit {

  @Output() searchHistorique: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    user_nom: null
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    return this.searchHistorique.emit(this.form);
  }

}
