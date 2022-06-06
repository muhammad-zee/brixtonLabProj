import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule) },
  // { path: 'Home', loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule) },
  { path: '**', redirectTo: 'Home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
