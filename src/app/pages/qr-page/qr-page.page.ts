import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeRequest, ExchangeResponse } from 'src/app/models/exchange';
import { InfoUser } from 'src/app/models/info-user';
import { Offer } from 'src/app/models/offer';
import { ExchagesService } from 'src/app/services/exchages.service';
import { InfoUserService } from 'src/app/services/info-user.service';
import { OffertsService } from 'src/app/services/offerts.service';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {
  
  userId:any;
  qrModel:any
  userInformation:InfoUser = {
    apellido:'',
    createdAt:'',
    name:'',
    subscriptionActivated: false,
    updatedAt:'',
    usuario:'',
    _id:''
  };
  subscriptionActivated:boolean=false;


  constructor(private router:Router,
              private userInfo:InfoUserService,
              public rutaActiva:ActivatedRoute,
              private offer:OffertsService,
              private exchange:ExchagesService 
              ) { }

  valueQr:any;
  params:any;



  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.params  = this.rutaActiva.snapshot.params
    this.qrModel = this.params.idqr
    this.getInfoUser()
  }


  getInfoUser(){
    this.userInfo.getInfoUserById(this.userId)
      .subscribe({
        next: (res:InfoUser) => {
          if (res.subscriptionActivated == true){
            this.subscriptionActivated = true;
            this.userInformation = res;
            console.log(this.userInformation)
          }else{
            this.subscriptionActivated = false
          }
          this.userInformation = res;
          this.createQr()
        }
      })
  }


  createQr(){
   
    let qrModel = this.qrModel
    
    this.valueQr = JSON.stringify(qrModel);
    console.log(this.valueQr)
  }
  

  goToHome(){
    this.router.navigateByUrl('home')
  } 


  gotoActivatedSubscription(){
    this.router.navigateByUrl('tabs/adminsubscription')
  }

}
