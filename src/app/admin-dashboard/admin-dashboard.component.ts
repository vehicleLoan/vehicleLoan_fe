import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminservice:AdminLoginService,private router:Router) { }
   
  cust:Customer = new Customer();
  ngOnInit(): void {
    // this.adminservice.view().subscribe(data => {
    //   this.cust=data;
    //   console.log(JSON.stringify(data));
    // }
    // );
  }
   
  view(){

  }

  logout(){
    this.router.navigate(['/loginAdminLink']);
  }

}
