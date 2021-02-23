import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-marque-search',
  templateUrl: './marque-search.component.html',
  styleUrls: ['./marque-search.component.css']
})
export class MarqueSearchComponent implements OnInit {
  @Output() searchMarque: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchMarque.emit(this.form);
  }

}
