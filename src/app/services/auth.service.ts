import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from './global.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient, public router:Router, public global:GlobalService) { }

  token:any = localStorage.getItem('token')

  
  register(user:User){
    return this.http.post<User>(`${this.global.URL}/auth/signup`, user)
  }

  login(user:User){
    return this.http.post<User>(`${this.global.URL}/auth/signin`, user)
  }

  loggedIn(){
    return !!localStorage.getItem('tokenApp');
  }

  getToken(){
    return localStorage.getItem('tokenApp');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }
}
