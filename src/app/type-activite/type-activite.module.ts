import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeActiviteCreateComponent } from './type-activite-create/type-activite-create.component';
import { TypeActiviteIndexComponent } from './type-activite-index/type-activite-index.component';
import { TypeActiviteListComponent } from './type-activite-list/type-activite-list.component';
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [TypeActiviteCreateComponent, TypeActiviteIndexComponent, TypeActiviteListComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
    RouterModule,

  ]
})
export class TypeActiviteModule { }
