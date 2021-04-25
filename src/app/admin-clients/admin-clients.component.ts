import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Loan } from '../Loan';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {
  cust:Customer = new Customer();
  constructor(private router:Router,private adminservice:AdminService) { }
   loan:Loan[];
  ngOnInit(): void {
    this.adminservice.viewApprovedUsers().subscribe(
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
