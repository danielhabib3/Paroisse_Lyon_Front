import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../../../../model/food-item';
import { CommonModule } from '@angular/common';
import { FoodOption } from '../../../../model/food-option';


@Component({
  selector: 'app-food-item',
  imports: [CommonModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

  foodItem!: FoodItem;

  constructor(private route: ActivatedRoute) {
    // Get the query parameters from the route
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
          const parsedItem = JSON.parse(params['item']); // Convert string back to object
          this.foodItem = parsedItem; // Assign the parsed object
          // create an array
          // this.foodItem.foodOptions = [];
          let foodOptionsTemp: FoodOption[] = [];
          // loop through the parsedItem object
          for (const [key, value] of Object.entries(parsedItem.foodOptions)) {
            foodOptionsTemp.push({name: key, options: value as string[]});
          }
          this.foodItem.foodOptions = foodOptionsTemp;
      }
    });
  }

  addToCart() {
    
  }

}
