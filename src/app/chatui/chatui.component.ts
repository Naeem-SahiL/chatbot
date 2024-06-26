import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChatapiService } from '../services/chatapi.service';

@Component({
  selector: 'app-chatui',
  templateUrl: './chatui.component.html',
  styleUrl: './chatui.component.css'
})
export class ChatuiComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private chatApiservice: ChatapiService
  ) { }


  messages: any[] = [

    {
      text: 'Hello, How can I help you?',
      sender: 'bot',
    },



  ];
  newMessage: string = '';
  userName = 'Sahil';

  sendMessage() {

    if (this.newMessage.trim()) {

      this.messages.push({
        text: this.newMessage,
        sender: 'user',
      });

      this.messages.push({
        text: 'Thinking...',
        sender: 'bot',
      });

    }

    this.chatApiservice.getChatApiResponse(this.newMessage).subscribe((response) => {
      console.log(response);
      this.messages[this.messages.length - 1].text = response.message;
      // this.messages.push({
      //   text: response.message,
      //   sender: 'bot',
      // });
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

}
