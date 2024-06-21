// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === AppSettings.username && this.password === AppSettings.password) {
      this.router.navigate(['/chat']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
