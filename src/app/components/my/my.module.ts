import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MyComponent} from './my.component';
import {MyRoutingModule} from './my-routing.module';
import {GlobalsModule} from '@app/globals.module';


@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GlobalsModule,
    MyRoutingModule
  ]
})
export class MyModule{}