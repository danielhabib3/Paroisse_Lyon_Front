import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { FoodItemComponent } from './components/cantine/food-item/food-item.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { CartComponent } from './components/cantine/cart/cart.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', component: FoodMenuComponent },
            { path: 'food-item', component: FoodItemComponent },
            { path: 'cart', component: CartComponent }
        ]
    },
    { path: 'orders', component: OrdersPageComponent }
];
