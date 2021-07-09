import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Iusermodel, userRegister } from '../shared/User.model';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css'],
})
export class SiginupComponent implements OnInit {
  message!: string;
  alert = false;
  alert2 = false;
  IsActive = true;
  IsDelete = false;
  msg!: string;
  responseStatus!: string;
  constructor(
    private authservices: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  onsubmit(form: NgForm) {
    if (!form.valid) {
      return;
    } else {
      var c = this.userdata(form);
      this.authservices.SiginupUser(this.userdata(form)).subscribe(
        (response: userRegister) => {
          this.msg = response.msg_sc;
          console.log(this.msg);
          if (this.msg != null) {
            this.alert2 = true;
            form.resetForm();
            //this.route.navigate(['login']);
          }
        },
        (errorMessage) => {
          this.message = errorMessage;
          console.log(this.message);
          this.message = errorMessage;
          if (this.message != '') {
            this.alert = true;
          }
        }
      );
    }
  }
  userdata(form: NgForm) {
    const user: Iusermodel = {
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      Username: form.value.Username,
      Password: form.value.Password,
      PhoneNumber: form.value.PhoneNumber,
      Address: form.value.Address,
      IsActive: form.value.IsActive,
      IsDeleted: form.value.IsDeleted,
      CreatedBy: form.value.CreatedBy,
      CreatedOn: form.value.CreatedOn,
      UpdatedBy: form.value.UpdatedBy,
      UpdatedOn: form.value.UpdatedOn,
    };
    return user;
  }

  onclick() {
    this.alert = false;
    this.alert2 = false;
    this.message = '';
    this.msg = '';
  }
}
