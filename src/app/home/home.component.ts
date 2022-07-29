import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../users/customer/customer';
import { CustomerService } from '../users/customer/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
errMsg: any


  constructor(
    private router: Router, 
    private customerservice: CustomerService) { }

  ngOnInit(): void {
  }
  customer: Customer = new Customer

  submit() {
    this.customer.password = this.f['password'].value
    this.customer.username = this.f['username'].value
    this.customerservice.checkCredentials(this.customer)
    .subscribe(data => {
        //console.log(data)
        this.customerservice.updateApprovalMessage(data as Customer)
        //console.log(this.entity)
        this.router.navigate(["/customer/dashboard"])
      }
        , error => {
          console.log(error);
          this.errMsg = error.error.message
        })
  }

  customerLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.customerLoginForm.controls;
  }

  @Output() nameEmitter = new EventEmitter < Customer > ();  
    PostData(entity:Customer) {  
        this.nameEmitter.emit(entity);  
    }  
}