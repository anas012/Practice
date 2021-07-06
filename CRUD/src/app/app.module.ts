import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginupComponent } from './siginup/siginup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { USERLOGINComponent } from './userlogin/userlogin.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AddEmployeeeComponent } from './add-employeee/add-employeee.component';
@NgModule({
  declarations: [
    AppComponent,
    
    SiginupComponent,
    HomeComponent,
    USERLOGINComponent,
    EmployeeDetailsComponent,
     UpdateEmpComponent,
    AddEmployeeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
