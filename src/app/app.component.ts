import { Component,OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {CarService} from './services/car.service'
import {CarsHttpService} from './services/cars-http.service'
import {AuthService} from './services/auth.service'
import {trigger,state,style,transition,animate} from '@angular/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedDiv',[
        state('start', style({
          backgroundColor: 'blue', 
          height: '50px'
        })),
        state('end', style({
          backgroundColor: 'red', 
          height: '300px'
        })),
        transition('start <=> end', animate(200))
      ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  cars:Array<string> = null;
  carName:string;
  inputText:string = 'sample'
  clickDivState = 'start'

  constructor(private auth:AuthService, private carService:CarService, private carsHttpService:CarsHttpService){}

  ngOnInit(){
    this.cars = this.carService.cars
    this.carService.getCarName().subscribe(carName => this.carName = carName)
  }

  changeDivState(){
    this.clickDivState = 'end'
    setTimeout(()=>{
      this.clickDivState='start'
    },1000)
  }

  updateCarList(event){
    console.log(event)
    this.inputText = event
  }

  addCar(){
    this.carService.addCar('test')
  }

  getCarsHttp(){
    this.carsHttpService.getCars().subscribe((cars: string[])=>{
      this.cars = cars;
    },
    (error)=>{
      alert(error)
    });
  }
  addCarsHttp(){
    this.carsHttpService.addCar('test').subscribe(()=>{
      this.getCarsHttp();
    });;
  }
  deleteCarsHttp(){
    this.carsHttpService.deleteCar(this.cars.length).subscribe(()=>{
      this.getCarsHttp();
    });;
  }

  logIn(){
    this.auth.logIn()
  }
  logOut(){
    this.auth.logOut()
  }
}
