import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUser } from 'src/app/models/info-user';
import { InfoUserService } from 'src/app/services/info-user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
  constructor(private infoUser:InfoUserService,
              private router:Router) {}

  ngOnInit(){
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

  
  gotoActivatedSubscription(){
    this.router.navigateByUrl('tabs/adminsubscription')
  }

}
