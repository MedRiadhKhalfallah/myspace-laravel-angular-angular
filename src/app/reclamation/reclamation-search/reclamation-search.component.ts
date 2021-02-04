import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reclamation-search',
  templateUrl: './reclamation-search.component.html',
  styleUrls: ['./reclamation-search.component.css']
})
export class ReclamationSearchComponent implements OnInit {

  @Output() searchReclamation: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchReclamation.emit(this.form);
  }

}
