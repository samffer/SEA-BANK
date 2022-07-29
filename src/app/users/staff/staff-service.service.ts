import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
}
