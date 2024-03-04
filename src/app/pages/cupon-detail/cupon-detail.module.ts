import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponDetailPageRoutingModule } from './cupon-detail-routing.module';

import { CuponDetailPage } from './cupon-detail.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponDetailPageRoutingModule,
    QrCodeModule
  ],
  declarations: [CuponDetailPage]
})
export class CuponDetailPageModule {}
