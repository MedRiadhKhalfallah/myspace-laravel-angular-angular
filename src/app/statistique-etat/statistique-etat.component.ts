import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produit/service/produit.service";

@Component({
  selector: 'app-statistique-etat',
  templateUrl: './statistique-etat.component.html',
  styleUrls: ['./statistique-etat.component.css']
})
export class StatistiqueEtatComponent implements OnInit {
  public produisByEtat = [];
  public loading =false;
  temp = Array;
  math = Math;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): any {
    this.loading = true;
    this.produitService.getProduisByEtat().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  public handleError(error): any {
    this.loading = false;
  }

  public handleResponse(data): any {
    this.loading = false;
      this.produisByEtat = data;
  }

}
