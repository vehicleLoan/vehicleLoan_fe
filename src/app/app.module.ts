import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TandcComponent } from './tandc/tandc.component';
import { ApplyComponent } from './apply/apply.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LandingComponent } from './landing/landing.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminRejectedComponent } from './admin-rejected/admin-rejected.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserRegComponent } from './user-reg/user-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    UserRegComponent,
    EmiCalcComponent,
    PrivacyPolicyComponent,
    TandcComponent,
    ApplyComponent,
    EligibilityComponent,
    LoginAdminComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    EmploymentDetailsComponent,
    VehicleDetailsComponent,
    LoanDetailsComponent,
    LandingComponent,
    BankDetailsComponent,
    AdminClientsComponent,
    AdminRejectedComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ValidateEqualModule,
    FontAwesomeModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
