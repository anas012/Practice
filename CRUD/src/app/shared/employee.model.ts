import { THIS_EXPR, ThrowStmt } from "@angular/compiler/src/output/output_ast";

export interface Allemploylist {
  EmpID:number;
  Name: string;
  Email: string;
  Age: string;
  Designation: string;
  Gender: string;
  DateOfBirth: Date;
  IsActive: boolean;
  IsDeleted: boolean;
  CreatedBy: string;
  CreatedOn: Date;
  UpdatedBy: string;
  UpdatedOn: Date;
}

export class empdata {
  
    Name!: string;
    Email!: string;
    Age!: string;
    Designation!: string;
    Gender!: string;
    DateOfBirth!: string;
    IsActive!: boolean;
    IsDeleted!: boolean;
    CreatedBy!: string;
    CreatedOn!: string;
    UpdatedBy!: string;
    UpdatedOn!: Date;
    msg_sc?:string;
    EmpID?:number;
set (res:empdata)
{
  this.Name=res.Name;
  this.Email=res.Email;
  this.Gender=res.Gender;
  this.IsDeleted=res.IsDeleted;
  this.IsActive=res.IsActive;
  this.Designation=res.Designation;
  this.UpdatedBy=res.UpdatedBy;
  this.UpdatedOn=res.UpdatedOn;
  this.DateOfBirth=res.DateOfBirth;
  this.CreatedBy=res.CreatedBy;
  this.CreatedOn=res.CreatedOn;
}
}

export interface empdelete
{
msg:string;
msg_sc:string;

}
export interface empupdate
{
msg:string;
msg_sc:string;

}
 

