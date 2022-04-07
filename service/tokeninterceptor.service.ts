import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiUrls } from '../shared/listofurls';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor( private authSerivce : AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.headers.get("skip"))
              return next.handle(req);
    if (req.url != `${environment.baseURL}${apiUrls.auth}`)
    {
     
    let token = this.authSerivce.getToken();
    let cleanedToken = token?.substring(1,token.length-1);
    req = req.clone({
      
      setHeaders : {Authorization : `Bearer ${cleanedToken}`}
    });
  }
    return next.handle(req);
 
  }
}
