import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = {
    email:"",
    username:"",
    password:""
  }

  repeatPassword:string =""
  constructor(public global:GlobalService,
              public auth:AuthService,
              public router:Router) { }

  ngOnInit() {

  }


  registerUser(){
    if(this.verifedData()){
      this.auth.register(this.user)
        .subscribe({
          next: (res:any) => {
            console.log(res);
            localStorage.setItem('tokenApp',res.token)
            this.router.navigateByUrl('/login')
          },
          error:(err) => {
            console.log(err)
          }
        })
    }
  }
  


  verifedData(){
    if(this.user.email === ''){
      this.global.presentAlert('Error','','Debe ingresar un Email',['OK'])
      return false
    }
    if(this.user.username == ""){
      this.global.presentAlert('Error','','Debe ingresar un Usuario',['OK'])
      return false
    }
    if(this.user.password == ""){
      this.global.presentAlert('Error','','Debe ingresar una Contraseña',['OK'])
      return false
    }
    if(this.repeatPassword == ""){
      this.global.presentAlert('Error','','Las contraseñas Ingresadas no coinciden',['OK'])
      return false
    }
    if(this.user.password != this.repeatPassword){
      this.global.presentAlert('Error','','Las contraseñas Ingresadas no coinciden',['OK'])
      return false
    }
    return true;
  }
 
}
