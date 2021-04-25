import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Loan } from '../Loan';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public loanId:number;
  custId:number;
  constructor(private adminservice:AdminService,private router:Router,public dialog: MatDialog) { }
   
  public AllCustomer = [];
  loan:Loan[];
  document:Document[];

  cust:Customer = new Customer();
  ngOnInit(): void {
    if(Number(sessionStorage.getItem("adminId"))>0){
      this.adminservice.viewAll().subscribe(
        data=>{
          this.loan= data;
          sessionStorage.setItem("loan",JSON.stringify(data));
          console.log(this.loan);
        }
      );
    }
    else{
      alert("Please Login");
      this.router.navigateByUrl("/loginAdminLink")
    }


    // this.adminservice.viewdocuments().subscribe(
    //   data=>{
    //     this.document=data;
    //   }
    // );
     
  }
  openDialog(loanId:number){
    sessionStorage.setItem("loanId",JSON.stringify(loanId));
   const dialogRef =this.dialog.open(ViewComponent) ;
    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
      });
    } 


  logout(){
    sessionStorage.removeItem("adminId");
    this.router.navigate(['/loginAdminLink']);
  }

  approveLoan(loanId){
    console.log(loanId);
    this.adminservice.approveLoan(loanId).subscribe(
      data=>{
        this.loanId=data;
      }
    );
  window.location.reload();
  }

  rejectLoan(loanId){
    this.loanId = loanId;
    console.log(loanId);

    this.adminservice.rejectLoan(loanId).subscribe(
      data=>{
        this.loanId=data;
      }
    );
    window.location.reload();
  }

}
