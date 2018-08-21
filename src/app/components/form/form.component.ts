import {Component, ViewChild,OnInit} from '@angular/core';
import {NgForm,FormGroup,FormControl,Validators,ValidatorFn,AbstractControl,AsyncValidatorFn} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-form',
  templateUrl: './form.component.html',
  styles: [`
  input.ng-touched.ng-invalid, select.ng-touched.ng-invalid{
    border: 1px solid red;
  }
  `]
})

export class FormComponent2 implements OnInit{
  @ViewChild('form') form: NgForm
  answers = [{
    type:'yes',
    text:'да'
  },{
    type:'no',
    text:'нет'
  }]

  defaultAnswer = 'no'
  defaultCountry = 'ua'
  formData = null

  title:string = ''

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.title= this.route.snapshot.params['title']
    console.log(this.route.snapshot.params);
  }

  submitForm(form:HTMLFontElement){
    console.log(form)
    this.formData = this.form.value
    this.form.reset()
    this.addRandEmail()
  }

  addRandEmail(){
    const randEmail = Math.random() + ''
    console.log(this.form)
    this.form.controls.email.setValue(randEmail)
    this.form.controls.email.patchValue(randEmail)
  }
}