import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SocieteService} from "../service/societe.service";

@Component({
  selector: 'app-societe-view',
  templateUrl: './societe-view.component.html',
  styleUrls: ['./societe-view.component.css']
})
export class SocieteViewComponent implements OnInit {

  @Input() societe;
  public error;
  public errors;
  public loading = false;
  public user;

  constructor(private route: ActivatedRoute, private societeService: SocieteService) {
  }

  ngOnInit(): void {
    this.societe = {};
    var societeId = this.route.snapshot.paramMap.get('id');
    if (societeId) {
      this.loading = true;
      return this.societeService.getSocieteById(societeId).subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleGetSocieteError(error)
      );

    }

  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.societe = data;
    this.loading = false;
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
