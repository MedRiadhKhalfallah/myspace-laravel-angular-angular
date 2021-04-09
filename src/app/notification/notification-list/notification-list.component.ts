import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input() notificationList: any[];
  @Output() loadDataDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('childModal', {static: true}) childModal: ModalDirective;
  @ViewChild('childModalView', {static: true}) childModalView: ModalDirective;
  @ViewChild('childModalDelete', {static: true}) childModalDelete: ModalDirective;

  public error;
  public notification;
  public loading;
  public notificationId = null;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loading = Array(this.notificationList.length).fill(null).map((_, i) => false);
  }

  showChildModal(notification): void {
    if (notification) {
      this.notification = notification;
      this.childModal.show();

    }
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModalView(notification): void {
    if (notification) {
      this.notification = notification;
      this.childModalView.show();

    }
  }

  hideChildModalView(): void {
    this.childModalView.hide();
  }

  showChildModalDelete(notification): void {
    if (notification) {
      this.notification = notification;
      this.notificationId = notification.id;
      this.childModalDelete.show();
    }
  }

  hideChildModalDelete(): void {
    this.childModalDelete.hide();
    this.notificationId = null;
  }

  public deleteNotification(id): void {
    this.hideChildModalDelete();
    if (id) {
      this.loading[id] = true;
      this.notificationService.deleteNotification(id).subscribe(
        data => this.handleResponse(data, id),
        error => this.handleError(error, id)
      );
    }
  }

  public handleError(error, id): any {
    this.loading[id] = false;
    this.error = error.error.message;
  }

  public handleResponse(data, id): any {
    this.loading[id] = false;
    return this.loadDataDelete.emit({});
  }

}
