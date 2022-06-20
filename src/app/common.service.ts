import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //for environment URL
import { HttpClient } from '@angular/common/http'; //for service call
import { catchError, tap, Observable, Subject, map } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private router: Router, private helper: JwtHelperService) { }


  private _refreshrequired=new Subject<void>();

  get Refreshrequired(){
    return this._refreshrequired;
  }


  //Get Function Service
  getFunction(functionName: any):Observable<object>{
    return this.http.get(environment.rootUrl + functionName).pipe(tap(res => res), catchError(e=>{
      throw new Error(e);
    }))
  }

  //Post Function Service
  postFunction(functionName: any, data:any){
    return this.http.post(environment.rootUrl + functionName, data).pipe(tap(res => {this.Refreshrequired.next()}), catchError(e=>{
      throw new Error(e)
    }))
  } 

  //Update Function Service
  updateFunction(functionName: any, data:any){
    return this.http.put(environment.rootUrl + functionName, data).pipe(tap(res => { res }), catchError(e=>{
      throw new Error(e)
    }))
  }

  //Delete Function Service
  deleteFunction(functionName: any){
    return this.http.delete(environment.rootUrl + functionName).pipe(tap(res=>{this.Refreshrequired.next()}, catchError(e=>{
      throw new Error(e)
     
    })))
  }



  //Login 
  login(credentials: any){
    return this.http.post(environment.rootUrl + 'login/login', credentials).pipe(map((res:any)=>{
      if(res && res.token){
        localStorage.setItem('token', res.token)
      }
      return res;
    }))
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('token')
    // this.router.navigate(['/login'])
  }

  get currentUser() {
    const token = localStorage.getItem('token')
    if (token) {
      if (!this.helper.isTokenExpired(token)) {
        return this.helper.decodeToken(token)
        
      } else {
        this.logout()
      }
    }
  }
}
