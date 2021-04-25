import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserDto } from '../UserReg';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  
  userdto:UserDto = new UserDto();
  
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit():void{
  }
  
  submit(){
    this.userService.registerUser(this.userdto).subscribe(
      ruser=>{
        console.log(ruser);
        if(ruser!=null){
          alert("Registered Successfully! Please check email for login credentials");
          this.router.navigate(["/loginLink"]);
        }
        else{
          alert("Email already exists....Please use different Email Id");
          window.location.reload();
        }
        
      }
    );
  }

 
  

}
