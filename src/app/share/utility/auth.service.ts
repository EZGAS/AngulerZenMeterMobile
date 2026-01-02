import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http: HttpService) { }
  private hasToken(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  login(accessToken: string): void {
    localStorage.setItem('token', accessToken);
    this.isLoginSubject.next(true);
  }

  logout(): void {
    localStorage.clear();
    this.isLoginSubject.next(false);
  }


  tokenVaild(): boolean {
    let isVaild = false;
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      // 若token存在，則判斷token到期時間
      const exp = Number(JSON.parse(atob(token.split('.')[1])).exp + '000');
      const expDate = new Date(exp);
      // 若token到期則跳轉到登入頁面
      isVaild = (new Date() > expDate) ? false : true;
    }
    return isVaild;
  }


  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  refreshAccessToken() {
    return this.http.post('token/refresh', {
      refreshToken: this.getRefreshToken(),
      accountId: this.getAccountId()
    });
  }
  private getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
  private getAccountId() {
    return localStorage.getItem('user_id');
  }
  setAccessToken(token: any) {
    localStorage.setItem('token', token);
  }
  getAccessToken() {
    return localStorage.getItem('token');
  }


}
