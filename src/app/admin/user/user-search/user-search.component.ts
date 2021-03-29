import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  @Output() searchUser: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    nom: null,
    prenom: null,
    email: null
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    return this.searchUser.emit(this.form);
  }

}
