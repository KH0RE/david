import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '../guards/token.guard';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

  {
    path: '',
    children : [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: "sign-up",
    component: RegistroComponent,


  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [TokenGuard]

  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "post",
    component: FooterComponent,
    canActivate: [TokenGuard]
  },
  {
    path : "edit-post/:id",
    component: EditPostComponent,
    canActivate: [TokenGuard]
  },
  {
    path : "provinces/:id",
    component : ProvincesComponent,
    canActivate : [TokenGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }
