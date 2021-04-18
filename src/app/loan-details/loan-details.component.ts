import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  constructor() { }

  ngOnInit(): void {
  }
   

  exEmi=false;
  Noemi(){
    this.exEmi=false;
  }
  emi(){
    this.exEmi=true;
  }
}
