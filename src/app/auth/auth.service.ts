import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, throwError } from 'rxjs';
import { DataAuth } from '../models/dataauth';
import { map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:4201';

  private authBSubject = new BehaviorSubject<null | DataAuth>(null);

  userControl$ = this.authBSubject.asObservable();

  jwtHelper = new JwtHelperService();

  timeoutLogout: any;

  constructor(private http: HttpClient, private router: Router) {
    this.restore();
  }

  login(data: { email: string; password: string }) {
    return this.http.post<DataAuth>(`${this.baseUrl}/login`, data).pipe(
      tap((val) => {
        console.log(val);
        this.authBSubject.next(val);
        localStorage.setItem('user', JSON.stringify(val));
      }),
      catchError(error=>{
        alert("Credenziali non corrette")
        return of(0);
      })

    );
  }

  signUp(data: { name: string; email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/register`, data),
    throwError(() => alert("Riempire i campi correttamente"))
  }

  logout() {
    this.authBSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['']);
    if (this.timeoutLogout) {
      clearTimeout(this.timeoutLogout);
    }
  }
  restore() {
    const user = localStorage.getItem('user');

    if (!user) {
      return;
    }
    const userData: DataAuth = JSON.parse(user);
    console.log(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)) {
      return;
    }

    this.authBSubject.next(userData);
    this.autoLogout(userData);
  }

  private errors(error: any) {}

  autoLogout(data: DataAuth) {
    const expDate = this.jwtHelper.getTokenExpirationDate(
      data.accessToken
    ) as Date;
    const operationEx = expDate.getTime() - new Date().getTime();
    this.timeoutLogout = setTimeout(() => {
      this.logout();
    }, operationEx);
  }
}
