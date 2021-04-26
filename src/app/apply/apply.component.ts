import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
   
  cust:Customer = new Customer();
  
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.cust = JSON.parse(sessionStorage.getItem("formDetails"));
   
    console.log(sessionStorage.getItem("custId"));
    if(sessionStorage.getItem("custId")==null){
      alert("Please Login to View this Page");
      this.router.navigate(['/loginLink']);
    }
  }

  submit(){
    localStorage.setItem('appForm',JSON.stringify(this.cust));
    //console.log(localStorage.getItem('appForm'));
    //console.log(JSON.stringify(this.cust));
    this.cust.custId=Number(sessionStorage.getItem("custId"));
    console.log(this.cust.custId);
    this.userservice.addPersonalDetails(this.cust).subscribe(
      valid=>{
        //sessionStorage.setItem("custId",this.cust.custId.toString());
         console.log(status);
      }
    );
    this.router.navigate(['/employmentDetailsLink']);
  }
  
  logout(){
    sessionStorage.removeItem("custId");
    sessionStorage.removeItem("formDetails");
    this.router.navigate(['/loginLink']);
  }
}
