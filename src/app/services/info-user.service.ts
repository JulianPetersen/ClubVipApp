import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { InfoUser } from '../models/info-user';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor(private http:HttpClient,
    private global:GlobalService) { }



  getInfoUserById(id:string) {
    return this.http.get<InfoUser>(`${this.global.URL}/userInfo/${id}`)
  }



}


