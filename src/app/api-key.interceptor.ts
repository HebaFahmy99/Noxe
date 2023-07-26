import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
    let newRequest = request.clone({ 
      url:request.url.replace('api_key=','api_key=0a2f94ae1dc7db93cc6184394f176978')
    })
    return next.handle(newRequest);
  }
}
