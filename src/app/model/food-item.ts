import { FoodOption } from './food-option';

export interface FoodItem {
    name: string;
    type: string;
    price: number;
    foodOptions: FoodOption[];
}
