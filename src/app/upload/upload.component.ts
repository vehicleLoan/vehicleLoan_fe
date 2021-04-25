import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  cust:Customer = new Customer();
  constructor(private userService:UserService,private router:Router) { }
  aadharCard:File;
  panCard:File;
  paySlip:File;
  ngOnInit(): void {
  }

  onFileChange(event){
    this.aadharCard = event.target.files[0];
  }

  onFileChange1(event){
    this.panCard = event.target.files[0];
  }

  onFileChange2(event){
    this.paySlip = event.target.files[0];
  }

  submit(){
    let formData: FormData = new FormData();
   formData.append('aadharCard', this.aadharCard);
   formData.append('paySlip',this.paySlip);
   formData.append('panCard', this.panCard);
    console.log(formData.get('aadharCard'));
  
    this.userService.uploadDoc(formData).subscribe(
      message=>{
        sessionStorage.setItem("docId",message);
        console.log("docId = "+message);
        this.router.navigateByUrl("/loanDetailsLink")
      }
    )
  } 

}
