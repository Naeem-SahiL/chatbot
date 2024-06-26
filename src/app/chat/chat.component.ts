// src/app/chat/chat.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChatapiService } from '../services/chatapi.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  messages: any[] = [];
  newMessage: string = '';
  userName = 'Sahil';

  constructor(
    private router: Router,
    private authService: AuthService,
    private chatApiservice: ChatapiService

    ){}

  // implement init here
  ngOnInit(){
    // check if user is logged in
    let user = this.authService.getUser();
    console.log(user);
    this.userName = user?.email || 'Sahil';
    // if not, redirect to login
    // if logged in, do nothing

  }

  sendMessage() {

    if (this.newMessage.trim()) {

      this.messages.push({
        text: this.newMessage,
        sender: 'user',
      });

    }

    this.chatApiservice.getChatApiResponse(this.newMessage).subscribe((response) => {
      console.log(response);
      this.messages.push({
        text: response.message,
        sender: 'bot',
      });
    });
    this.newMessage = '';
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Allow the default behavior (new line)
        return;
      } else {
        // Prevent the default behavior (new line) and send the message
        event.preventDefault();
        this.sendMessage();
      }
    }
  }

  adjustTextareaHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  logout() {
    this.router.navigate(['/']);
  }
}
