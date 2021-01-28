import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HistoriqueService} from "../service/historique.service";
import {ProduitType} from "../../produit/produit-create/produit-create.component";

export interface HistoriqueType {
  id: number,
  user_nom: string,
  societe_nom: string,
  controller: string,
  action: string,
  created_at: string,
  action_contenu: string
}

@Component({
  selector: 'app-historique-view',
  templateUrl: './historique-view.component.html',
  styleUrls: ['./historique-view.component.css']
})
export class HistoriqueViewComponent implements OnInit {

  @Input() historique: HistoriqueType;

  constructor(private route: ActivatedRoute, private historiqueService: HistoriqueService) {
  }

  ngOnInit(): void {
    if (!this.historique) {
      this.historique = new class implements HistoriqueType {
        id: number;
        user_nom: string;
        societe_nom: string;
        controller: string;
        action: string;
        created_at: string;
        action_contenu: string
      };

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


}
