import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { ExchangeRequest, ExchangeResponse } from '../models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchagesService {

  constructor(private http:HttpClient,
              private global:GlobalService) { }



  createExchange(exchange:ExchangeRequest){
    let token:any = localStorage.getItem('tokenApp')
    let headers = new HttpHeaders({
      'x-access-token':token
    })
    return this.http.post<ExchangeResponse>(`${this.global.URL}/exchange`,exchange,{headers:headers})
  }
}
