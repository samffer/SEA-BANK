import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from 'src/app/account';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  createAccount(account: Account, id: any):Observable<object> {
    
    return this.http.post<Account>(`${this.baseUrl}`+"/" + `${id}`+'/account', account)
  }

  checkCredentials(approver: Customer): Observable<object> {
    console.log(approver)
    return this.http.post<Customer>(`${this.baseUrl}` + '/authenticate', approver)
  }

  constructor(private http: HttpClient) { }
private baseUrl = 'http://localhost:8080/api/customer'



getStaffs(): Observable<object> {
  return this.http.get(`${this.baseUrl}`)
}

createCustomer(staff: Customer): Observable<object> {
  console.log(staff)
  return this.http.post(`${this.baseUrl}` + '/register', staff)
}

private approvalStageMessage = new BehaviorSubject(new Customer);
currentApprovalStageMessage = this.approvalStageMessage.asObservable();

updateApprovalMessage(message: Customer) {
  this.approvalStageMessage.next(message)
  }
}
