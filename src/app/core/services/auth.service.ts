import { UserData } from './../interfaces/user-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  userInfo:any;
  registerMethodApi(registerData:UserData):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',registerData)
  }
  loginMethodApi(loginData:UserData):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',loginData)
  }
  decodeUserData():void{
    const encodeData =localStorage.getItem('etoken')
        if(encodeData!=null){
            const decodeData =jwtDecode(encodeData);
            this.userInfo=decodeData
            this.userId=this.userInfo.id
            console.log(this.userId);
            console.log(this.userInfo);
        }
  }
  userId:any;
  forgetPassApi(forgetEmail:UserData):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,forgetEmail)
  }
  verifyCodeApi(resetCode:UserData):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,resetCode)
  }
  resetPassApi(resetPass:UserData):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,resetPass)
  }
}
