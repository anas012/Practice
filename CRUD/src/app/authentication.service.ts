import { Injectable } from '@angular/core';
import { EmployeAdd, Iusermodel, OnEmployeAdd, userLoggedin, Userlogin, userRegister } from './shared/User.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, pipe } from 'rxjs';
import { Allemploylist, empdata, empdelete, empupdate } from './shared/employee.model';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
interface log {
  token:string;
  UserID:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  temp:any;
  temp2:any;


  constructor( private htppdata:HttpClient) { }
SiginupUser(user:Iusermodel)
{
return this.htppdata.post<userRegister>("http://192.168.18.1183000/login/signup",user);
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
GetempbyId(id:number)
{
this.temp2=this.htppdata.get<empdata>(`http://192.168.18.118:3000/rest/empID?id=${id}`);
return this.temp2;
}
deleteemp(id:number)

{
return this.htppdata.patch<empdelete>(`http://192.168.18.118:3000/rest/delete?id=${id}`,null);

}

onUpdate(id:number,emp:empdata)
{
  return this.htppdata.put<empupdate>(`http://192.168.18.118:3000/rest/update?id=${id}`,emp);
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
authcheck()
{
  return !!localStorage.getItem('token');
}
}


