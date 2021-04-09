import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.css']
})
export class NotificationViewComponent implements OnInit {

  @Input() notification;

  constructor() {
  }

  ngOnInit(): void {
    this.notification = {};
  }

}
