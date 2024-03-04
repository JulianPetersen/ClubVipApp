import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Comercio } from 'src/app/models/comercio';
import { InfoUser } from 'src/app/models/info-user';
import { Offer } from 'src/app/models/offer';
import { QrModelRequest, QrModelResponse } from 'src/app/models/qr-model';
import { GenerateQrService } from 'src/app/services/generate-qr.service';
import { GlobalService } from 'src/app/services/global.service';
import { InfoUserService } from 'src/app/services/info-user.service';
import { OffertsService } from 'src/app/services/offerts.service';

@Component({
  selector: 'app-cupon-detail',
  templateUrl: './cupon-detail.page.html',
  styleUrls: ['./cupon-detail.page.scss'],
})
export class CuponDetailPage implements OnInit {
  userId:any;
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

  constructor(public rutaActiva:ActivatedRoute, 
              public router:Router, 
              private offer : OffertsService,
              private global:GlobalService,
              private userInfo:InfoUserService,
              private qrModel:GenerateQrService,
              private alert:AlertController) { }
  
              
  params:any;
  idCupon:any;
  cupon:any;
  categoryCupon:string ="";
  imgCupon:string="";
  description:string=""

  comercio:Comercio = {
    direccion: "",
    imgUrl:"",
    name: "",
    _id: ""
  };
  idQr:any;

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.params  = this.rutaActiva.snapshot.params
    this.idCupon = this.params.id
    console.log('IDCUPON',this.idCupon)
    this.getOfferById()
    this.getInfoUser()
  }


  getOfferById(){
    this.offer.getOfferById(this.idCupon)
      .subscribe({
        next: (res:Offer) => {
          console.log('COMERCIOCOMERCIO',res.comercio)
          this.imgCupon = res.imgUrl
          this.description = res.description
          this.comercio = res.comercio
          this.categoryCupon = res.category._id
          console.log('CUPON BY ID',res);
        }
      })
  }

  getInfoUser(){
    this.userInfo.getInfoUserById(this.userId)
      .subscribe({
        next: (res:InfoUser) => {
          if (res.subscriptionActivated == true){
            this.subscriptionActivated = true;
            this.userInformation = res;
            console.log('USERINFORMATION',this.userInformation)
          }else{
            this.subscriptionActivated = false
          }
          this.userInformation = res;
        }
      })
  }

  backButton(){
    this.router.navigateByUrl(`category-page/${this.categoryCupon}`)
  }

  goToGetQr(){

    let qrModel:QrModelRequest = {
      userName:this.userInformation.name,
      userLastName:this.userInformation.apellido,
      subscriptionActivated:this.userInformation.subscriptionActivated,
      idCupon:this.idCupon,
      userId:this.userId
    }

    this.qrModel.createQr(qrModel)
      .subscribe({
        next: (res:QrModelResponse) => {
          console.log(res);
          console.log(res._id)
          this.idQr = res._id
          this.router.navigateByUrl(`qr-page/${this.idQr}`)
        },
        error : (err => {
          console.log('error', err.error.error)
          this.router.navigateByUrl(`qr-page/${this.idQr}`)
        })
      })
  }
}
