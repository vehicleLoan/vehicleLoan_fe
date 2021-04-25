import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Document } from '../Document';
import { Loan } from '../Loan';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  loans:Loan = new Loan();
  loan:any;
  lo:Loan;
  document:Document[];
  loanId:number;

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.loanId=Number(sessionStorage.getItem("loanId"));
    console.log(this.loanId);
    this.adminservice.viewApplication(this.loanId).subscribe(
      data=>{
        this.loan= data;
        console.log(data);
        console.log(this.loanId);
        sessionStorage.setItem("loanId",JSON.stringify(data));
        //this.loan.push(data);
        console.log(this.loan);
      }
    );
    this.loan=JSON.parse(sessionStorage.getItem("loanId"));  
    console.log(this.loan);
    this.adminservice.viewdocuments().subscribe(
      data=>{
        this.document=data;
      }
    );
  }

}


