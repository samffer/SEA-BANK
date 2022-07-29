import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit {

  staff: Staff = new Staff
  errPass: any
  constructor(
    private staffService: StaffService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit() {

    this.staff.fullName = this.f['name'].value
    this.staff.username = this.f['username'].value
    this.staff.password = this.f['password'].value
    if (this.staff.password == this.f['repassword'].value) {

      this.staffService.createStaff(this.staff).subscribe(data => {
        console.log(data)
        this.router.navigate(["/approver/managestaff"])
      }, err => { 
        console.log(err);
        this.errPass = err.error.message
      })
    } else {
      this.errPass = "Password Mismatch"
      return
    }
  }
  approverCreateStaffForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required])
  });

  get f() {
    return this.approverCreateStaffForm.controls;
  }
}
