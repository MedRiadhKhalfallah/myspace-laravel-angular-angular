import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MarqueService} from '../service/marque.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {
  @Input() marqueList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public marque;
  public loading;
  public marqueId = null;

  constructor(private marqueService: MarqueService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.marqueList.length).fill(null).map((_, i) => false);
  }

  showChildModal(marque): void {
    if (marque) {
      this.marque = marque;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(marque): void {
    if (marque) {
      this.marque = marque;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(marque): void {
    if (marque) {
      this.marque = marque;
      this.marqueId = marque.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.marqueId = null;
  }

  public deleteMarque(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.marqueService.deleteMarque(id).subscribe(
        data => this.handleResponse(data, id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit({});
  }
}
