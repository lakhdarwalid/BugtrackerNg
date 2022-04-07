import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../model/userdto';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { apiUrls } from '../shared/listofurls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper= new JwtHelperService();
  private baseUrL  = `${environment.baseURL}${apiUrls.auth}`
  constructor(private httpClient : HttpClient) { }

  generateToken(userDto : UserDTO){
   
    return this.httpClient.post(this.baseUrL, userDto, {responseType : 'text' as 'json'});
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  decodeToken(token : string){
    return this.helper.decodeToken(token);
  }

  isAdmin() : boolean{
   if (this.decodeToken(JSON.stringify(localStorage.getItem('token'))).roles[0]=='admin')
        return true;
   return false;
  }
}
