import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from './loginuser';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private httpclient:HttpClient) { }

  loginUser(user:loginUser):Observable<Boolean>{
    return this.httpclient.post<Boolean>("http://localhost:9090/loginCustomer",user);
  }
}
