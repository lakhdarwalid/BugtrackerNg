import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../model/activity';
import { apiUrls } from '../shared/listofurls';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private baseUrl = `${environment.baseURL}${apiUrls.activities}`;

  constructor(private httpClient : HttpClient) { }

  getAllActivities(): Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(this.baseUrl);
  }

  getActivityById(id : number) : Observable<Activity>{
    return this.httpClient.get<Activity>(`${this.baseUrl}/${id}`);
  }

  createActivity(activity : Activity): Observable<Object>{
    return this.httpClient.post(this.baseUrl, activity);
  }

  updateActivity(id : number, activity : Activity){
    return this.httpClient.put(`${this.baseUrl}/${id}`,activity);
  }

  deleteActivity(id : number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
