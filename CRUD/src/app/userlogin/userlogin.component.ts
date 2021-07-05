import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { userLoggedin, Userlogin } from '../shared/User.model';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class USERLOGINComponent implements OnInit {
error!:string;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onlogin(form:NgForm)
  {
    if (!form.valid)
    {
      return ;
    }
    else 
    {
      this.auth.userlogin(this.userdata(form)).subscribe(
        (res:userLoggedin)=>
        {
          const user=res;
          localStorage.setItem('token',user.token);
          localStorage.setItem('userid',user.UserID);
          console.log(user.token);
          console.log(user.UserID);
        },
        errorMessage=>{
          this.error=errorMessage;
      
        }  
        
        );
    }

  }

  userdata(form:NgForm)
  {
    const user:Userlogin={
    
   Username:form.value.Username,
   Password:form.value.Password

    }
    return user;
  
}
}
