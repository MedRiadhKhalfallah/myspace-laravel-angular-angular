import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import {CategorieCreateComponent} from "./categorie-create/categorie-create.component";
import {CategorieIndexComponent} from "./categorie-index/categorie-index.component";
import {CategorieListComponent} from "./categorie-list/categorie-list.component";
import {CategorieSearchComponent} from "./categorie-search/categorie-search.component";
import {CategorieViewComponent} from "./categorie-view/categorie-view.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  declarations: [CategorieCreateComponent, CategorieIndexComponent, CategorieListComponent,
    CategorieSearchComponent, CategorieViewComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ModalModule,
    SharedComponentsModule,

  ]
})
export class CategorieModule { }
