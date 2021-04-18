import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';
import { Loginadmin } from '../loginadmin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  
  admin:Loginadmin = new Loginadmin();
  constructor(private router:Router, private adminservice:AdminLoginService) { }
  
  ngOnInit(): void {
  }
  

  login():void{
    this.adminservice.loginAdmin(this.admin).subscribe(
      isValid=>{
        console.log(isValid);
        if(isValid){
          sessionStorage.setItem("adminId",this.admin.adminId.toString());
          this.router.navigate(['/adminDashboardLink']);
        }else{
         this.router.navigate(['/loginAdminLink']);
         window.location.reload();
        }
      }
    );
  }
}
