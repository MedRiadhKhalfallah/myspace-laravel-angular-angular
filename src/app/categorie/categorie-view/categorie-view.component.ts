import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  @Input() categorie;

  constructor() {
  }

  ngOnInit(): void {
    this.categorie = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
