import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CarsHttpService{
  constructor(private http:Http){}

  getCars(){
    const headers = new Headers({
      "Content-type": "application/json; charset=utf8"
    })
    console.log("getCars")
    return this.http.get('http://localhost:3000/cars/', {headers})
    .map((response: Response)=>{
      let data = response.json();
      data = data.map((item)=>{
        return item.name
      });
      return data;
    })
    .catch((error: Response)=>{
      return Observable.throw('Server not respose! Try later!')
    });
  }

  addCar(carName:string){
    return this.http.post('http://localhost:3000/cars/', {"name":carName});
  }

  deleteCar(carId:number){
    return this.http.delete(`http://localhost:3000/cars/${carId}`);
  }
}