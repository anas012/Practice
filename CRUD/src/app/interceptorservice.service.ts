import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class InterceptorserviceService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.injector.get(AuthenticationService);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authservice.gettoken()}`,
      },
    });
    return next.handle(request);
  }
}
