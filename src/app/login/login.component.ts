import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResponse: Object;
  accessToken: string;

  constructor(private auth: AuthenticationService,
    private fb: FormBuilder,
    public router: Router) { 
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.accessToken = localStorage.getItem('accessToken');
    console.log("localStorage Token: " + this.accessToken);
    if(this.accessToken){
      this.router.navigate(['/wishlists']);
    }
  }

  signInClick(data){
    if(this.loginForm.invalid){
      return;
    }
    console.log(data)
    this.auth.authenticate(data)
    .subscribe(res => {
      console.log(res.accessToken);
      this.accessToken = res.accessToken
      localStorage.setItem('accessToken', this.accessToken);
      this.router.navigate(['/wishlists']);
    });
  }

}
