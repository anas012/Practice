import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  onadd(){
    this.route.navigate(['/Addemp']);
  }
}
