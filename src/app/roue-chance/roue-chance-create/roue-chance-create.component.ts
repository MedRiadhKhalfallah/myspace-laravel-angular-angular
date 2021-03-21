import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {RoueChanceService} from "../service/roue-chance.service";
import {environment} from "../../../environments/environment";
export interface RoueType {
  id: number,
  gameOverText: string,
  date_fin_abonnement: string,
  etat: string
}

@Component({
  selector: 'app-roue-chance-create',
  templateUrl: './roue-chance-create.component.html',
  styleUrls: ['./roue-chance-create.component.css']
})
export class RoueChanceCreateComponent implements OnInit {

  @Input() roue: RoueType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public error;
  public errors;
  public loading = false;
  public loadingUpdate = false;
  public url;
  public societeStorage;

  constructor(private roueService: RoueChanceService,
              private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.societeStorage = localStorage.getItem('societe');
    this.loading = true;
    return this.roueService.getCurrentRoue().subscribe(
      data => this.handleGetRoueResponse(data),
      error => this.handleGetRoueError(error)
    );
  }

  public handleGetRoueResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data) {
      this.roue = data;
      this.url=environment.frontUrl+"/login-roue-chance/"+this.roue.id
    } else {
      this.roue = new class implements RoueType {
        date_fin_abonnement: string;
        etat: string;
        gameOverText: string;
        id: number;
      }

    }
    this.loading = false;
  }

  public handleGetRoueError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }


  public onSubmit(): any {
    this.loadingUpdate = true;
    delete this.roue.date_fin_abonnement;
    if (this.roue.id) {
      return this.roueService.updateRoue(this.roue).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    } else {
      return this.roueService.createRoue(this.roue).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data.data) {
      this.roue = data.data;
      this.url=environment.frontUrl+"/login-roue-chance/"+this.roue.id;
      localStorage.setItem('date_fin_abonnement_roue', data.data.date_fin_abonnement);
      localStorage.setItem('roue', String(true));
    }
    this.toastr.success(data.message, 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loadingUpdate = false;
  }

  public handleSubmitError(error): any {
    this.loadingUpdate = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }
}
