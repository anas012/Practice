import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { userLoggedin, Userlogin } from '../shared/User.model';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class USERLOGINComponent implements OnInit {
error!:string;
message!:string;
alert=false;
  constructor(private auth: AuthenticationService,private route:Router) { }

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
      this.auth.userlogin(this.userdata(form)).subscribe((res:userLoggedin)=>
         {
          const user=res;
          console.log(user.token);
          console.log(user.UserID);
          this.auth.settoken(res.token,res.UserID);
          this.message=res.msg;
          if (this.message!=="")
          {
          this.alert=true;
        }    
        else 
        {
          form.resetForm();
          this.route.navigate(['details']);
        }      
         }, 
        
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
onclick()
{
  this.alert=false;
}

}
