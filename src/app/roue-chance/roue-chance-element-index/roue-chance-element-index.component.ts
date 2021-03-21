import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import {RoueChanceElementService} from "../service/roue-chance-element.service";

@Component({
  selector: 'app-roue-chance-element-index',
  templateUrl: './roue-chance-element-index.component.html',
  styleUrls: ['./roue-chance-element-index.component.css']
})
export class RoueChanceElementIndexComponent implements OnInit {

  public elementList = [];
  public error;
  public societeStorage;
  public loading = false;
  public isCreating = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private elementService: RoueChanceElementService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.societeStorage = localStorage.getItem('societe');
    this.loadData();
  }

  showChildModal(): void {
    this.isCreating=true;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.isCreating=false;
    this.childModal.hide();
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.error;
  }

  public handleResponse(data): any {
    this.loading = false;
    this.elementList = data;
  }

  public loadData(): any {
    this.hideChildModal();
    this.loading = true;
    this.elementService.getRoueElement().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

}
