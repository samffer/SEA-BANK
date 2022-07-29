import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer = new Customer
  errPass: any
  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit() {

    this.customer.fullName = this.f['name'].value
    this.customer.username = this.f['username'].value
    this.customer.password = this.f['password'].value
    if (this.customer.password == this.f['repassword'].value) {

      this.customerService.createCustomer(this.customer).subscribe(data => {
        console.log(data)
        this.router.navigate(["/"])
      }, err => { 
        console.log(err) 
        this.errPass = err.error.message})
    } else {
      this.errPass = "Password Mismatch"
      return
    }
  }
  customerCreateAccountForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required])
  });

  get f() {
    return this.customerCreateAccountForm.controls;
  }

}
