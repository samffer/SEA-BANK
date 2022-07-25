import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApproverserviceService } from 'src/app/users/approver/approverservice.service';
import { Approver } from '../approver';

@Component({
  selector: 'app-approverlogin',
  templateUrl: './approverlogin.component.html',
  styleUrls: ['./approverlogin.component.css']
})
export class ApproverloginComponent implements OnInit {

  approver: Approver = new Approver;

  errMsg: any
  constructor(
    private approverservice: ApproverserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.approver.password = this.f['password'].value
    this.approver.username = this.f['username'].value

    this.approverservice.checkCredentials(this.approver)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(["/approver"])
      }
        , error => {
          console.log(error.error.message);
          this.errMsg = error.error.message
        })
  }

  approverLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.approverLoginForm.controls;
  }
}
