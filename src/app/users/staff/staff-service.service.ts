import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


import { Account } from 'src/app/account';
import { Approver } from '../approver/approver';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  

  
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/staff'

  login(approver: Approver): Observable<object> {
    //console.log(approver)
    return this.http.post<Approver>(`${this.baseUrl}` + '/authenticate', approver)
}
statusChange(account: Account): Observable<object> {
  console.log(account)
  return this.http.put(`${this.baseUrl}` + '/accounts/approve' + `${!account.approved}`, account)
}
getAccounts(): Observable<object>{
  return this.http.get<Account>(`${this.baseUrl}` + '/accounts/approve')
}
getAccById(value: string | null): Observable<object> {
  return this.http.get<Account>(`${this.baseUrl}` + '/accounts/'+`${value}`)
}
}
