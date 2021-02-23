import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {RoueChanceElementService} from "../service/roue-chance-element.service";

@Component({
  selector: 'app-roue-chance-element-list',
  templateUrl: './roue-chance-element-list.component.html',
  styleUrls: ['./roue-chance-element-list.component.css']
})
export class RoueChanceElementListComponent implements OnInit {

  @Input() elementList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public element;
  public loading;
  public elementId = null;

  constructor(private elementService: RoueChanceElementService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.elementList.length).fill(null).map((_, i) => false);
  }

  showChildModal(element): void {
    if (element) {
      this.element = element;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalDelete(element): void {
    if (element) {
      this.element = element;
      this.elementId = element.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.elementId = null;
  }

  public deleteRoueElement(id): void {
    this.hideChildModalDelete();
    console.log(id);
    if (id) {
      this.loading[id] = true;
      this.elementService.deleteRoueElementById(id).subscribe(
        data => this.handleResponse(id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit();
  }

}
