import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent,
  ],
  exports: [
    AlertComponent
  ]
})
export class CoreModule { }
