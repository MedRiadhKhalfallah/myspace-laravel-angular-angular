import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-societe-search',
  templateUrl: './societe-search.component.html',
  styleUrls: ['./societe-search.component.css']
})
export class SocieteSearchComponent implements OnInit {

  @Output() searchSociete: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchSociete.emit(this.form);
  }

}
