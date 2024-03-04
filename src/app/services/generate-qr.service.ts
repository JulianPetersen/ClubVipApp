import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QrModelRequest, QrModelResponse } from '../models/qr-model';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GenerateQrService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  createQr(qrInfo:QrModelRequest){
    let token:any = localStorage.getItem('tokenApp')
    let headers = new HttpHeaders({
      'x-access-token':token
    })
    return this.http.post<QrModelResponse>(`${this.global.URL}/generateqr`,qrInfo,{headers:headers})
  }
}
