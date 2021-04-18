import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './Admin';
import { Customer } from './customer';
import { Loginadmin } from './loginadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpclient:HttpClient) { }

  // registerUser(admin:Admin):Observable<Admin>{
  //   return this.httpclient.post<Admin>("http://localhost:9090/UserRestApp/rest/",admin);
  // }

  // viewall():Observable<Customer[]>{
  //   return this.httpclient.get<Customer>("");
  // }

     loginAdmin(admin:Loginadmin):Observable<Boolean>{
       return this.httpclient.post<Boolean>("http://localhost:9090/loginAdmin",admin);
     }
}
