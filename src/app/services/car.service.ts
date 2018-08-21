import {Injectable} from '@angular/core'
import {LogService} from './log.service'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarService{

  constructor(public logService:LogService){

  }
  cars:Array<string> = ['ford', 'towota', 'opel'];

  addCar(name: string):void {
    this.cars.push(name);
    this.logService.log(name)
  }

  getCarName():Observable<string>{
    return Observable.of('ford').delay(100);
  }
}