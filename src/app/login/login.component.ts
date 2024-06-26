import { AuthService } from './../services/auth.service';
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

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Username and password are required';
      return;
    }

    this.authService.login(this.username, this.password)
      .then(res => {
        if (res.error) {
          this.errorMessage = res.error;
        } else {
          this.router.navigate(['/chatui']);
        }

      })

  }

  singup() {
    this.router.navigate(['/signup']);
  }
}
