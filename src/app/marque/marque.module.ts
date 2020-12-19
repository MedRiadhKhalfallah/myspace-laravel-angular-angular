import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarqueViewComponent} from './marque-view/marque-view.component';
import {MarqueCreateComponent} from './marque-create/marque-create.component';
import {MarqueListComponent} from './marque-list/marque-list.component';
import {MarqueSearchComponent} from './marque-search/marque-search.component';
import {MarqueIndexComponent} from './marque-index/marque-index.component';
import {AppModule} from '../app.module';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';

// @ts-ignore
@NgModule({
  declarations: [MarqueIndexComponent, MarqueCreateComponent, MarqueListComponent, MarqueSearchComponent, MarqueViewComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ModalModule,
  ],
  exports: []
})
export class MarqueModule {
}
