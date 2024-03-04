import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient,
              private global:GlobalService) { }


  getCategoires(){
    return this.http.get<Category[]>(`${this.global.URL}/categories`)
  }


  getCategorieById(id:any){
    return this.http.get<Category>(`${this.global.URL}/categories/${id}`)
  }
}
