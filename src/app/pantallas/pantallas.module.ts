import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { PantallasRoutingModule } from './pantallas-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenGuard } from '../guards/token.guard';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ProvincesComponent } from './provinces/provinces.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    EditPostComponent,
    ProvincesComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
 // providers : [TokenGuard]

})
export class PantallasModule { }
