import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TypeActiviteService} from "../../type-activite/service/type-activite.service";
import {ToastrService} from "ngx-toastr";
import {GouvernoratService} from "../../services/gouvernorat.service";
import {DelegationService} from "../../services/delegation.service";

@Component({
  selector: 'app-societe-search',
  templateUrl: './societe-search.component.html',
  styleUrls: ['./societe-search.component.css']
})
export class SocieteSearchComponent implements OnInit {
  public listTypeActivite = [];
  public listGouvernorat = [];
  public listDelegation = [];
  public error;
  public errors;

  @Output() searchSociete: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    nom: null,
    type_activite_id: null,
    gouvernorat_id: null,
    delegation_id: null,
    email: null,
    telephone_mobile: null,
    telephone_fix: null,
    reference: null
  };

  constructor(
    private typeActiviteService: TypeActiviteService,
    private toastr: ToastrService,
    private gouvernoratService: GouvernoratService,
    private delegationService: DelegationService,
  ) {
  }

  ngOnInit(): void {
    this.typeActiviteService.getTypeActiviteList().subscribe(
      data => this.handleGetTypeActiviteResponse(data),
      error => this.handleGetError(error)
    );
    this.gouvernoratService.gouvernoratSearchWithCriteria({}).subscribe(
      data => this.handleGetGouvernoratResponse(data),
      error => this.handleGetError(error)
    );

  }

  public pickDate(date: any): void {
  }

  public onSubmit(): any {
    return this.searchSociete.emit(this.form);
  }
  public handleGetTypeActiviteResponse(data): any {
    this.listTypeActivite = data;
  }
  public handleGetGouvernoratResponse(data): any {
    this.listGouvernorat = data;
  }
  public handleGetDelegationResponse(data): any {
    this.listDelegation = data;
  }
  public handleGetError(error): any {
    this.error = error.error.message;
    this.errors = error.error.errors;
  }
  public findDelegation(): any {
    this.delegationService.delegationSearchWithCriteria({'gouvernorat_id':this.form.gouvernorat_id}).subscribe(
      data => this.handleGetDelegationResponse(data),
      error => this.handleGetError(error)
    );
  }

}
