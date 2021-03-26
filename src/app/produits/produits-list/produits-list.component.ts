import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css']
})
export class ProduitsListComponent implements OnInit {

  @Input() produitList: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
