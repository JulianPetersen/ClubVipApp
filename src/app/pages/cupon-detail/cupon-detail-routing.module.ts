import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponDetailPage } from './cupon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CuponDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuponDetailPageRoutingModule {}
