import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResponse: Object;

  constructor(private auth: AuthenticationService, private fb: FormBuilder) { 
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  signInClick(data){
    if(this.loginForm.invalid){
      return;
    }
    console.log(data)
    return this.auth.authenticate(data)
    .subscribe(response => {
      this.loginResponse = response;
      console.log(this.loginResponse);
    })
    ;
  }

}
