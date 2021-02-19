import { Component, OnInit } from '@angular/core';
import {SocieteService} from "../service/societe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-societe-recherche-avance',
  templateUrl: './societe-recherche-avance.component.html',
  styleUrls: ['./societe-recherche-avance.component.css']
})
export class SocieteRechercheAvanceComponent implements OnInit {
  public societeList = [];
  public error;
  public limit;
  public searchobject;
  public first = true;
  public disableShowMore = false;
  public offset;
  public loading = false;
  public loadingShowMore = false;

  constructor(private societeService: SocieteService,
              private router: Router) { }

  ngOnInit(): void {
    this.limit = 10;
    this.offset = 0;

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
      this.societeList = this.societeList.concat(data);
    } else {
      this.societeList = data;
    }
    if (data.length < this.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.offset = this.societeList.length;
    this.loadData(this.searchobject);
  }

  public loadData(searchobject: any): any {
    this.loading = true;
    this.searchobject = searchobject;
    searchobject.limit = this.limit;
    searchobject.offset = this.offset;
    this.societeService.societeMapSearch(searchobject).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

}
