import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HistoriqueService} from "../service/historique.service";

@Component({
  selector: 'app-historique-index',
  templateUrl: './historique-index.component.html',
  styleUrls: ['./historique-index.component.css']
})
export class HistoriqueIndexComponent implements OnInit {

  public historiqueList = [];
  public error;
  public searchobject = {'limit': 10, 'offset': 0};
  public first = true;
  public disableShowMore = false;
  public loading = false;
  public loadingShowMore = false;

  constructor(private historiqueService: HistoriqueService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadData({});
  }

  public handleError(error): any {
    this.loading = false;
    this.loadingShowMore = false;
    // this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.first = false;
    if (this.loadingShowMore) {
      this.historiqueList = this.historiqueList.concat(data);
    } else {
      this.historiqueList = data;
    }
    if (data.length < this.searchobject.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.searchobject.offset = this.historiqueList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.loading = true;
    if (Object.keys(searchobject).length != 0) {
      this.searchobject = searchobject;
    }
    this.historiqueService.historiqueSearchWithCriteria(this.searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
