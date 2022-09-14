import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../common/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup | any;
  submitted: boolean=false;
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:["",Validators.required],
      password: ['', [Validators.required, Validators.minLength(6),passwordValidator()]],
    })
  }
  // passwordValidator
  onFormSubmit(){
    console.log(this.loginForm.value)
    this.submitted = true;
  }
  get form() {
    return this.loginForm.controls;
} 

}
