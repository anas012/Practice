import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private htppdata:HttpClient) { }
siginup(email:string,username:string,password:string,dob:Date,designg:string,Age:number,gender:string,isactive:boolean)
{

}
}

