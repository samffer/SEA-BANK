import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Approver } from './approver';

@Injectable({
  providedIn: 'root'
})
export class ApproverserviceService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/admin'

  checkCredentials(approver: Approver): Observable<object> {
    console.log(approver)
    return this.http.post<Approver>(`${this.baseUrl}` + '/authenticate', approver)
  }
}
