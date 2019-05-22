import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationResponse } from './authentication-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: string = "http://192.168.1.200:8080";
  url: string = this.baseUrl + "/token/generate-token";
  accToken: string;

  constructor(private http: HttpClient) { }

  getHttpOptions(token){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //,'Authorization': token
      })
    };
  }

  authenticate(data): Observable<AuthenticationResponse>{
    return this.http
    .post<AuthenticationResponse>(this.url, data, this.getHttpOptions(''))
    // .subscribe(res => {
    //   console.log(res.accessToken);
    //   this.accToken = res.accessToken
    //   return res.accessToken;
    // })
    ;
  }
}
