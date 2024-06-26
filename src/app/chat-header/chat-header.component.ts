import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent implements OnInit {
  private loginSubscription: Subscription;
  isLoggedIn = false;

  constructor(private router: Router,private authService: AuthService) {
    this.loginSubscription = this.authService.loginEvent$.subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  ngOnInit(): void {
    let user = this.authService.getUser();
    if(user){
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout().then(res => {
      this.router.navigate(['/']);
    })
  }


}
