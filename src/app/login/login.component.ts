import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);

    // Replace 'http://your-backend-api.com/login' with your backend API endpoint
    this.http.post('http://localhost:8080/api/login', formData, { responseType: 'text' })
      .subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          // Handle successful login (e.g., save token, navigate to another page)
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          // Handle login error (e.g., show an error message)
        }
      });
  }
}
