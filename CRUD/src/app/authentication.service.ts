import { Injectable } from '@angular/core';
import { EmployeAdd, Iusermodel, OnEmployeAdd, userLoggedin, Userlogin, userRegister } from './shared/User.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, pipe } from 'rxjs';
import { Allemploylist } from './shared/employee.model';
interface log {
  token:string;
  UserID:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  temp:any;


  constructor( private htppdata:HttpClient) { }
SiginupUser(user:Iusermodel)
{
return this.htppdata.post<userRegister>("http://192.168.18.118:3000/login/signup",user);
}

userlogin (user:Userlogin)
{
  return this.htppdata.post<userLoggedin>("http://192.168.18.118:3000/login/signin",user);
    
}

AddEmp(emp:EmployeAdd)
{
  return this.htppdata.post<OnEmployeAdd>("http://192.168.18.118:3000/rest/add",emp);
}
   
GetAllEmp()
{
 this.temp= this.htppdata.get<Allemploylist[]>("http://192.168.18.118:3000/rest/all");
 return this.temp;
}


settoken(token:string,userid:string)
{
localStorage.setItem('token',token);
localStorage.setItem('userid',userid);
}
gettoken()
{
  return localStorage.getItem('token');
}
}


