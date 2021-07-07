import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeeComponent } from './add-employeee/add-employeee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SiginupComponent } from './siginup/siginup.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { USERLOGINComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path:'' ,component:SiginupComponent },
  { path:'siginup' ,component:SiginupComponent },
  { path:'login' ,component:USERLOGINComponent },
  {path:'details',component:EmployeeDetailsComponent},
  {path:'Addemp',component:AddEmployeeeComponent},
  {path:'Editemploye/:id',component:UpdateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
