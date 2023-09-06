import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  registerUser(userData: any) {
    const { appUrl } = environment;
    const json = JSON.stringify(userData);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
    return this.http.post<any>(`${appUrl}/account/register`, json, {headers})
  }

  loginUser(userData: any) {
    const { appUrl } = environment;
    const json = JSON.stringify(userData);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(`${appUrl}/account/login`, json, {headers})
  }

  logoutUser() {
    this.auth.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate([''])
  }
}
