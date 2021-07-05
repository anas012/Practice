import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginupComponent } from './siginup/siginup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { USERLOGINComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    
    SiginupComponent,
    HomeComponent,
    USERLOGINComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
