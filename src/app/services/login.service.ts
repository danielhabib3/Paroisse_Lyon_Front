import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject = new BehaviorSubject<any>(null); // initially null
  user$ = this.userSubject.asObservable(); // Observable for components to subscribe to

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  login(user: any) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  getUserValue() {
    return this.userSubject.value;
  }
}
