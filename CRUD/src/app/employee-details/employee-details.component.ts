import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, GetTestability, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Allemploylist, empcheck, empdelete } from '../shared/employee.model';
import { dashboarduser } from '../shared/User.model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  alert = false;
  alert2 = false;
  message!: string;
  msg!: string;
  messagee!: string;
  error = false;
  username!: string;
  userid!: string;
  useremail!: string;
  fname!: string;
  lname!: string;
  fullname!: string;
  count!: number;
  i: number;
  Active = 0;
  Ase = 0;
  internc = 0;
  SeC = 0;
  Sse = 0;
  inc = 0;
  constructor(private route: Router, private auth: AuthenticationService) {}
  Allemployee!: Allemploylist[];
  Alluserdata!: dashboarduser;
  ngOnInit() {
    this.refreslist();
    this.dashboard();
  }
  onadd() {
    this.route.navigate(['/Addemp']);
  }
  refreslist() {
    this.auth.GetAllEmp().subscribe((data: Allemploylist) => {
      this.Allemployee = data['data'];
      if (data.msg !== '') {
        this.count = 0;
      } else {
        this.count = this.Allemployee.length;

        for (this.inc = 0; this.inc < this.count; this.inc++)
          if (this.Allemployee[this.inc].Designation.toLowerCase() == 'sse') {
            this.Sse++;
          } else if (
            this.Allemployee[this.inc].Designation.toLowerCase() == 'intern'
          ) {
            this.internc++;
          } else if (
            this.Allemployee[this.inc].Designation.toLowerCase() == 'se'
          ) {
            this.SeC++;
          } else this.Allemployee[this.inc].Designation.toLowerCase() == 'ase';
        {
          this.Ase++;
        }
        for (this.i = 0; this.i < this.count; this.i++) {
          if (this.Allemployee[this.i].IsActive == true) {
            this.Active++;
          }
        }
      }
    });
  }
  onupdate(id: number) {
    try {
      this.auth.empcheck(id).subscribe((res: empcheck) => {
        if (res.msg) {
          this.alert = true;
          // console.log(res.msg);
          this.message = 'User cant be updated because it is deleted';
          this.refreslist();
        } else {
          this.route.navigate(['Editemploye', id]);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  ondelete(id: number) {
    this.auth.deleteemp(id).subscribe((res: empdelete) => {
      console.log(res);
      if (res.msg) {
        this.alert = true;
        this.message = res.msg;
        console.log(res.msg);
      } else {
        this.alert2 = true;
        this.msg = res.msg_sc;
        this.refreslist();
        console.log(res.msg_sc);
      }
    });
  }
  onclick() {
    this.alert = false;
    this.alert2 = false;
    this.message = '';
    this.messagee = '';
    this.msg = '';
    this.error = false;
  }
  Logout() {
    this.auth.settoken('', '');
    this.route.navigate(['login']);
  }
  refreshlist() {
    this.refreslist();
  }
  dashboard() {
    this.auth.dashboard().subscribe((data: any) => {
      this.Alluserdata = data['data'][0];
      this.userid = this.Alluserdata.UserID;

      this.username = this.Alluserdata.Username;
      this.fname = this.Alluserdata.FirstName;
      this.lname = this.Alluserdata.FirstName;
      this.fullname = this.fname + '' + this.lname;
    });
  }
}
