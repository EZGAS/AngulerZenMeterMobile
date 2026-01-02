import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../utility/auth.service';

@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private router: Router, private authService: AuthService) { }
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (this.authService.getAccessToken()) {
      let token = this.authService.getAccessToken();
      request = this.addToken(request, token);
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        //alert('Error!!!!!');
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  addToken(request: HttpRequest<any>, token: string | null) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshAccessToken().pipe(
        switchMap((token: any) => {
          if (token.Result) {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.token);
            localStorage.setItem('user_id', token.id);
            localStorage.setItem('role', token.role);
            localStorage.setItem('token', token.token);
            localStorage.setItem('refreshToken', token.refreshToken);
            return next.handle(this.addToken(request, token.token));
          } else {
            alert('未經授權，請重新登入');
            this.authService.logout();
            this.router.navigate(['login']);
            return EMPTY;
          }
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(request, token));
        }));
    }
  }


}
