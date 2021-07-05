export interface Iusermodel 
{       
       FirstName:string;
        LastName:string;
        Username:string;
        Password:string;
         PhoneNumber:string;
         Address:string;
};
 export interface userRegister
{
      token:string;
      UserID:string;
      msg:string;
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
};



