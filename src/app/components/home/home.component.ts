import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';  // Import the UserService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser: any = null;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    // Subscribe to the user data in the UserService
    this.loginService.user$.subscribe((user: any) => {
      this.loggedInUser = user;  // Update loggedInUser when new data is received
    });
  }
}
