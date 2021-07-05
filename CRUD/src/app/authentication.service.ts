import { Injectable } from '@angular/core';
import { Iusermodel, userRegister } from './shared/User.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private htppdata:HttpClient) { }
SiginupUser(user:Iusermodel)
{
return this.htppdata.post<userRegister>("http://192.168.18.118:3000/login/signup",user);
}
}

