import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  show:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/loginLink']);
  }

  loan(){
    if(this.show)
    this.show=false;
    else
    this.show=true;  
  }
}
