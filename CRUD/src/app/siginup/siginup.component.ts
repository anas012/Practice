import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Iusermodel, userRegister } from '../shared/User.model';
import { map } from 'rxjs/operators';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})

export class SiginupComponent implements OnInit {
  
  genders = ['male','female'];
  submitted!:string;
  issubmit=false;
  message!:string;
  resp!:userRegister;
constructor(private authservices:AuthenticationService){}

  ngOnInit(): void {
      }
  onsubmit(form:NgForm)
  {  
    this.issubmit=false;
    if (!form.value)
    {
    return;
    }
    else {
      console.log(this.userdata(form));
      this.authservices.SiginupUser(this.userdata(form)).subscribe(
        res=>
        {
          
          localStorage.setItem('token',res.token);
          localStorage.setItem('userid',res.user_id);
          console.log(res.user_id);
          console.log(res.token);
        },
        error=>
        {
          console.log(error);
        }
      );              
    }
  
  }
  userdata(form:NgForm)
  {
    const user:Iusermodel={
    
   FirstName:form.value.FirstName,
   LastName:form.value.LastName,
   Username:form.value.Username,
   Password:form.value.Password,
   PhoneNumber:form.value.PhoneNumber,
   Address:form.value.Address,    
    }
    return user;
  
}
show()
{
this.submitted="Form submiited Succesffully";
}

}