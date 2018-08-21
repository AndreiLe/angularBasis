import { TestBed, async,TestModuleMetadata } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule  } from '@angular/forms';
import {ExampleDirective} from './directives/example.directive'
import { PowPipe } from './pipes/pow.pipe';
import {AuthService} from './services/auth.service'
import {CarService} from './services/car.service'
import {LogService} from './services/log.service'
import {CarsHttpService} from './services/cars-http.service'
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setUpTestBed } from '@app/test.common.spec';
import {Observable} from 'rxjs/Observable'

const oldResetTestingModule = TestBed.resetTestingModule;

describe('AppComponent', () => {
  let moduleDef: TestModuleMetadata = {
    imports: [RouterTestingModule,FormsModule,HttpModule,BrowserAnimationsModule],
    declarations: [AppComponent,PowPipe,ExampleDirective],
    providers: [AuthService,CarService,LogService,CarsHttpService]
  };
  setUpTestBed(moduleDef);
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [RouterTestingModule,FormsModule,HttpModule,BrowserAnimationsModule],
  //     declarations: [AppComponent,PowPipe,ExampleDirective],
  //     providers: [AuthService,CarService,LogService,CarsHttpService]
  //   }).compileComponents();
  // }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('test');
  }));
  it('should inject CarService',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const carService = fixture.debugElement.injector.get(CarService)
    fixture.detectChanges();
    expect(component.cars).toEqual(carService.cars)
  })
  it('should\'n return non asycn carname', async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const carService = fixture.debugElement.injector.get(CarService)
    spyOn(carService,'getCarName').and.returnValue(Observable.of('test car').delay(100))
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.carName).toEqual('test car')
    })
    expect(component.carName).toBe(undefined)
  }))
});
