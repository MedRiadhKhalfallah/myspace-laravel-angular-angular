import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-marque-view',
  templateUrl: './marque-view.component.html',
  styleUrls: ['./marque-view.component.css']
})
export class MarqueViewComponent implements OnInit, OnChanges {
  @Input() marque;

  constructor() {
  }

  ngOnInit(): void {
    this.marque = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
