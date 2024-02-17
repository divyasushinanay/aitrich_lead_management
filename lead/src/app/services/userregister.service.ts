import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/adduser';

@Injectable({
  providedIn: 'root',
})
export class UserregisterService {
  private baseUrl = environment.apiEndpoint;
  constructor(private http: HttpClient) {}

  //  Adding user
  adduser(data: any) {
    return this.http.post(`${this.baseUrl}/users`, data);
  }

// Fetching User
  getuser() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  removeuser(id: string) {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
}
