import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-modele-view',
  templateUrl: './modele-view.component.html',
  styleUrls: ['./modele-view.component.css']
})
export class ModeleViewComponent implements OnInit {

  @Input() modele;

  constructor() {
  }

  ngOnInit(): void {
    this.modele = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
