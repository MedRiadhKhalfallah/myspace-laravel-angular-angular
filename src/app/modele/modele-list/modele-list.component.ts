import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ModeleService} from "../../modele/service/modele.service";

@Component({
  selector: 'app-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.css']
})
export class ModeleListComponent implements OnInit {

  @Input() modeleList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;

  public error;
  public modele;
  public loading;

  constructor(private modeleService: ModeleService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.modeleList.length).fill(null).map((_, i) => false);
  }

  showChildModal(modele): void {
    if (modele) {
      this.modele = modele;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(modele): void {
    if (modele) {
      this.modele = modele;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  public deleteModele(id): void {
    if (confirm('Are you sure to delete')) {
      this.loading[id] = true;
      this.modeleService.deleteModele(id).subscribe(
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
