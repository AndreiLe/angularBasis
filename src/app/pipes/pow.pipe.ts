import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform{
  transform(value: string, value2: string = ''){
    return value + 'PIPE!' + value2;
  }

}