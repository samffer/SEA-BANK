import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-managestaff',
  templateUrl: './managestaff.component.html',
  styleUrls: ['./managestaff.component.css']
})
export class ManagestaffComponent implements OnInit {
  staffs: any
  constructor(private staffService: StaffService) { }

  readuser() {
    this.staffService.getStaffs()
      .subscribe(data => {
        this.staffs = data
      })
  }

  statusChange(staff: Staff) {
    this.staffService.statusChange(staff)
      .subscribe(data => {
        console.log(data)
      }
        , err => {
          console.log(err)
        })
  }

  ngOnInit(): void {
    this.staffService.getStaffs()
      .subscribe(data => {
        console.log(data)
        this.staffs = data
      })
  }
}
