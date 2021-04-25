import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRejectedComponent } from './admin-rejected/admin-rejected.component';
import { ApplyComponent } from './apply/apply.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanschemeComponent } from './loanscheme/loanscheme.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TandcComponent } from './tandc/tandc.component';
import { UploadComponent } from './upload/upload.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path:"",component:HomeComponent
      },
      {
        path:"homeLink",component:HomeComponent
      },
      {
        path:"aboutUsLink",component:AboutUsComponent
      },
      {
        path:"loginLink",component:LoginComponent
      },
      {
        path:"userRegLink",component:UserRegComponent
      },
      {
        path:"loginAdminLink",component:LoginAdminComponent
      },
      {
        path:"forgotPasswordLink",component:ForgotpasswordComponent
      },
      {
        path:"eligibleLink",component:EligibilityComponent
      },
      {
        path:"emiCalcLink",component:EmiCalcComponent
      },
      {
        path:"applyLink",component:ApplyComponent
      },
      {
        path:"employmentDetailsLink",component:EmploymentDetailsComponent
      },
      {
        path:"vehicleDetailsLink",component:VehicleDetailsComponent
      },
      {
        path:"loanDetailsLink",component:LoanDetailsComponent
      },
      {
        path:"bankDetailsLink",component:BankDetailsComponent
      },
      {
        path:"uploadLink",component:UploadComponent
      },
      {
        path:"loanSchemeLink",component:LoanschemeComponent
      },
      {
        path:"privacyPolicyLink",component:PrivacyPolicyComponent
      },
      {
        path:"termsLink",component:TandcComponent
      }
    ]
  },

  
  {
    path:"userDashboardLink",component:UserDashboardComponent
  },
  {
    path:"adminDashboardLink",component:AdminDashboardComponent
  },
  {
    path:"adminClientsLink",component:AdminClientsComponent
  },
  {
    path:"adminRejectedLink",component:AdminRejectedComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
