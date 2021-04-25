import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.cust = JSON.parse(sessionStorage.getItem("formDetails"));
  }

  submit(){
    this.cust.custId=Number(sessionStorage.getItem("custId"));
 
    console.log(this.cust);
 
    this.userservice.addBankDetails(this.cust).subscribe(
     status=>{
       console.log(status);
     }
    )
    this.router.navigateByUrl("/uploadLink");
  }
}