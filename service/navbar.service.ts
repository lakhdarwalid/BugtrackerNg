import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message : string){
    this.subject.next(message);
  }

  clearMessage(){
    this.subject.next();
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
