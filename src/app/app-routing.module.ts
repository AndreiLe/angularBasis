import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { MyComponent } from './components/my/my.component';
import { FormComponent } from './components/form2/form.component';
import { page404Component } from './components/404/page404.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {path:'', component: page404Component},
  {path:'form', component: FormComponent},
  {path:'form/:title', component: FormComponent, canActivate: [AuthGuard]},
  {path: 'about', loadChildren: './components/about/about.module#AboutModule'}, //--aot and reload
  {path:'404', component: page404Component}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}