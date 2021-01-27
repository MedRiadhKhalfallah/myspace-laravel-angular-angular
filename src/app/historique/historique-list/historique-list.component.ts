import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {HistoriqueService} from "../service/historique.service";

@Component({
  selector: 'app-historique-list',
  templateUrl: './historique-list.component.html',
  styleUrls: ['./historique-list.component.css']
})
export class HistoriqueListComponent implements OnInit {


  @Input() historiqueList: any[];
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;

  public error;
  public historique;
  public loading;

  constructor(private historiqueService: HistoriqueService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.historiqueList.length).fill(null).map((_, i) => false);
  }

  showChildModalView(historique): void {
    if (historique) {
      this.historique = historique;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
  }

}
