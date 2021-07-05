import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginupComponent } from './siginup/siginup.component';
import { USERLOGINComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path:'' ,component:SiginupComponent },
  { path:'siginup' ,component:SiginupComponent },
  { path:'login' ,component:USERLOGINComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
