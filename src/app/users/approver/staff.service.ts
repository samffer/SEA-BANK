import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api/admin'

  statusChange(staff: Staff): Observable<object> {
    console.log(staff)
    return this.http.put(`${this.baseUrl}` + '/' + `${!staff.allow}`, staff)
  }

  getStaffs(): Observable<object> {
    return this.http.get(`${this.baseUrl}`)
  }

  createStaff(staff: Staff): Observable<object> {
    console.log(staff)
    return this.http.post(`${this.baseUrl}` + '/staff', staff)
  }

}
