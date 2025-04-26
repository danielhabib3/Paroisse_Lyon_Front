import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  loggedInUser: any = null;
    
  
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    // Subscribe to the user data in the UserService
    this.loginService.user$.subscribe((user: any) => {
      this.loggedInUser = user;  // Update loggedInUser when new data is received
    });
  }
}
