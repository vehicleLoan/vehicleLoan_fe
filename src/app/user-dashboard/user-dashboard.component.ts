import { Location } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Loan } from '../Loan';
import { UserService } from '../user.service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  show:boolean=false;
  cust:Customer = new Customer();
  custId:number;
  lo:Loan[] = [];
  index:number;
  amt:number[]= [];
   
  public roi:number ;
  public amount:number;
  public loanterms:number;
  public emi:number;
  public r:number;
  paid:boolean[]=[false];
 
  view:boolean=false;
  dis:boolean=false;
  lon:Loan[]=[];
  rem:number[]=[];
  lnamt:number[]=[];
  tenu:number[]=[];
  loanId:number;
  public roii:number;
  public amountt:number;
  public loantermss:number;
  public emii:number;
  public rr:number;

  constructor(private router:Router, private service:UserService, private location:Location,  private datePipe:DatePipe) { 
   
  }
  todayDate=this.datePipe.transform(new Date(),'yyyy-MM-dd');
  
ngOnInit(): void {
    if(Number(sessionStorage.getItem("custId"))>0){
    this.custId=Number(sessionStorage.getItem("custId"));
    this.service.viewUserByCustId(this.custId).subscribe(
      fetchUser=>{
        this.cust=fetchUser;
        sessionStorage.setItem("formDetails",JSON.stringify(this.cust));
        console.log(fetchUser);
      }
    );
    this.service.viewAllLoans(this.custId).subscribe(
      fetchLoan=>{
        this.lo=fetchLoan;
        console.log(fetchLoan);
        
        for(var index in this.lo){
          this.amount = this.lo[index].loanAmount;
          this.roi = this.lo[index].rateOfInterest;
          this.loanterms = this.lo[index].tenure;
       
          this.r=this.roi/(12*100);
          this.emi = this.amount*this.r*((Math.pow(1+this.r,this.loanterms))/(Math.pow(1+this.r,this.loanterms)-1));
         
          this.amt.push(this.emi);
          console.log("array is next");
          console.log(this.amt);
          //console.log(this.lo[index].emi)
      }
      }
    );

    this.service.viewApproved(this.custId).subscribe(
      fetchLoans=>{
        this.lon=fetchLoans;
       // console.log(fetchLoans);
        console.log(this.lon.length);
        for(var index in this.lon){
          this.amountt = this.lon[index].loanAmount;
         this.roii = this.lon[index].rateOfInterest;
          this.loantermss = this.lon[index].tenure;
       
        this.rr=this.roii/(12*100);
         this.emii = this.amountt*this.rr*((Math.pow(1+this.rr,this.loantermss))/(Math.pow(1+this.rr,this.loantermss)-1));
         
        this.rem.push(this.emii);
      
          this.roii= this.lon[index].rateOfInterest;
          this.amountt=this.lon[index].loanAmount;
          this.lnamt.push(this.amountt);
         
          this.loantermss= this.lon[index].tenure;
          this.tenu.push(this.loantermss);
        
        
        }
      }
    );

    }
    else{
      alert("Please Login!");
      this.router.navigateByUrl("/loginLink");
    }
  }
   
  // back(){
  //   this.router.navigate([]);
  // }
  
  logout(){
    sessionStorage.removeItem("custId");
    sessionStorage.removeItem("formDetails");
    this.router.navigate(['/loginLink']);
  }

  loan(){
    if(this.show)
      this.show=false;
    else
      this.show=true;
      this.view=false;
  }

  profile(){
    this.show=false;
    this.view=false;
  }

  scheduler(){
    this.show=false;
    if(this.view)
      this.view=false;
    else
      this.view=true;
  }

  pop(index){
    this.paid[index]=true;
    this.dis=true;
    this.amountt = this.lnamt[index];
    this.roii = this.roii;
     this.loantermss = this.tenu[index];
     console.log("loan amt ");
     console.log(this.amountt);


        
   if(this.lnamt[index]>=this.rem[index] && this.loantermss>1 ){
    
    this.rr=this.roii/(12*100);
    this.emii = this.amountt*this.rr*((Math.pow(1+this.rr,this.loantermss))/(Math.pow(1+this.rr,this.loantermss)-1));
    this.rem[index]=this.emii;
    
    this.amountt = this.amountt-this.emii;
 
    this.lnamt[index]=this.amountt;
    this.amountt=this.lnamt[index];
     
     this.loantermss=this.loantermss-1;
     this.tenu[index]=this.loantermss;
     this.loantermss=this.tenu[index];
     
   }
   else{
    if(this.loantermss>0){
      this.emii=this.amountt;
      this.amountt = this.amountt-this.emii;
      console.log("amount emi")
      console.log(this.emii);
      this.loantermss=this.loantermss-1;
    this.lnamt[index]=this.amountt;
    this.rem[index]=this.lnamt[index];
    this.tenu[index]=this.loantermss;}
    
     
   } 
  }  
}
