import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-roue-client-view',
  templateUrl: './roue-client-view.component.html',
  styleUrls: ['./roue-client-view.component.css']
})
export class RoueClientViewComponent implements OnInit {

  @Input() roueClient;

  constructor() {
  }

  ngOnInit(): void {
    this.roueClient = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
