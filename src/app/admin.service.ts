import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Loan } from './Loan';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }
   
  viewAll():Observable<Loan[]>{
    return this.httpclient.get<Loan[]>("http://localhost:9090/viewAll");
  }
  
  approveLoan(loanId:number):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/approveLoan",loanId);
  }

  rejectLoan(loanId:number):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/rejectLoan",loanId);
  }

  viewApprovedUsers():Observable<Loan[]>{
    return this.httpclient.get<Loan[]>("http://localhost:9090/viewapprovedusers");
  }

  viewRejectedUsers():Observable<Loan[]>{
    return this.httpclient.get<Loan[]>("http://localhost:9090/viewrejectedusers");
  }

  viewdocuments():Observable<any>{
    return this.httpclient.get<any>("http://localhost:9090/viewDocuments");
  }

  viewApplication(loanId:number):Observable<any>{
    return this.httpclient.get<any>("http://localhost:9090/viewSingleLoan?loanId="+loanId);
  }

}
