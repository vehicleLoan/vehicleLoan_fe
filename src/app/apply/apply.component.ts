import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
   
  cust:Customer = new Customer();
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  

}
