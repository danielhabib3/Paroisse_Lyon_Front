import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-orders-page',
  imports: [ CommonModule ],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent implements OnInit {

  loggedInUser: any = null;
  orders: any;
  
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    // Subscribe to the user data in the UserService
    this.loginService.user$.subscribe((user: any) => {
      this.loggedInUser = user;  // Update loggedInUser when new data is received
    });
  }

  addOrder() {
    throw new Error('Method not implemented.');
  }

}
