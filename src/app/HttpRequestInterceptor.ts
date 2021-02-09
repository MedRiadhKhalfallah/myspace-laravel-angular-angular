import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router, private token: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err, caught: Observable<HttpEvent<any>>) => {
          if (err instanceof HttpErrorResponse && err.status == 401) {
            this.auth.changeAuthStatus(false);
            this.token.remove();
            localStorage.removeItem('roles');
            localStorage.removeItem('user');
            localStorage.removeItem('profileImg');
            if(this.router.url !== '/login'){
              this.router.navigateByUrl('/', { queryParams: { returnUrl: request.url } });
            }
          }
          throw err;
        })
      );  }
}
