import {Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, 
  ElementRef,
  OnInit,
  SimpleChanges
} from '@angular/core'
import {LogService} from '@services/log.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponent implements OnInit{
  inputText:string = '';
  //use input and route data
  @Input('cars') cars:Array<string>
  @Output('onChangeText') onChangeText: EventEmitter<any> = new EventEmitter();
  @ViewChild('myInpRefView') myInpRefView: ElementRef
  car:string = 'no'
  sub:any = null

  constructor(
    private logService:LogService, 
    private router:Router,
    private route:ActivatedRoute
    ){

  }

  onKeyUp(value){
    this.inputText = value;
    this.onChangeText.emit(value)
  }

  addCar(myInpRef: HTMLInputElement){
    this.logService.log(myInpRef.value)
    this.logService.log(this.myInpRefView.nativeElement.value)
  }

  ngOnInit(){
    this.sub = this.route
      .data
      .subscribe(data => {
        this.cars = data.cars
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)

  }

  pClick(car){
    this.car = car;
  }

  openFormPage(){
    this.router.navigate(['form', 'new-title'], {relativeTo: this.route.parent, queryParams: {color: 'blue'}})
  }
}