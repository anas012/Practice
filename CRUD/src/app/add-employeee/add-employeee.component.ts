import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { EmployeAdd, OnEmployeAdd } from '../shared/User.model';

@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.css']
})
export class AddEmployeeeComponent implements OnInit {
isactive=true;
isdelete=false;
alert=false;
msg!:string;
  constructor(private auth:AuthenticationService,private route:Router,private routee:ActivatedRoute) { }

  genders=['male','female'];

  ngOnInit(): void {
  }
  OnAddEmploye(form:NgForm)
  {
    if (!form.valid)
    {
      return ;
    }
    else {
    console.log(this.empdata(form));
    this.auth.AddEmp(this.empdata(form)).subscribe((res:OnEmployeAdd)=>
      {
        
        if (res.msg_sc!=="")
        {        
        this.route.navigate(['details']);
        }
        else 
        {
          this.msg =res.msg;
          this.alert=true;
        }
      }
      )
    }
  }

  empdata(form:NgForm)
  {
    const emp:EmployeAdd={
    
  Name:form.value.Name,
  Email:form.value.Email,
  Age:form.value.Age,
  Designation:form.value.Designation,
  Gender:form.value.Gender,
  DateOfBirth:form.value.DateOfBirth,   
  IsActive:form.value.IsActive,
  IsDeleted:form.value.IsDeleted,
  CreatedBy:form.value.CreatedBy,
  CreatedOn:form.value.CreatedOn,
  UpdatedBy:form.value.UpdatedBy,
  UpdatedOn:form.value.UpdatedOn
    }
    return emp;
  
}
onclick()
{
  this.alert=false;
}

}
