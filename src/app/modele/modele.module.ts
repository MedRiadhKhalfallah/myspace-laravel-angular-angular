import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeleCreateComponent } from './modele-create/modele-create.component';
import { ModeleIndexComponent } from './modele-index/modele-index.component';
import { ModeleListComponent } from './modele-list/modele-list.component';
import { ModeleSearchComponent } from './modele-search/modele-search.component';
import { ModeleViewComponent } from './modele-view/modele-view.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";



@NgModule({
  declarations: [ModeleCreateComponent, ModeleIndexComponent, ModeleListComponent, ModeleSearchComponent, ModeleViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,

  ]
})
export class ModeleModule { }
