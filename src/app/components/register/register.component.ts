import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  imports: [ FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  telephone: string = '';
  role: string = '';
  passwordConfirmation: string = '';
  isPasswordVisible: boolean = false;
  isPasswordConfirmationVisible: boolean = false;
  emptyUsername: boolean = false;
  emptyPassword: boolean = false;
  emptyTelephone: boolean = false;
  emptyRole: boolean = false;
  
  roles: Array<string> = [];

  
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.getRoles(); // Call your function here
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }

  togglePasswordConfirmationVisibility(): void {
    this.isPasswordConfirmationVisible = !this.isPasswordConfirmationVisible;
    const passwordConfirmationInput = document.getElementById('passwordConfirmation') as HTMLInputElement;
    passwordConfirmationInput.type = this.isPasswordConfirmationVisible ? 'text' : 'password';
  }

  getRoles(): void {
    this.http.get('http://localhost:8080/api/roles')
      .subscribe({
        next: (response: any) => {
          this.roles = response.roles;
          // Handle successful login (e.g., save token, navigate to another page)
        },
        error: (error: any) => {
          console.error('Roles failed:', error);
          // Handle login error (e.g., show an error message)
        }
      });
  }

  register(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    if(this.username === '') {
      this.emptyUsername = true;
    }

    if(this.password === '') {
      this.emptyPassword = true;
    }

    if(this.telephone === '') {
      this.emptyTelephone = true;
    }

    if(this.role === '') {
      this.emptyRole = true;
    }

    if(this.password === '') {
      this.emptyPassword = true;
    }

    if(this.emptyUsername || this.emptyPassword || this.emptyTelephone || this.emptyRole) {
      return;
    }

    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    formData.append('telephone', this.telephone);
    formData.append('role', this.role);

    // Replace 'http://your-backend-api.com/login' with your backend API endpoint
    this.http.post('http://localhost:8080/api/register', formData, { responseType: 'text' })
      .subscribe({
        next: (response: any) => {
          console.log('Register successful:', response);
          // Handle successful login (e.g., save token, navigate to another page)
          switch (JSON.parse(response).message) {
            case 'User registered successfully':
              this.loginService.login(JSON.parse(response).user);
              this.router.navigate([`/home`]);
              break;
            case "User already exists":
              break;
          }
        },
        error: (error: any) => {
          console.error('Register failed:', error);
          // Handle login error (e.g., show an error message)
        }
      });
  }

  redirectToLogin(): void {
    this.router.navigate([`/`]);
  }

  validateFrenchPhoneNumber(phoneNumber: string): boolean {
    // Regular expression for validating French phone numbers
    const regex = /^0[67]{1}[0-9]{8}$/;
    console.log(regex.test(phoneNumber));
  
    // Check if the phone number matches the regex
    return regex.test(phoneNumber);
  }
}
