
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { empdata } from '../shared/employee.model';
import { DatePipe } from '@angular/common';
import { pipe } from 'rxjs';
  

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css'],
})
export class UpdateEmpComponent implements OnInit {
  id!: number;
  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute
  ) {}
  genders = ['male', 'female'];
  public employee: empdata = {
    Name: '',
    Age: '',
    Email: '',
    DateOfBirth:'',
    Gender: '',
    Designation: '',
    IsActive: false,
    IsDeleted: false,
    CreatedOn: '',
    CreatedBy: '',
    UpdatedBy: '',
    UpdatedOn: '',
    set(res: empdata) {
      this.Name = res.Name;
      this.Email = res.Email;
      this.Age = res.Age;
      this.Gender = res.Gender;
      this.IsActive = res.IsActive;
      this.IsDeleted = res.IsDeleted;
      this.UpdatedBy = res.UpdatedBy;
      this.UpdatedOn = res.UpdatedOn;
      this.CreatedBy = res.CreatedBy;
      this.CreatedOn = res.CreatedOn;
      this.Designation = res.Designation;
      this.DateOfBirth = res.DateOfBirth;
    },
  };
  ngOnInit(): void {
    //this.id=this.route.snapshot.params['id'];
    // this.auth.GetempbyId(this.id).subscribe((res:any)=>console.log(res));

    this.id = this.route.snapshot.params['id'];
    this.auth.GetempbyId(this.id).subscribe((res: any) => {
      this.employee.set(res['data'][0]);
      // this.employee.Name=res['data'];
      
    });
  }

  OnupdateEmploye(form: NgForm) {}
}
