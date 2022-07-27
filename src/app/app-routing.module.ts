import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ApproverComponent } from './users/approver/approver.component';
import { ApproverloginComponent } from './users/approver/approverlogin/approverlogin.component';
import { CreatestaffComponent } from './users/approver/createstaff/createstaff.component';
import { ManagestaffComponent } from './users/approver/managestaff/managestaff.component';
import { RegistrationComponent } from './users/customer/registration/registration.component';
import { StaffDashboardComponent } from './users/staff/staff-dashboard/staff-dashboard.component';
import { StaffLoginComponent } from './users/staff/staff-login/staff-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'approver', component: ApproverComponent},
  { path: 'approver/approverlogin', component: ApproverloginComponent},
  { path: 'approver/createstaff', component: CreatestaffComponent},
  { path: 'approver/managestaff', component: ManagestaffComponent},
  { path: 'staff/staffLogin', component: StaffLoginComponent},
  { path: 'staff/dashboard', component:StaffDashboardComponent}, 
  { path: 'customer/registration', component: RegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
