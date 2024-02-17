import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from '../models/adduser';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  private baseUrl = environment.apiEndpoint;
   constructor(private http:HttpClient  ){}

  //  addinguser
  adduser(data:any)
  {
 
    return this.http.post(`${this.baseUrl}/user`, data);
  }

  

  getuser(data:any)
  {

  }

  removeuser(){

  }

}