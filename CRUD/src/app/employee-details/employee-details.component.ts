import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Allemploylist } from '../shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private route:Router,private auth:AuthenticationService) { }
  //public Allemployee!:Allemploylist[];
  Allemployee!:Allemploylist[];
    ngOnInit(): void {
  }
  onadd(){
    this.route.navigate(['/Addemp']);
  }
  GetAllemp(){
     this.auth.GetAllEmp().subscribe((data:any)=>this.Allemployee=data['data']);   
  }
}

