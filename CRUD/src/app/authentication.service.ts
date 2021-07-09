import { Injectable } from '@angular/core';
import {
  dashboarduser,
  EmployeAdd,
  Iusermodel,
  OnEmployeAdd,
  userLoggedin,
  Userlogin,
  userRegister,
} from './shared/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, onErrorResumeNext, pipe, throwError } from 'rxjs';
import {
  Allemploylist,
  empcheck,
  empdata,
  empdelete,
  empupdate,
} from './shared/employee.model';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { catchError, tap } from 'rxjs/operators';
interface log {
  token: string;
  UserID: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  temp: any;
  temp2: any;
  baseurl: string = 'http://192.168.18.118:3000';
  baseurl2: string = 'http://localhost:3000';

  constructor(private htppdata: HttpClient) {}
  SiginupUser(user: Iusermodel) {
    return this.htppdata
      .post<userRegister>(this.baseurl + '/login/signup', user)
      .pipe(catchError(this.handleError));
  }

  userlogin(user: Userlogin) {
    return this.htppdata
      .post<userLoggedin>(this.baseurl + '/login/signin', user)
      .pipe(catchError(this.handleError));
  }

  AddEmp(emp: EmployeAdd) {
    return this.htppdata.post<OnEmployeAdd>(this.baseurl + '/rest/add', emp).pipe(catchError(this.handleError));
  }

  GetAllEmp() {
    this.temp = this.htppdata.get<Allemploylist[]>(this.baseurl + '/rest/all');
    return this.temp;
  }
  GetempbyId(id: number) {
    this.temp2 = this.htppdata.get<empdata>(
      this.baseurl + `/rest/empID?id=${id}`
    );
    return this.temp2;
  }
  deleteemp(id: number) {
    return this.htppdata.patch<empdelete>(
      this.baseurl + `/rest/delete?id=${id}`,
      null
    );
  }
  empcheck(id: number) {
    return this.htppdata.get<empcheck>(this.baseurl+`/rest/empID?id=${id}`);
  }
  dashboard()
  {
      return this.htppdata.get<dashboarduser>(this.baseurl+`/rest/dashboard`);
    }
  

  onUpdate(id: number, emp: empdata) {
    return this.htppdata.put<empupdate>(
      this.baseurl + `/rest/update?id=${id}`,
      emp
    );
  }
  settoken(token: string, userid: string) 
  {
    localStorage.setItem('token', token);
    localStorage.setItem('userid', userid);
  }
  gettoken()
   {
    return localStorage.getItem('token');
  }
  authcheck() {
    return !!localStorage.getItem('token');
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error.msg) {
      return throwError(errorMessage);
    } else {
      switch (errorRes.error.msg) {
        case 'No user Sign-In error':
          errorMessage = 'Email or Password is wrong';
          break;
        case 'Bad credentials':
          errorMessage = 'Email or Password is wrong';
          break;
        case 'sign-up ERROR':
          errorMessage = 'Email not valid';
          break;
        case 'SignUp Error':
          errorMessage = 'Please enter Correct data in fields';
          break;
      }
    }
    return throwError(errorMessage);
  }

  // private handleErrorr(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occured';
  //   if (!errorRes.error.msg) {
  //     return throwError(errorMessage);
  //   } else {
  //     switch (errorRes.error.msg) {
  //       case 'No user Sign-In error':
  //         errorMessage = 'Email or Password is wrong';
  //         break;
  //       case 'Bad credentials':
  //         errorMessage = 'Email or Password is wrong';
  //         break;
  //       case 'sign-up ERROR':
  //         errorMessage = 'Email not valid';
  //         break;
  //       case 'SignUp Error':
  //         errorMessage = 'Please enter Correct data in fields';
  //         break;
  //     }
  //   }
  //   return throwError(errorMessage);
  // }



}
