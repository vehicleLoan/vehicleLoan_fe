import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ForgotPasswordService } from '../forgot-password.service';
import { forgotpass } from '../forgotpass';
import { resetpass } from '../resetpass';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 
  pass:forgotpass = new forgotpass();
  reset:resetpass = new resetpass();
  cust_Id:number;
  constructor(private forgotpassword:ForgotPasswordService) { }
   show:boolean = false;
  ngOnInit(): void {
  }
  
  forgotpass(){
    
  }

  check():void{
    this.forgotpassword.validate(this.pass).subscribe(
      valid=>{
        if(valid){
          console.log(valid);
          sessionStorage.setItem("custId",this.pass.custId.toString());
          this.show=true;
        }else{
          window.location.reload();
        }
      }
    );
   
  }

  set(){
    this.cust_Id = Number(sessionStorage.getItem("custId"));
    this.forgotpassword.resetPassword(this.reset,this.cust_Id).subscribe(
      show=>{
        //console.log(show);
      }
    );
    
  
  }

  
}
