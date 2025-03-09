import { Component, input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';
import { Inject } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  imports: [ FormsModule, HttpClientModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;
  emptyUsername: boolean = false;
  emptyPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }

  login(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    if(this.username === '') {
      this.emptyUsername = true;
    }

    if(this.password === '') {
      this.emptyPassword = true;
    }

    if(this.emptyUsername || this.emptyPassword) {
      return;
    }

    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);

    // Replace 'http://your-backend-api.com/login' with your backend API endpoint
    this.http.post('http://localhost:8080/api/login', formData, { responseType: 'text' })
      .subscribe({
        next: (response: any) => {
          console.log(response);
          // Handle successful login (e.g., save token, navigate to another page)
          switch (JSON.parse(response).message) {
            case 'Login successful':
              let user = JSON.parse(response).user;
              console.log(user.roles);
              this.loginService.setUser(user);
              if(user.roles === 'chef') {
                this.router.navigate([`/orders`]);
              }
              else {
                this.router.navigate([`/home`]);
              }
              break;
            case "User doesn't exist":
              break;
            case 'Wrong password':
              break;
          }
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          // Handle login error (e.g., show an error message)
        }
      });
  }

  redirectToRegister(): void {
    this.router.navigate([`/register`]);
  }
}
