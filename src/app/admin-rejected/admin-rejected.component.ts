import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Loan } from '../Loan';

@Component({
  selector: 'app-admin-rejected',
  templateUrl: './admin-rejected.component.html',
  styleUrls: ['./admin-rejected.component.css']
})
export class AdminRejectedComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminService) { }
   loan:Loan[];
  ngOnInit(): void {
    this.adminservice.viewRejectedUsers().subscribe(
      data=>{
        this.loan= data;
        console.log(data);
      }
    );
  }
  logout(){
    sessionStorage.removeItem("adminId");
    this.router.navigate(['/loginAdminLink']);
  }

}
