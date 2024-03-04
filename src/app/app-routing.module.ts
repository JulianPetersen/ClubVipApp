import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'category-page/:category',
    loadChildren: () => import('./pages/category-page/category-page.module').then( m => m.CategoryPagePageModule)
  },
  {
    path: 'cupon-detail/:id',
    loadChildren: () => import('./pages/cupon-detail/cupon-detail.module').then( m => m.CuponDetailPageModule)
  },
  {
    path: 'qr-page/:idqr',
    loadChildren: () => import('./pages/qr-page/qr-page.module').then( m => m.QrPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
