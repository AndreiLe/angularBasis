import {NgModule} from '@angular/core'
import {ExampleDirective} from './directives/example.directive'

@NgModule({
  declarations: [ExampleDirective],
  exports: [ExampleDirective]
})
export class GlobalsModule{}