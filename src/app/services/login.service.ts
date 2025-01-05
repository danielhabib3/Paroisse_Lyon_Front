import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject = new BehaviorSubject<any>(null);  // Initialize with null

  // Observable to share user data
  user$ = this.userSubject.asObservable();

  // Set the user data
  setUser(user: any) {
    this.userSubject.next(user);
  }
}
