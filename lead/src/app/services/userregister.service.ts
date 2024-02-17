import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/adduser';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  // constructor(private http:HttpClient  ){}
  // private userDataSubject = new BehaviorSubject<User[]>([]);
  // userData$ = this.userDataSubject.asObservable();

  // private baseUrl = environment.apiEndpoint;
  // private userData: any[] = [];
  // constructor(private http:HttpClient) { }

  // setUserData(data: User) {
  //   const currentData = this.userDataSubject.getValue();
  //   currentData.push(data);
  //   this.userDataSubject.next(currentData);
  //  }

  
  

//   getData(): Observable<any> {
//    this.http.get<any>(`http://localhost:3000/users`)
//  }

}