import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sous-categorie-view',
  templateUrl: './sous-categorie-view.component.html',
  styleUrls: ['./sous-categorie-view.component.css']
})
export class SousCategorieViewComponent implements OnInit {

  @Input() sousCategorie;

  constructor() {
  }

  ngOnInit(): void {
    this.sousCategorie = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
