import {CarService} from './car.service'

describe('CarService',()=>{

  const mockLogService = {log:(e)=>{}}

  let service: CarService;
  beforeEach(() => { service = new CarService(mockLogService);});

  it('addCar should have default array',()=>{
    expect(service.cars).toEqual([ 'ford', 'towota', 'opel'])
  })

  it('addCar should add test to default array',()=>{
    service.addCar('test');
    expect(service.cars).toEqual([ 'ford', 'towota', 'opel', 'test' ])
  })

  it('addCar call log serivice',()=>{
    service = new CarService({log:(e)=>{
      expect(e).toEqual('test')
    }});
    service.addCar('test');
    
  })
})