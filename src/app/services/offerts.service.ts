import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OffertsService {

  constructor(private http:HttpClient, private global:GlobalService) { }


  getAllOffers(){
    return this.http.get<Offer[]>(`${this.global.URL}/offers`)
  }

  getOfferByCategorie(category:any){
    return this.http.get<Offer[]>(`${this.global.URL}/offers/offersByCategorie/${category}`)
  }
  
  getOfferById(id:any) {
    return this.http.get<Offer>(`${this.global.URL}/offers/${id}`)
  }
}
