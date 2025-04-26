import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FoodItem } from '../../../../model/food-item';
import { FoodOption } from '../../../../model/food-option';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class FoodMenuComponent implements OnInit {
  // Initial list of food items
  foodItems: FoodItem[] = [];


  constructor(private http: HttpClient, private router: Router) {}


  openItem(item: FoodItem) {
    this.router.navigate(['/home/cantine/food-item'], { 
      queryParams: { item: JSON.stringify(item) },
      queryParamsHandling: 'merge'
    });
  }
  

  ngOnInit() {
    this.http.get('http://localhost:8080/api/menu')
      .subscribe({
      next: (response: any) => {
        this.foodItems = response.menu as FoodItem[];
      },
      error: (error: any) => {
        console.error('Get Menu failed:', error);
        // Handle login error (e.g., show an error message)
      }
      });
  }

  
}
