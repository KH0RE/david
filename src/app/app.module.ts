import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule,  ReactiveFormsModule  } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PantallasComponent } from './pantallas/pantallas.component';
import { TokenGuard } from './guards/token.guard';


@NgModule({
  declarations: [
    AppComponent,
    PantallasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
