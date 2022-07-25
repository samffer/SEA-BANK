import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})
export class ApproverComponent implements OnInit {
  dateToday: any;
  name: any;
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().getDay();
  }

}
