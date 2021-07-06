import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Iusermodel, userRegister } from '../shared/User.model';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})

export class SiginupComponent implements OnInit {
  message!:string;
  alert=false;
  alert2=false;
  IsActive=true;
  IsDelete=false;
  msg!:string;
constructor(private authservices:AuthenticationService){}

  ngOnInit(): void {
      }
  onsubmit(form:NgForm)
  {  
    if (!form.valid)
    {
    return;
    }
    else {
      this.authservices.SiginupUser(this.userdata(form)).subscribe(
        res=>
        {         
          console.log(this.userdata(form));
          this.message=res.msg;
          if (this.message!=="")
          {
            this.alert=true;
          }    
          else 
          {
            this.msg=res.msg_sc;
            this.alert2=true;
            form.resetForm();         
          }      
         
        },
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
   IsActive:form.value.IsActive,
   IsDeleted:form.value.IsDeleted,
   CreatedBy:form.value.CreatedBy,
   CreatedOn:form.value.CreatedOn,
   UpdatedBy:form.value.UpdatedBy,
   UpdatedOn:form.value.UpdatedOn 
    }
    return user;
  
}

onclick()
{
  this.alert=false;
}
}