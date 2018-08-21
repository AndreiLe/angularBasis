import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { page404Component } from './components/404/page404.component';
import { FormComponent } from './components/form2/form.component';
import { FormComponent2 } from './components/form/form.component';
import { ExampleDirective } from './directives/example.directive';
import { PowPipe } from './pipes/pow.pipe';
import {CarService} from './services/car.service'
import {LogService} from './services/log.service'
import {AuthService} from './services/auth.service'
import {AuthGuard} from './services/auth-guard.service'
import {CarsHttpService} from './services/cars-http.service'
import {AppRoutingModule} from './app-routing.module'
import {Routes,RouterModule} from '@angular/router';
import {MyRoutingModule} from './components/my/my-routing.module';
import {GlobalsModule} from './globals.module';
import {MyModule} from './components/my/my.module';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    FormComponent,
    page404Component,
    FormComponent2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    GlobalsModule,
    MyModule,
    BrowserAnimationsModule
  ],
  providers: [
    CarService,
    LogService,
    CarsHttpService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
