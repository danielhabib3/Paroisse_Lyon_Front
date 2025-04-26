import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { FoodItemComponent } from './components/home/cantine/food-item/food-item.component';
import { FoodMenuComponent } from './components/home/cantine/food-menu/food-menu.component';
import { CartComponent } from './components/home/cantine/cart/cart.component';
import { CantineComponent } from './components/home/cantine/cantine.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'cantine', component: CantineComponent,
                children: [
                    { path: '', component: FoodMenuComponent },
                    { path: 'food-item', component: FoodItemComponent },
                    { path: 'cart', component: CartComponent }
                ]
            }
        ]
    },
    { path: 'orders', component: OrdersPageComponent }
];
