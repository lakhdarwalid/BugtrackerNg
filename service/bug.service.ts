import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Bug } from "../model/bug";
import { apiUrls } from "../shared/listofurls";


@Injectable({
    providedIn: 'root'
})

export class BugService{
    baseUrl = `${environment.baseURL}${apiUrls.bugs}`;
    constructor(private httpClient : HttpClient){ }

    getBugs(): Observable<Bug[]>{
       return this.httpClient.get<Bug[]>(`${this.baseUrl}`);
    }

    createBug(bug : Bug): Observable<Bug>{
        return this.httpClient.post<Bug>(`${this.baseUrl}`,bug);
    }

    updateBug(id : number, bug : Bug){
        return this.httpClient.put(`${this.baseUrl}/${id}`,bug);
    }

    getBugById(id : number) : Observable<Bug>{
        return this.httpClient.get<Bug>(`${this.baseUrl}/${id}`);
    }

    deleteBug(id : number) : Observable<Object>{
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

    getBugsByUser() : Observable<Bug[]>{
        return this.httpClient.get<Bug[]>(`${this.baseUrl}/bugsbyUser`);
    }
}