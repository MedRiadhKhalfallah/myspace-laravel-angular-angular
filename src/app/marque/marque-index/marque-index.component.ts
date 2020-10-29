import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {MarqueService} from '../service/marque.service';
import {ModalDirective, BsModalRef} from 'ngx-bootstrap/modal';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-marque-index',
  templateUrl: './marque-index.component.html',
  styleUrls: ['./marque-index.component.css']
})
export class MarqueIndexComponent implements OnInit {

  public marqueList;
  public error;
  public loading = false;
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;

  constructor(private marqueService: MarqueService, private router: Router) {
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
    this.marqueList = data;
  }

  public loadData(searchobject: any): any {
    this.hideChildModal();
    this.loading = true;
    this.marqueService.marqueSearchWithCriteria(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
