import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginupComponent } from './siginup/siginup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { USERLOGINComponent } from './userlogin/userlogin.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AddEmployeeeComponent } from './add-employeee/add-employeee.component';
import { InterceptorserviceService } from './interceptorservice.service';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    
    SiginupComponent,
    HomeComponent,
    USERLOGINComponent,
    EmployeeDetailsComponent,
    UpdateEmpComponent,
    AddEmployeeeComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorserviceService, multi: true }  ,
    DatePipe,AuthGuard
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
