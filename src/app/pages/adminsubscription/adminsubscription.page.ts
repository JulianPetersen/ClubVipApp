import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/app/models/info-user';
import { InfoUserService } from 'src/app/services/info-user.service';

@Component({
  selector: 'app-adminsubscription',
  templateUrl: './adminsubscription.page.html',
  styleUrls: ['./adminsubscription.page.scss'],
})
export class AdminsubscriptionPage implements OnInit {

  userId:any;
  subscriptionActivated:boolean = false;
  userInformation:InfoUser = {
    apellido:'',
    createdAt:'',
    name:'',
    subscriptionActivated: false,
    updatedAt:'',
    usuario:'',
    _id:''

  };
  
  constructor(private infoUser:InfoUserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.getInfoUser()
  }

  getInfoUser(){
    this.infoUser.getInfoUserById(this.userId)
      .subscribe({
        next: (res:InfoUser) => {
          console.log(res)
          this.userInformation = res;
          this.subscriptionActivated = res.subscriptionActivated;
        }
      })
  }
}
