import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsubscriptionPageRoutingModule } from './adminsubscription-routing.module';

import { AdminsubscriptionPage } from './adminsubscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsubscriptionPageRoutingModule
  ],
  declarations: [AdminsubscriptionPage]
})
export class AdminsubscriptionPageModule {}
