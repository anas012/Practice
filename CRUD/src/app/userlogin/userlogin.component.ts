import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class USERLOGINComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm)
  {
    if (!form.valid)
    {
      return ;
    }
    else 
    {
      
    }

  }
}
