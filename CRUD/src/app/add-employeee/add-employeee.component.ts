import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeAdd } from '../shared/User.model';

@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.css']
})
export class AddEmployeeeComponent implements OnInit {
isactive=true;
isdelete=false;
  constructor() { }

  genders=['male','female'];

  ngOnInit(): void {
  }
  OnAddEmploye(form:NgForm)
  {
    console.log(this.empdata(form));
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


}
