import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';  // Import the UserService
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterOutlet, CommonModule]
})
export class HomeComponent implements OnInit {
  loggedInUser: any = null;
  

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    // Subscribe to the user data in the UserService
    this.loginService.user$.subscribe((user: any) => {
      this.loggedInUser = user;  // Update loggedInUser when new data is received
    });
  }
}
