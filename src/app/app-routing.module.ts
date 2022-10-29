import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './guards/token.guard';

const routes: Routes = [
  { path: '', redirectTo: '/guia', pathMatch: 'full' },
  { path: 'guia', loadChildren: () => import('./pantallas/pantallas.module').then(m => m.PantallasModule), /*canActivate: [TokenGuard]*/ }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
