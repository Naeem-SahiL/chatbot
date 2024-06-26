// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from './material/material.module';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app'
import { SignupComponent } from './signup/signup.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChatuiComponent } from './chatui/chatui.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ThemeToggleDirective } from './directives/theme-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
    ChatuiComponent,
    ChatHeaderComponent,
    ThemeToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
