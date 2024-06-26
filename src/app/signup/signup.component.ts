import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router,
    private authService: AuthService
    ) {}

  signup() {
    if(this.username === '' || this.password === ''){
      this.errorMessage = 'Username and password are required';
      return;
    }

    this.authService
    .signUp(this.username, this.password)
    .then(res =>  {
      if(res.error){
        this.errorMessage = res.error;
      } else {
        this.router.navigate(['/chat']);
      }
    });
  }

  login() {
    this.router.navigate(['/']);
  }
}
