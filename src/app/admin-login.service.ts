import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginadmin } from './loginadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpclient:HttpClient) { }

     loginAdmin(admin:Loginadmin):Observable<Boolean>{
       return this.httpclient.post<Boolean>("http://localhost:9090/loginAdmin",admin);
     }
}
