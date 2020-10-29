import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-marque-search',
  templateUrl: './marque-search.component.html',
  styleUrls: ['./marque-search.component.css']
})
export class MarqueSearchComponent implements OnInit {
  @Output() searchMarque: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchMarque.emit(this.form);
  }

}
