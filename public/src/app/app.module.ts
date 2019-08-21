import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---IMPORT---
import{HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
//------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //---Add----
    HttpClientModule
    //----------
  ],
  //---Add HttpService vv
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
