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

  ngOnInit(): void {
  }

  submit(){
    this.r=this.roi/(12*100);
    this.existing=(this.existing/this.income)*100;
    this.t=(0.65-(this.existing))*this.income;
    
    this.amount=this.t/(this.r*((Math.pow(1+this.r,this.loanterms))/(Math.pow(1+this.r,this.loanterms)-1)));
  }

  apply(){
    this.router.navigate(['/applyLink']);
  }
  
}
