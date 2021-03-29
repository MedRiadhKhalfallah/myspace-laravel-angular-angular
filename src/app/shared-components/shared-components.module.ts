import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponentsRoutingModule} from './shared-components-routing.module';
import {DeleteComponent} from "./delete/delete.component";
import {LoadingComponent} from "./loading/loading.component";


@NgModule({
  declarations: [DeleteComponent, LoadingComponent],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ],
  exports: [
    DeleteComponent, LoadingComponent
  ]
})
export class SharedComponentsModule {
}
