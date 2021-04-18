import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { UserService } from '../user.service';
import { UserDto } from '../UserReg';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  
  userdto:UserDto = new UserDto();
  
  constructor(private userService:UserService) { }

  ngOnInit():void{
  }
  
  submit(){
    this.userService.registerUser(this.userdto).subscribe(
      ruser=>{
        console.log(ruser);
      }
    )
  }

 
  

}
