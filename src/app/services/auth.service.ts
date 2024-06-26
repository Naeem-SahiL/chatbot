import { Auth, User } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;
  constructor(private fbAuth: AngularFireAuth) { }

  private loginSubject = new Subject<boolean>();
  private logoutSubject = new Subject<boolean>();
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Method to check if user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  // Observable streams for components to subscribe to
  loginEvent$ = this.loginSubject.asObservable();
  logoutEvent$ = this.logoutSubject.asObservable();

  signUp(email: string, password: string): Promise<{user: any | null, error: string | null}> {

    return this.fbAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        return {user, error: null};
      })
      .catch((error) => {
        const errorMessage = error.message;
        return {user: null, error: errorMessage};
      });
  }

  login(email: string, password: string): Promise<{user: any | null, error: string | null}> {
    return this.fbAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.user = user;
        this.loginSubject.next(true);
        this.isAuthenticatedSubject.next(true);
        return {user, error: null};
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {user: null, error: errorMessage};
      });
  }

  logout(): Promise<void> {
    return this.fbAuth.signOut()
      .then(() => {
        this.user = null;
        this.loginSubject.next(false);
        this.isAuthenticatedSubject.next(false);
      });
  }

  isUserLoggedIn(){
    return this.fbAuth.currentUser !== null;
  }

  getUser(){
    return this.user;
  }
}
