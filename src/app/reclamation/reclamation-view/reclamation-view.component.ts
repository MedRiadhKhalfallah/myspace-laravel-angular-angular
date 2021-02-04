import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-reclamation-view',
  templateUrl: './reclamation-view.component.html',
  styleUrls: ['./reclamation-view.component.css']
})
export class ReclamationViewComponent implements OnInit {

  @Input() reclamation;

  constructor() {
  }

  ngOnInit(): void {
    this.reclamation = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
