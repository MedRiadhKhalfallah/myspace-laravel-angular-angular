import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SocieteService} from "../societe/service/societe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recherche-societe',
  templateUrl: './recherche-societe.component.html',
  styleUrls: ['./recherche-societe.component.css']
})
export class RechercheSocieteComponent implements OnInit {
  public error = null;
  public errors = null;
  public listSociete = [];
  public loading = false;
  public searchObject;

  constructor(private societeService: SocieteService,private router: Router) {
    this.router.events.subscribe( Event => {
      this.searchObject="";
      this.listSociete = [];
    })
  }

  ngOnInit(): void {
    this.searchObject="";
  }

  search() {
    if (this.searchObject.length > 2) {
      this.loading = true;
      let obj = {'nom': this.searchObject};
      return this.societeService.societeMapSearch(obj).subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleGetSocieteError(error)
      );
    }

  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.listSociete = data;
    this.loading = false;
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
