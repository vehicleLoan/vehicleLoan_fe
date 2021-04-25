import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { EmploymentDetais } from './employmentDetails';
import { Loan } from './Loan';
import { UserDto } from './UserReg';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  registerUser(userreg:UserDto):Observable<UserDto>{
      return this.httpclient.post<UserDto>("http://localhost:9090/registerUser",userreg);
  }

  viewUserByCustId(custId:number):Observable<Customer>{
    return this.httpclient.get<Customer>("http://localhost:9090/findCustById?custId="+custId);
  } 

  viewAllLoans(custId:number):Observable<Loan[]>{
    return this.httpclient.get<Loan[]>("http://localhost:9090/viewAllLoans?custId="+custId);
  }

  addPersonalDetails(cust:Customer):Observable<any>{
       return this.httpclient.post<any>("http://localhost:9090/appForm1",cust);
  }

  addEmployementDetails(emp:EmploymentDetais):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/appForm2",emp);
  }

  addVehicleDetails(veh:Customer):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/appForm3",veh);
  }
   
  addBankDetails(bank:Customer):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/appForm4",bank);
  }
  
  addLoanDetails(loan:Customer):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/appForm5",loan);
  }

  uploadDoc(documents:FormData):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/documentUpload",documents);
  }

  viewApproved(custId:number):Observable<Loan[]>{
    return this.httpclient.get<Loan[]>("http://localhost:9090/viewApprov?custId="+custId);
  }
}

