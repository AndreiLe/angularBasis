import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {FormGroup,FormControl,Validators,ValidatorFn,AbstractControl,AsyncValidatorFn} from '@angular/forms';

@Component({
  selector:'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit{
  answers = [{
    type:'yes',
    text:'да'
  },{
    type:'no',
    text:'нет'
  }]

  form:FormGroup
  title:string
  color:string

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
      pass: new FormControl('', [Validators.required, this.checkControlLength(2)]),
      country: new FormControl('ua'),
      answers: new FormControl('no')
    })

    // this.title= this.route.snapshot.params['title']
    this.route.params.subscribe((params:Params)=>{
      this.title = params['title']
    })
    this.route.queryParams.subscribe((params:Params)=>{
      this.color = params['color']
    })
  }

  onSubmit(){
    console.log(this.form)
    console.log('submited')
  }

  checkControlLength(length: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const cLength = control.value.length;
      return (cLength < length) ? {'lengthError': {value: cLength}} : null;
    };
  }

  checkForEmail(control:FormControl):Promise<any>{
    return new Promise((resolve,reject)=>{

        if (control.value !== 's@s.ee') {
          resolve({
            'emailError': {value: control.value}
          })
        }else{
          resolve(null)
        }
    })
  }

}