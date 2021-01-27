import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HistoriqueService} from "../service/historique.service";

@Component({
  selector: 'app-historique-view',
  templateUrl: './historique-view.component.html',
  styleUrls: ['./historique-view.component.css']
})
export class HistoriqueViewComponent implements OnInit {

  @Input() historique;

  constructor(private route: ActivatedRoute, private historiqueService: HistoriqueService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



}
