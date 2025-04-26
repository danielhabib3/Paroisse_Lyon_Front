import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodItem } from '../../../model/food-item';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-cantine',
  imports: [CommonModule, RouterModule],
  templateUrl: './cantine.component.html',
  styleUrl: './cantine.component.css'
})
export class CantineComponent {

  myCart : FoodItem[] = [];

  constructor(private router: Router, private loginService: LoginService) {}

  openCart() {
    this.router.navigate(['/home/cantine/cart']);
  }

  InCartPage() : boolean {
    return this.router.url === '/home/cantine/cart';
  }

}
