import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, public router: Router) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.API_URL}/auth/login`, { username, password })
      .pipe(map(response => {
        return response.data;
      }));
  }
}
