import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/apiresponse';
import { Application } from '../model/application';
import { apiUrls } from '../shared/listofurls';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl  = `${environment.baseURL}${apiUrls.app}`;

  constructor(private httpClient : HttpClient) { }


  getApps(): Observable<Application[]>{
    return this.httpClient.get<Application[]>(this.baseUrl);
  }

  getAllApps(page : number, size : number, field : string): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(`${this.baseUrl}/${page}/${size}/${field}`);
  }

  getAppById(id : number):Observable<Application> {
    console.log(id+ " from service");
    return this.httpClient.get<Application>(`${this.baseUrl}/${id}`);
  }

  saveApp(app : Application) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,app);
  }

  delete(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  update(app : Application){
    return this.httpClient.put(`${this.baseUrl}/${app.app_id}`,app);
  }

  searchByName(name : string): Observable<Application[]>{
    return this.httpClient.get<Application[]>(`${this.baseUrl}/aps=${name}`);
  }

  getAppByName(name : string) : Observable<Application>{
    return this.httpClient.get<Application>(`${this.baseUrl}/ap=${name}`);
  }
}
