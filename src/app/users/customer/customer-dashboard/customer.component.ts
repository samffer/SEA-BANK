import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  accounts: any;

  constructor(
    private customerservice: CustomerService,
    private router: Router
  ) { }
  public customer: Customer = new Customer;
  num: any;
  account: Account = new Account;
  
 

  approverCreateStaffForm = new FormGroup({
    initialDeposit: new FormControl('', [Validators.required]),
    accounttype: new FormControl('', [Validators.required]),
  });

  submit() {

    this.account.balance = this.f['initialDeposit'].value
    this.account.type = this.f['accounttype'].value
    console.log(this.account)
    console.log(this.customer.id)
    this.customerservice.createAccount(this.account, this.customer.id).subscribe((data: any) => {
      console.log(data);
      this.getAll();
      this.num = '6';
    }, (err: any) => {
      console.log(err);

    })
  }

  getAll(): void {
    this.customerservice.getAllAccountsBtCustomerId(this.customer.id).subscribe((data: any) => { console.log(data); this.accounts=data })
  }

  get f() {
    return this.approverCreateStaffForm.controls;
  }

  ngOnInit(): void {
    this.customerservice.currentApprovalStageMessage.subscribe((msg: any) => {
      //console.log(msg)
      this.customer = msg
      this.getAll();
    })
    
    console.log("AQUI "+this.customer)
  }

}