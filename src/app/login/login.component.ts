import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from '../loginuser';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:loginUser = new loginUser();
  constructor(private router:Router,private userservice:UserLoginService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("custId");
  }
   
  
  login():void{
    this.userservice.loginUser(this.user).subscribe(
      isValid=>{
        console.log(isValid);
        if(isValid){
          sessionStorage.setItem("custId",this.user.custId.toString());
          sessionStorage.setItem("role","valid");
          this.router.navigate(['/userDashboardLink']);
        }else{
         this.router.navigate(['/loginLink']);
         alert("Invalid Credentials");
         window.location.reload();
        }
      }
    );
  }
}
