import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {

  constructor() { }
   
  public roi:number=10;
  public amount:number=100000;
  public loanterms:number=24;
  public emi:number;
  r:number;
  n:number;
  totalPayment:number;
  totalInterest:number;
  calculateEmi(){
    
    this.n=this.loanterms;
    this.r=this.roi/(12*100);
    //console.log(this.r);
    this.emi = this.amount*this.r*((Math.pow(1+this.r,this.n))/(Math.pow(1+this.r,this.n)-1));
    //console.log(this.emi);
    this.totalPayment=this.emi*this.n; 
    this.totalInterest=this.totalPayment-this.amount;
  }


  ngOnInit(): void {
  }

}
