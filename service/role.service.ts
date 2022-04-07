import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Role } from "../model/role";
import { apiUrls } from "../shared/listofurls";

@Injectable({
    providedIn: 'root'
})

export class RoleService{
    private baseUrl = `${environment.baseURL}${apiUrls.roles}`;

    constructor(private httpClient : HttpClient){  }

    getRoles(): Observable<Role[]>{
        return this.httpClient.get<Role[]>(`${this.baseUrl}`);
    }

    getRoleByName(name: string):Observable<Role>{
        return this.httpClient.get<Role>(`${this.baseUrl}/${name}`);
        
    }

    createRole(role: Role):Observable<object>{
        return this.httpClient.post(`${this.baseUrl}`,role);
    }

    deleteRole(id : number): Observable<object>{
         return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

    getRoleById(id : number){
        return this.httpClient.get<Role>(`${this.baseUrl}/${id}`);
    }

    updateRole(role : Role){
        return this.httpClient.put(`${this.baseUrl}/${role.role_id}`,role);
    }
}