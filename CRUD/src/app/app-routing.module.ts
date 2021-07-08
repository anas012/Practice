import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeeComponent } from './add-employeee/add-employeee.component';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { SiginupComponent } from './siginup/siginup.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { USERLOGINComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path:'' ,component:HomeComponent },
  { path:'siginup' ,component:SiginupComponent },
  { path:'login' ,component:USERLOGINComponent},
  {path:'Addemp',component:AddEmployeeeComponent,canActivate:[AuthGuard]},
  {path:'Editemploye/:id',component:UpdateEmpComponent,canActivate:[AuthGuard]},
  {path:'details',component:EmployeeDetailsComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'**', component:ErrorpageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
