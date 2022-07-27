import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ApproverComponent } from './users/approver/approver.component';
import { CustomerComponent } from './users/customer/customer/customer.component';
import { RegistrationComponent } from './users/customer/registration/registration.component';
import { CreatestaffComponent } from './users/approver/createstaff/createstaff.component';
import { ManagestaffComponent } from './users/approver/managestaff/managestaff.component';
import { ApproverloginComponent } from './users/approver/approverlogin/approverlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffLoginComponent } from './users/staff/staff-login/staff-login.component';
import { StaffDashboardComponent } from './users/staff/staff-dashboard/staff-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,

    ApproverComponent,
    CustomerComponent,
    RegistrationComponent,
    CreatestaffComponent,
    ManagestaffComponent,
    ApproverloginComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
