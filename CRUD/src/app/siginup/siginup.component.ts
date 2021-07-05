import { formatCurrency } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usermodel } from '../shared/User.model';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {
  genders = ['male','female'];

user !:usermodel;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm)
  {  
    if (!form.value)
    {
    return;
    }
    
    else {
      console.log (this.userdata(form));
    }
  }
  userdata(form:NgForm)
  {
    this.user.email=form.value.email;
    this.user.name=form.value.name;
    this.user.password=form.value.password;
    this.user.dob=form.value.dob,
    this.user.age=form.value.age,
    this.user.designation=form.value.designation;
    this.user.isactive=form.value.isactive;
  }
}