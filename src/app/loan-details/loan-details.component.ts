import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
  }
  
  display= false;
  show=false
  exEmi=false;
  Noemi(){
    this.exEmi=false;
    this.display=true;
    this.show=false;
  
  }
  emi(){
    this.show=true;
    this.display=true;
  }


  submit(){
    localStorage.setItem('appForm',JSON.stringify(this.cust));
    console.log(this.cust);
    this.cust.custId=Number(sessionStorage.getItem("custId"));
    this.cust.docId=Number(sessionStorage.getItem("docId"));
    this.cust.vehicleId=Number(sessionStorage.getItem("vehicleId"));
    console.log(this.cust);
    this.userservice.addLoanDetails(this.cust).subscribe(
      status=>{
        alert("Loan Application Complete");
        this.router.navigateByUrl('/userDashboardLink');
      }
    )
  }
}
