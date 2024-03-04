import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsubscriptionPage } from './adminsubscription.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsubscriptionPageRoutingModule {}
