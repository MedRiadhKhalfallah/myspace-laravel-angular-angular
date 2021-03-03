import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-roue-client-search',
  templateUrl: './roue-client-search.component.html',
  styleUrls: ['./roue-client-search.component.css']
})
export class RoueClientSearchComponent implements OnInit {

  @Output() searchRoueClient: EventEmitter<any> = new EventEmitter<any>();

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
    return this.searchRoueClient.emit(this.form);
  }

}
