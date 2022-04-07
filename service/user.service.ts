import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { environment } from "src/environments/environment";
import { apiUrls } from "../shared/listofurls";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private baseURL = `${environment.baseURL}${apiUrls.users}`;
    private recoveryURL = `${environment.baseURL}${apiUrls.passwordrecovery}`;
       

    constructor(private httpClient : HttpClient){
        
     }

    getUsers(): Observable<User[]>{
      //  const headers = this.getToken();
        return this.httpClient.get<User[]>(`${this.baseURL}`);
    }

    createUser(user: User): Observable<User>{;
        return this.httpClient.post<User>(`${this.baseURL}`, user);
    }

    getUserById(id: number):Observable<User>{
        return this.httpClient.get<User>(`${this.baseURL}/${id}`);
    }

    updateUser(user: User):Observable<object>{
        return this.httpClient.put(`${this.baseURL}/${user.user_id}`, user);
    }

    deleteUser(id : number):Observable<object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

    getUserByName(name : string):Observable<User>{
        return this.httpClient.get<User>(`${this.baseURL}/user=${name}`);
    }

    getUsersLikeName(name : string):Observable<User[]>{
        const headers = this.getToken();
        return this.httpClient.get<User[]>(`${this.baseURL}/userlike=${name}`, {headers : headers});
    }

    getToken() : HttpHeaders {
       const storedToken = localStorage.getItem('token');
       const modifiedToken= storedToken?.substring(1, storedToken.length-1);
       const token = 'Bearer '+modifiedToken;
       const headers = new HttpHeaders().set("Authorization", token);
       return headers;
    }

    doesUserExist(username : string){
        return this.httpClient.get(`${this.recoveryURL}/exist=${username}`, {headers:{skip:"true"}});
    }

    verifyQuestions(username : string, qst1 :string, qst2 :string, ans1 :string, ans2 :string ): Observable<User> {
        return this.httpClient.get<User>(`${this.recoveryURL}/match=${username}/${qst1}/${qst2}/${ans1}/${ans2}`, {headers:{skip:"true"}});
        
    }

    updatePassword(id: number, password : string):Observable<object>{
        let user = new User();
        return this.httpClient.put(`${this.recoveryURL}/upd=${id}/${password}`,user, {headers:{skip:"true"}});
    }
}