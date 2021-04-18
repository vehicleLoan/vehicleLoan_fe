import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-rejected',
  templateUrl: './admin-rejected.component.html',
  styleUrls: ['./admin-rejected.component.css']
})
export class AdminRejectedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/loginAdminLink']);
  }

}
