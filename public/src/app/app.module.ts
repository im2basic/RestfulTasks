import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---IMPORT---
import{HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //---Add----
    HttpClientModule,
    FormsModule
    //----------
  ],
  //---Add HttpService vv
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
