import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = {
    email:"",
    username:"",
    password:""
  }


  constructor(public global:GlobalService,
              public auth:AuthService,
              public router:Router,
              ) { }



  ngOnInit() {
    
  }


  login(){
    if(this.verifedData()){
      this.global.showLoading('cargando')
      this.auth.login(this.user)
        .subscribe({
          next: ((res:any) => {
            this.global.dismissLoader()
            console.log(res)
            localStorage.setItem('tokenApp',res.token);
            localStorage.setItem('userId',res.userId);
            this.router.navigateByUrl('home')
          }),
          error:((err) => {
            console.log(err)
          })
        })
    }
  }


  verifedData(){
    if(this.user.username == ""){
      this.global.presentAlert('Error', '', 'Debe ingresar un email',['OK'])
      return false;
    }
    if(this.user.password == "" ){
      this.global.presentAlert('Error', '', 'una contraseña',['OK'])
      return false;
    }
    return true 
  }
}
