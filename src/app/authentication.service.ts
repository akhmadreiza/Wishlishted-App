import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "http://localhost:8080/token/generate-token";

  constructor(private http: HttpClient) { }

  getHttpOptions(token){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //,'Authorization': token
      })
    };
  }

  authenticate(data){
    //return console.log("test authenticate user")
    return this.http
    .post(this.url, data, this.getHttpOptions(''))
    ;
  }
}
