import {Component, Input, OnInit} from '@angular/core';
import {ModeleType} from "../../modele/modele-create/modele-create.component";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() message;

  constructor() { }

  ngOnInit(): void {
  }

}
