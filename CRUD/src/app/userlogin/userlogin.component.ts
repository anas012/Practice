import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../authentication.service';
import { userLoggedin, Userlogin } from '../shared/User.model';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class USERLOGINComponent implements OnInit {
  error!: string;
  message!: string;
  alert = false;
  msg!: string;
  alert2 = false;
  constructor(
    private auth: AuthenticationService,
    private route: Router,
    private routee: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  onlogin(form: NgForm) {
    if (!form.valid) {
      return;
    } else {
      this.auth.userlogin(this.userdata(form)).subscribe(
        (res: userLoggedin) => {
          const user = res;
          this.message = user.msg;
          if (this.message !== '') {
            this.alert = true;
          } else {
            this.auth.settoken(res.token, res.UserID);
            this.route.navigate(['details']);
          }
        },
        (errorMessage) => {
          this.message = errorMessage;
          console.log(this.message);
          this.alert = true;
        }
      );
    }
  }

  userdata(form: NgForm) {
    const user: Userlogin = {
      Username: form.value.Username,
      Password: form.value.Password,
    };
    return user;
  }
  onclickk() {
    this.route.navigate(['siginup']);
  }
  onclick() {
    this.alert = false;
    this.message = '';
    this.msg = '';
    this.alert2 = false;
  }
}
