import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/account';
import { StaffServiceService } from '../staff-service.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private staffService: StaffServiceService) { }
  num: any
  accounts: any
  errMsg: any
  account: Account = new Account;


  statusChange(account: Account) {
    this.staffService.statusChange(account)
      .subscribe(data => {
        console.log(data)
      }
        , err => {
          console.log(err)
        })
  }

  staffFindAccByIdForm = new FormGroup({
    accId: new FormControl('', [Validators.required])
  });
submit(){
  console.log(this.f['accId'].value)
  this.staffService.getAccById(this.f['accId'].value).subscribe(data=>{
    console.log(data);
    this.account = data as Account;

  },err=>{console.log(err.error.message);this.errMsg=err.error.message});
}
  get f() {
    return this.staffFindAccByIdForm.controls;
  }
  ngOnInit(): void {
    this.getAccounts()
  }
  getAccounts() {
    this.staffService.getAccounts().subscribe(data => { console.log("AQUI" + data); this.accounts = data })
  }

}
