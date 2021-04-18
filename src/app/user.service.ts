import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './UserReg';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  registerUser(userreg:UserDto):Observable<UserDto>{
      return this.httpclient.post<UserDto>("http://localhost:9090/registerUser",userreg);
  }


}

