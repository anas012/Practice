export interface Iusermodel 
{       
       FirstName:string;
        LastName:string;
        Username:string;
        Password:string;
         PhoneNumber:string;
         Address:string;
         IsActive:boolean;
         IsDeleted:boolean;   
         CreatedBy:string;
         CreatedOn:Date
         UpdatedBy?:string;
         UpdatedOn?:Date;
};
 export interface userRegister
{
      token:string;
      UserID:string;
      msg:string;
      msg_sc:string;
};

export interface Userlogin
{
        Username:string;
       Password:string;
};

export interface userLoggedin
{
  token:string;
  UserID:string;
  msg:string;
  msg_sc:string;
};

export interface EmployeAdd
{
  Name:string;
  Email:string;
  Age:number;
  Designation:string;
  Gender:string;
  DateOfBirth:Date;
  IsActive:boolean;
  IsDeleted:boolean;   
  CreatedBy:string;
  CreatedOn:Date
  UpdatedBy:string;
  UpdatedOn:Date;
};

