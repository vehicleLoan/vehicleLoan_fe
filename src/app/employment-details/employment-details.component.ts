import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { EmploymentDetais } from '../employmentDetails';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  
  cust:EmploymentDetais = new  EmploymentDetais();
  sal=false;
  self=false;
  pens=false;
  exEmi=false;
  
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.cust=JSON.parse(sessionStorage.getItem("formDetails"));
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
  


  submit(){
    this.cust.custId=Number(sessionStorage.getItem("custId")) ;
    localStorage.setItem("appForm",JSON.stringify(this.cust));
    console.log(JSON.stringify(this.cust));
    this.userservice.addEmployementDetails(this.cust).subscribe(
      status=>{
        console.log(status);
      }
    )
    this.router.navigateByUrl('/vehicleDetailsLink');
   }
}
