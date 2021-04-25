import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  constructor(private router:Router) { }

  public roi:number=10;
  public loanterms:number=24;
  public age:number=21;
  public income:number=10000;
  public existing:number=0;
  public amount:number=0;
  public t:number; 
  public r:number;
  public e:number;

  ngOnInit(): void {
  }

  submit(){
    this.r=this.roi/(12*100);
    if(this.existing==0){
      this.e=(this.existing/this.income)*100;
      this.t=(0.65)*this.income;
      this.amount=this.t/(this.r*((Math.pow(1+this.r,this.loanterms))/(Math.pow(1+this.r,this.loanterms)-1)));
    }
    else{
    this.e=(this.existing/this.income)*100;
    this.t=((this.e)-0.65)*this.income;
    this.amount=this.t/(this.r*((Math.pow(1+this.r,this.loanterms))/(Math.pow(1+this.r,this.loanterms)-1)));
    } 
  }

  apply(){
    sessionStorage.removeItem("appForm");
    this.router.navigate(['/applyLink']);
  }
  
}
