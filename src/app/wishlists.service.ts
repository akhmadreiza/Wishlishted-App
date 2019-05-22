import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishlists } from './wishlists';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  baseUrl: string = "http://192.168.1.200:8080";
  url: string = this.baseUrl + "/wishlists";
  accessToken: string;

  constructor(private http: HttpClient) { }

  getHttpOptions(token){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        ,'Authorization': 'Bearer '+token
        ,'Access-Control-Allow-Origin': '*'
      })
    };
  }

  getAllWishlists(): Observable<Wishlists[]>{
    this.accessToken = localStorage.getItem('accessToken');
    return this.http.get<Wishlists[]>(this.url, this.getHttpOptions(this.accessToken));
  }
}
