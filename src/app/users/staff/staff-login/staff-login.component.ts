import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Staff } from '../../approver/staff';
import { StaffServiceService } from '../staff-service.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  
  private staff: Staff = new Staff;
  errMsg: any
  constructor(
    private staffService: StaffServiceService,
    private router:Router) { }

  
  submit() {
    this.staff.password = this.f['password'].value
    this.staff.username = this.f['username'].value

    this.staffService.login(this.staff)
      .subscribe(data => {
        console.log(data + "success")
        this.router.navigate(["/staff/dashboard"])
      }, error => {
        console.log(error + "problem")
        this.errMsg = error.error.message
      })


  }

  staffLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.staffLoginForm.controls;
  }

  ngOnInit(): void {
  }

}
