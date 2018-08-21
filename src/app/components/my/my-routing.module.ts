import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import {MyComponent} from './my.component'

const myRoutes: Routes = [
  {path:'cars', component: MyComponent, data:{cars : ['ford','volvo','jeap']}},
  {path:'**', redirectTo: '/404'}
]

@NgModule({
  imports: [RouterModule.forChild(myRoutes)],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule{}