import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoueChanceService} from "../service/roue-chance.service";

@Component({
  selector: 'app-roue-chance-view',
  templateUrl: './roue-chance-view.component.html',
  styleUrls: ['./roue-chance-view.component.css']
})
export class RoueChanceViewComponent implements OnInit {

  play = true;
  num_tel;
  roue_id;
  client;
  loading;
  error;
  errors;

  constructor(private elementRef: ElementRef,
              private activatedRoute: ActivatedRoute,
              private roueChanceService: RoueChanceService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.num_tel = params['num_tel'];
    });
    this.activatedRoute.params.subscribe(params => {
      this.roue_id = params['id'];
    });

    this.loading = true;
    var data = {"roue_id": this.roue_id, "num_tel": this.num_tel};
    return this.roueChanceService.startGame(data).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  public handleResponse(data): any {
    this.client = data.data;
    if (this.client.value1 || this.client.value2) {
      this.play = false;
    } else {
      this.play = true;
    }
    this.loading = false;
  }

  public handleError(error): any {
    this.loading = false;
    console.log(error);
    this.error = error.error;
  }

  starRoue() {

  }

}
