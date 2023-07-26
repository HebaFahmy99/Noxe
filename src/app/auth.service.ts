import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import jwtDecode from 'jwt-decode'; 
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken')){ 
      this.saveUserData();
    }
   } 
 
  saveUserData(){ 
    let encodedToken = JSON.stringify(localStorage.getItem('userToken')) 
    let decodedToken:any = jwtDecode(encodedToken); 
    this.userData.next(decodedToken);
  } 

  Register(registerData:any):Observable<any>{ 
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',registerData);
  } 
  Login(loginData:any):Observable<any>{ 
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",loginData);
  } 

  Logout(){ 
    localStorage.removeItem('userToken'); 
    this.userData.next(null); 
    this._Router.navigateByUrl('/login');
  }
}
