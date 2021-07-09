import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { empcheck, empdata, empupdate } from '../shared/employee.model';
@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css'],
})
export class UpdateEmpComponent implements OnInit {
  id!: number;
  message!: string;
  msg!: string;
  gender!: string;
  alert = false;
  alert2 = false;
  error = false;
  gen!: string;
  agealert = false;
  a: number;
  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}
  public employee: empdata = {
    Name: '',
    Age: '',
    Email: '',
    DateOfBirth: null!,
    Gender: '',
    Designation: '',
    IsActive: false,
    IsDeleted: false,
    CreatedOn: null!,
    CreatedBy: '',
    UpdatedBy: '',
    UpdatedOn: null!,
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
    this.id = this.route.snapshot.params['id'];
    this.auth.GetempbyId(this.id).subscribe((res: any) => {
      this.employee.set(res['data'][0]);

      let dobb = this.employee.DateOfBirth;
      let date = new Date(dobb);
      let dateofbirth = this.dateformater(date);
      this.employee.DateOfBirth = dateofbirth;
      this.gender = this.employee.Gender.toLowerCase();
      if (this.gender == 'male') {
        this.employee.Gender = 'male';
      } else {
        this.employee.Gender = 'female';
      }
    });
  }
  dateformater(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${date}`;
  }
  OnupdateEmploye() {
    this.auth.empcheck(this.id).subscribe((res: empcheck) => {
      if (res.msg) {
        this.alert = true;
        console.log(res.msg);
        this.message = 'User cant be updated because it is deleted';
      } else {
        this.a = Number(this.employee.Age);
        if (this.a < 1) {
          this.agealert = true;
        } else {
          this.auth
            .onUpdate(this.id, this.employee)
            .subscribe((res: empupdate) => {
              if (res.msg) {
                console.log(res.msg);
                this.message = res.msg;
                this.alert = true;
              } else {
                this.msg = res.msg_sc;
                this.alert2 = true;
                this._router.navigate(['details']);
                this.agealert = false;
              }
            });
        }
      }
    });
  }

  onclick() {
    this.alert = false;
    this.alert2 = false;
    this.message = '';
    this.error = false;
    this.msg = '';
  }
  ifemployexist(id: number) {
    console.log('hello');
    this.auth.empcheck(id).subscribe((res: empcheck) => {
      console.log('Okay');
      if (res.msg) {
        this.error = true;
      } else {
        this.error = false;
      }
    });
  }
}
