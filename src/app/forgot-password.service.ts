import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forgotpass } from './forgotpass';
import { resetpass } from './resetpass';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpclient:HttpClient) { }

  validate(user:forgotpass):Observable<Boolean>{
    return this.httpclient.post<Boolean>("http://localhost:9090/forgetpassword",user)
  }

  resetPassword(userpass:resetpass,custId:number):Observable<Boolean>{
    return this.httpclient.post<Boolean>("http://localhost:9090/resetpassword?custId="+custId,userpass)
  }
}
