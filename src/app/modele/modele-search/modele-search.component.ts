import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modele-search',
  templateUrl: './modele-search.component.html',
  styleUrls: ['./modele-search.component.css']
})
export class ModeleSearchComponent implements OnInit {


  @Output() searchModele: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchModele.emit(this.form);
  }

}
