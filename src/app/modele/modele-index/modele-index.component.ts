import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {ModeleService} from "../../modele/service/modele.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modele-index',
  templateUrl: './modele-index.component.html',
  styleUrls: ['./modele-index.component.css']
})
export class ModeleIndexComponent implements OnInit {

  public modeleList;
  public error;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private modeleService: ModeleService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData({});
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/home');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.modeleList = data;
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.modeleService.modeleSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }


}
