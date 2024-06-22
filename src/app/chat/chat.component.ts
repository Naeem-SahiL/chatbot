// src/app/chat/chat.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {

  messages: string[] = [];
  newMessage: string = '';

  constructor(private router: Router){}
  sendMessage() {

    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
  logout() {
    this.router.navigate(['/']);
  }
}
