import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, public router: Router) {
  }

  list(): Observable<any[]> {
    return this.http.get<any>(`${environment.API_URL}/user`) as Observable<any[]>;
  }
}