import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxOracleDvComponent } from './ngx-oracle-dv.component';



@NgModule({
  declarations: [
    NgxOracleDvComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxOracleDvComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxOracleDvModule { }
