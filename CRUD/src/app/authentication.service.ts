import { Injectable } from '@angular/core';
import { Iusermodel, userLoggedin, Userlogin, userRegister } from './shared/User.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private htppdata:HttpClient) { }
SiginupUser(user:Iusermodel)
{
return this.htppdata.post<userRegister>("http://192.168.18.118:3000/login/signup",user);
}

userlogin (user:Userlogin)
{
  return this.htppdata.post<userLoggedin>("http://192.168.18.118:3000/login/signin",user).
  pipe(catchError(this.handleError));
}
private handleError(errorRes: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMessage);
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct.';
      break;
  }
  return throwError(errorMessage);
}
}

