import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private loadingCtrl: LoadingController,
              private alertController: AlertController) { }

  URL:string = "http://localhost:4000/api"

  async showLoading(mensaje:string) {
    
    const loading = await this.loadingCtrl.create({
      message:mensaje,
    });

    loading.present();
  }

  async dismissLoader(){
    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 500);
  }

  async presentAlert(header:string,subHeader:string, message:string, buttons:string[]) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons,
    });

    await alert.present();
  }

}
