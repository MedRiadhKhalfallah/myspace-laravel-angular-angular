import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoueChanceElementService} from "../../roue-chance/service/roue-chance-element.service";

@Component({
  selector: 'app-roue-client-search',
  templateUrl: './roue-client-search.component.html',
  styleUrls: ['./roue-client-search.component.css']
})
export class RoueClientSearchComponent implements OnInit {

  @Output() searchRoueClient: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    'nom': null,
    'value': null
  };
  loading;
  elementRoueListe;
  constructor(private roueChanceElementService: RoueChanceElementService,) {
  }

  ngOnInit(): void {
    this.loadData({});
  }
  public handleResponse(data): any {
    this.loading = false;
    this.elementRoueListe = data;
  }
  public handleError(data): any {
    this.loading = false;
  }

  public loadData(data): any {
    this.loading = true;
    this.roueChanceElementService.roueSearchWithCriteria(data).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    return this.searchRoueClient.emit(this.form);
  }

}
