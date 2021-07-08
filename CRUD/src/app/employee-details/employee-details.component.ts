import { Component, GetTestability, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Allemploylist, empdelete } from '../shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
alert=false;
alert2=false;
message!:string;
msg!:string;
  constructor( private route:Router,private auth:AuthenticationService) { }
  //public Allemployee!:Allemploylist[];
  Allemployee!:Allemploylist[];
    ngOnInit() {
      this.refreslist();
  }
  onadd(){
    this.route.navigate(['/Addemp']);
  }
  GetAllemp(){
    this.auth.GetAllEmp().subscribe((data:any)=>this.Allemployee=data['data']);   
 }
refreslist()
{
  this.auth.GetAllEmp().subscribe((data:any)=>this.Allemployee=data['data']);
}
  onupdate(id:number)
  {
    this.route.navigate(['Editemploye',id]);
  }
  ondelete(id:number)
  {
    this.auth.deleteemp(id).subscribe((res:empdelete)=>
    {
        if (res.msg)
        {
          this.alert=true;
          this.message=res.msg;
          console.log(res.msg);
        }
        else 
        {
          this.alert2=true;
          this.msg=res.msg_sc;
          this.refreslist();
        }

    }
    )
  }
  onclick(){
    this.alert=false;
    this.alert2=false;
  }
  Logout()
  {
    this.auth.settoken("","");
    this.route.navigate(['login']);
  }
}

