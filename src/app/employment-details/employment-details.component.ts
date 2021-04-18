import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  sal=false;
  self=false;
  pens=false;
  exEmi=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  Noemi(){
    this.exEmi=false;
  }
  emi(){
    this.exEmi=true;
  }
  addPen(){
    this.pens=true;
    this.sal=false;
    this.self=false
  } 
  addsal(){
    this.sal=true;
    this.pens=false;
    this.self=false
  } 
  addSelf(){
    this.self=true;
    this.sal=false;
    this.pens=false;
  }
 

}
